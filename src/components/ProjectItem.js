import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../assets/images/projectImg.png";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  .web,
  .github {
    letter-spacing: 0.2rem;
    font-size: 1.4rem;
    padding: 0.7em 2em;
    border-radius: 7px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    margin: 1rem 2rem 0 0;
  }
  .web {
    background-color: var(--gray-1);
  }
  .github {
    background-color: "transparent";
  }
  .web span {
    color: var(--black);
    font-weight: bold;
  }
  .github span {
    color: var(--gray-1);
  }
  //efecto hover
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
    background: var(--cian);
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
    /* color: var(--black); */
  }
  .boton:hover span {
    color: var(--black);
    font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  github = "",
  web = "",
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        {web && (
          <a href={web} target="_blank" rel="noreferrer" className="web boton">
            <span>Web</span>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="github boton"
          >
            <span>GitHub</span>
          </a>
        )}
      </div>
    </ProjectItemStyles>
  );
}
