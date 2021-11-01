import React from "react";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Que puedo hacer por ti" heading="Servicios" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="front end"
            desc="Desarrollo de interfaz de usuario UI. Creación de interacciones de elementos UX. Posicionamiento de la marca de tu empresa SEO. Responsive Design."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="back end"
            desc="Desarrollo de API REST. Deployment de server y database. Bases de datos relacionales y no relacionales."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app Dev"
            desc="Desarrollo de aplicaciones nativas para IOS y Android"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
