import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

import logo from "../assets/images/logo.svg";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
      padding-top: 1rem;
    }
    .logo {
      width: 60px;
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
        .logo {
          display: none;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Cristian Soria</h1>
          <PText>
            Full Stack Developer de Salta, Argentina. Siempre dispuesto a
            continuar aprendiendo. Con impulso constante en la búsqueda de
            mejores soluciones para emprender.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Web Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                path: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                path: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                path: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+543876004180",
                path: "tel:+543876004180",
              },
              {
                title: "crissoria07@gmail.com",
                path: "mailto:crissoria07@gmail.com",
              },
              {
                title: "Salta Capital, Argentina",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/crissoria/",
              },
              {
                title: "GitHub",
                path: "https://github.com/CrisSoria",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <img className="logo" src={logo} alt="logo" />{" "}
          <PText>© 2021 - Designed By CrisSoria</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
