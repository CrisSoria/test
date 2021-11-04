import React, { useRef, useState } from "react";
import styled from "styled-components";

import emailjs from "emailjs-com";
const MAIL_SERVICE_ID = process.env.REACT_APP_MAIL_SERVICE_ID;
const MAIL_TEMPLATE_ID = process.env.REACT_APP_MAIL_TEMPLATE_ID;
const MAIL_USER_ID = process.env.REACT_APP_MAIL_USER_ID;

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .statusMail {
    margin-left: 2rem;
    font-size: 1.3rem;
  }
  .danger {
    color: #ff0827;
    margin-left: 2rem;
    font-size: 1.3rem;
  }
  //fdfe
  .boton {
    transition: 0.3s ease all;
    position: relative;
    overflow: hidden;
  }
  .boton span {
    position: relative;
    z-index: 2;
    transition: 0.3s ease all;
  }
  .boton::after {
    content: "";
    width: 100%;
    height: 300px;
    background: #18a362;
    position: absolute;
    z-index: 1;
    top: -300px;
    left: 0;
    transition: 0.8s ease-in-out all;
    border-radius: 0px 0px 300px 300px;
  }

  .boton:hover::after {
    top: 0;
  }
  .boton span {
    color: var(--black);
  }
`;

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  function validate(input) {
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let errors = {};
    const testEmail = emailRegex.test(input.email);

    if (!input.name) {
      errors.name = "Ingresa un nombre";
    }
    if (!input.email) {
      errors.email = "Ingresa un mail";
    }
    if (input.email && !testEmail) {
      errors.email = "Ingresa un mail válido";
    }
    if (!input.message) {
      errors.message = "Ingresa un mensaje";
    }

    return errors;
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
    setErrors(validate({ ...state, [event.target.name]: event.target.value }));
  }

  //envio de Email
  const form = useRef();
  const [statusMail, setStatusMail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if (!state.email) {
      setErrors({ ...errors, email: "Ingresa un mail" });
      return;
    }

    emailjs
      .sendForm(MAIL_SERVICE_ID, MAIL_TEMPLATE_ID, form.current, MAIL_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setState(initialState);
          setStatusMail("ok");
        },
        (error) => {
          console.log(error.text);
          setStatusMail("error");
        }
      );
  };

  return (
    <>
      <FormStyle ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Tu Nombre
            {errors.name && <span className="danger">{errors.name}</span>}
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Tu Email
            {errors.email && <span className="danger">{errors.email}</span>}
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Tu mensaje
            {errors.message && <span className="danger">{errors.message}</span>}
            <textarea
              type="text"
              id="message"
              name="message"
              value={state.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          type="submit"
          className="boton"
          style={{ visibility: `${errors.email ? "hidden" : "visible"}` }}
        >
          <span>Enviar</span>
        </button>
        {statusMail && (
          <span
            className="statusMail"
            style={{
              color: `${statusMail === "ok" ? "#129100" : "#ff0827"}`,
            }}
          >
            {statusMail === "ok"
              ? "Mensaje enviado correctamente. Gracias."
              : "ERROR por favor utiliza otro medio de contacto."}
          </span>
        )}
      </FormStyle>
    </>
  );
}
