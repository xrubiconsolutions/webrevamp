import React from "react";
import Card from "../Earn/Card";
import { Container } from "../../..";
import styled from "styled-components";
import tw from "twin.macro";
import { payContentarticles } from "../../../../utils/data";

const BackgroundContainer = styled.div`
  ${tw`bg-secondary`}
  margin-bottom:50px;
  padding-bottom: 100px;
`;

const PayContent = () => {
  const articles = payContentarticles;
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

export default PayContent;
