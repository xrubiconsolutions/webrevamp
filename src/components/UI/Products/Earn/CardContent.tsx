import React from "react";
import Card from "./Card";
import { Container } from "../../..";
import styled from "styled-components";
import tw from "twin.macro";
import { earncontentarticles } from "../../../../utils/data";

export const BackgroundContainer = styled.div`
  ${tw`bg-secondary pb-12 md:pb-20 `};
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
