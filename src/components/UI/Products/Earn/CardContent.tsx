import React from "react";
import Card from "./Card";
import { Container } from "../../..";
import styled from "styled-components";
import tw from "twin.macro";
import { earncontentarticles } from "../../../../utils/data";

const BackgroundContainer = styled.div`
  ${tw`bg-secondary `};

  @media (min-width: 1024px) {
    padding-bottom: 150px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 120px;
  }

  @media (max-width: 450px) {
    padding-bottom: 100px;
    padding-top: 20px;
  }
`;

const EarnContent = () => {
  const articles = earncontentarticles;
  return (
    <BackgroundContainer>
      <Container>
        {articles.map((article, index) => {
          return <Card {...article} key={index} />;
        })}
      </Container>
    </BackgroundContainer>
  );
};

export default EarnContent;
