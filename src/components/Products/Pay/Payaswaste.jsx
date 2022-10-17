import React from "react";
import { Container } from "../..";
import FlexContainer from "../Flex";
import { Heading } from "../styles";
import PSR from "/public/img/PSR.png";
import { OverallContainer } from "../styles";

const Payaswaste = () => {
  const articles = [
    {
      text: "Pay-as-You Waste is a full waste management application that enables citizens to properly dispose their non-recyclable and specialized waste to collectors. This service solves the day to day problem of delayed waste collection by PSP or waste management agencies. Pay-as-You Waste ensures an efficient and effective waste management system to eliminate the overflow of waste bins and environmental pollution in general. This service allows waste to be collected at just a click at an affordable pricing rate for  individuals and businesses. ",
      imgAlt: "",
      imgSrc: PSR,
      reverse: true,
    },
  ];
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
