import React from "react";
import { Container } from "../..";
import FlexContainer from "../Flex";
import { Heading } from "../styles";
import { OverallContainer } from "../styles";
import { Payarticles } from "../../../utils/data";

const Payaswaste = () => {
  const articles = Payarticles;

  return (
    <div>
      <OverallContainer>
        <Container>
          <Heading>Pay-as-you-waste (Pakam Waste Disposal).</Heading>
          {articles.map((article) => {
            return <FlexContainer {...article} />;
          })}
        </Container>
      </OverallContainer>
    </div>
  );
};

export default Payaswaste;
