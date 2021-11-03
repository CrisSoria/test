import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    transition: 0.3s ease all;
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  .button span {
    position: relative;
    z-index: 101;
    transition: 0.3s ease all;
    color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
  }
  .button::after {
    content: "";
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: calc(-100% - 80px);
    border-bottom: 80px solid var(--cian);
    border-right: 80px solid transparent;
    transition: 0.6s ease-in-out all;
    /* color: var(--gray-1); */
  }
  .button:hover {
    border-color: var(--gray-2);
  }
  .button:hover span {
    color: var(--gray-2);
    font-weight: bold;
  }

  .button:hover::after {
    left: 0;
  }
  /* .button span:hover {
    color: var(--gray-1);
  } */
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = "test",
  btnLink = "test",
  outline = false,
}) {
  const link = () => {
    if (btnText.slice(-1) === "V") {
      return (
        <Link className="button" to={btnLink} target="_blank" download>
          <span>{btnText}</span>
        </Link>
      );
    } else {
      return (
        <Link className="button" to={btnLink}>
          <span>{btnText}</span>
        </Link>
      );
    }
  };

  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      {link()}
    </ButtonStyle>
  );
}
