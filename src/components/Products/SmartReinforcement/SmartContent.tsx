import React from "react";
import PSR from "/public/img/PSR.png";
import { Container } from "../../index";
import Card from "../Earn/Card";
import styled from "styled-components";
import tw from "twin.macro";

const BackgroundContainer = styled.div`
  ${tw`bg-secondary`}
  margin-bottom:50px;
  padding-bottom: 100px;
`;

const SmartContent = () => {
  const articles = [
    {
      imgSrc: PSR,
      imgAlt: "pickup",
      header1: "",
      header2: "How It Works",
      sub_text1:
        "Download and install the (Pakam Waste Disposal)  from google play store and/or IOS app store.",
      sub_text2:
        "Select your type of user (household or commercial) and create an account.",
      sub_text3:
        " Schedule for a waste (non-recyclable) pickup by entering the required information.",
      sub_text4:
        "A nearby collector will  accept your schedule and get routed to your                                                                         location to complete the pickup.",
      sub_text5: "Your monthly bill invoice would be sent for payment.",
      sub_text6: "",
      reverse: false,
    },
  ];

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
