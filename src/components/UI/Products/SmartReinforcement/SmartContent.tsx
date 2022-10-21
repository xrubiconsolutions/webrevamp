import React from "react";
import PSR from "/public/img/PSR.png";
import { Container } from "../../../index";
import Card from "../Earn/Card";
import styled from "styled-components";
import tw from "twin.macro";
import { smartContentarticles } from "../../../../utils/data";

const BackgroundContainer = styled.div`
  ${tw`bg-secondary`}
  margin-bottom:50px;
  padding-bottom: 100px;
`;

const SmartContent = () => {
  const articles = smartContentarticles;
  return (
    <BackgroundContainer>
      <Container>
        {articles.map((article, index) => {
          return <Card {...article} />;
        })}
      </Container>
    </BackgroundContainer>
  );
};

export default SmartContent;
