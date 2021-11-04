import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/about-page-img2.png";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../styles/transitions";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
      .henry {
        background-color: var(--deep-dark);
        padding: 1px 5px;
        border-radius: 4px;
      }
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      filter: grayscale(1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AboutPageStyles className="page">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hola, soy <span>Cris</span>
              </p>
              <h2 className="about__heading">Full Stack Developer </h2>
              <div className="about__info">
                <PText>
                  Desde pequeño me apasiona la lógica y poder usarla para la
                  resolución de problemas. Descubrí la programación en la
                  universidad mientras estudiaba Ingeniería Civil.
                  <br /> <br />
                  Durante mis experiencias laborales, me di cuenta que mediante
                  el código, podía automatizar tareas que eran repetitivas
                  mejorando mi productividad y disminuyendo errores.
                  <br /> <br />
                  Para poder realizar mis primeros programas me convertí en
                  autodidacta y así descubrí el bootcamp de{" "}
                  <a
                    className="henry"
                    href="https://www.soyhenry.com/webfullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Henry
                  </a>
                  . Brindándome la posibilidad de profesionalizarme y vivir de
                  lo que me apasiona.
                  <br /> <br />
                  Actualmente estoy en busca de desarrollo profesional y
                  adquirir experiencia en proyectos trabajando en equipo.
                </PText>
              </div>
              <Button btnText="Descargar CV" btnLink="/Cristian_Soria_CV.pdf" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Nasirabad Govt. High School, Chattogram"]}
              />
              <AboutInfoItem
                title="Collage"
                items={["BAF Shaheen College Chattogram"]}
              />
              <AboutInfoItem
                title="Varsity"
                items={["University Of Chitiagong"]}
              />
            </div> */}
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  "REACT",
                  "Redux",
                  "React Native",
                  "HTML",
                  "CSS",
                  "Apollo Client",
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={[
                  "Node",
                  "Express",
                  "PHP",
                  "PostgreSQL",
                  "MongoDB",
                  "GraphQL",
                  "Heroku",
                ]}
              />
              <AboutInfoItem
                title="General"
                items={["JavaScript", "Typescript", "Git"]}
              />
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={["junior developer at web Cifar"]}
              />
              <AboutInfoItem
                title="2012-2016"
                items={["Front end developer at web Cifar "]}
              />
              <AboutInfoItem
                title="2016-"
                items={["Freelance web Developer"]}
              />
            </div> */}
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </motion.div>
  );
}
