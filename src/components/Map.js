import React from "react";
import styled from "styled-components";
import MapImg from "../assets/images/map1.png";
import PText from "./PText";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Estoy aquí</h3>
          <PText>Salta Capital, Salta, Argentina</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Salta/@-24.7960685,-65.500669,12z/data=!3m1!4b1!4m5!3m4!1s0x941bc3a35151b7f9:0xa5cd992cd587f206!8m2!3d-24.7821269!4d-65.4231976"
            target="_blank"
            rel="noreferrer"
          >
            Abrir en google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
