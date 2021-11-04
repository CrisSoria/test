import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
// import AboutImg from "../assets/images/about-sec-img.png";
import aboutHome from "../assets/images/aboutHome.png";
import aboutMin from "../assets/images/aboutMin.png";

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
    /* border: 1px solid red; */
  }
  //imagenes superpuestas
  .aboutSection__right {
    position: relative;
    height: 400px;
  }
  .aboutImgMin,
  .aboutImgMax {
    filter: grayscale(1);
    border: 4px solid var(--gray-2);
    border-radius: 12px;
    /* overflow: hidden; */
    object-fit: cover;
  }
  .aboutImgMax {
    max-width: 80%;
    height: 300px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .aboutImgMin {
    max-width: 40%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      display: none;
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subheading="Full Stack Developer" heading="Sobre mí" />
          <PText>
            Siempre dispuesto a continuar aprendiendo. Con impulso constante en
            la búsqueda de mejores soluciones para emprenderlas. <br />
            Me apasiona desarrollar aplicaciones que resuelvan problemáticas y
            satisfagan necesidades.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Trabajos" btnLink="/projects" />
            <Button btnText="Ver más" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          {/* <img className="aboutImg" src={AboutImg} alt="Img" /> */}
          <img src={aboutHome} alt="img1" className="aboutImgMax" />
          <img src={aboutMin} alt="img2" className="aboutImgMin" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
