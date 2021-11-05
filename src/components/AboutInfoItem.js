/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 95vh;
  margin-top: 3rem;
  .title {
    min-width: 13rem;
    font-size: 2.4rem;
  }
  .items {
    display: inline-block;
    gap: 1.5rem;
    margin-left: 2rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    display: inline-block;
    margin: 0.3rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      max-width: 80vw;
      gap: 1rem;
      display: inline-block;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = "Title",
  items = ["HTML", "CSS"],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
