import React from "react";
import Group from "/public/img/GroupPhone.png";
import Pickup from "/public//img/Pickup.png";
import Line from "/public/img/Line.png";
import DropOff from "/public/img/DropOff.png";
import Card from "./Card";

import { Container } from "../..";
import styled from "styled-components";
import tw from "twin.macro";
import PSR from "/public/img/PSR.png";

const BackgroundContainer = styled.div`
  ${tw`bg-secondary`}
  margin-bottom:50px;
  padding-bottom: 100px;
`;

const EarnContent = () => {
  const articles = [
    {
      imgSrc: PSR,
      imgAlt: "pickup",
      header1: "Pickup Schedule Process",
      header2: "How It Works",
      circular_image: Line,
      sub_text1:
        "Download and install the app from Android play-store and/or IOS app-store",
      sub_text2: "Schedule waste pickup at a click from the mobile app.",
      sub_text3:
        "Have a recycler/collector routed to your location for waste pickup.",
      sub_text4: "Earn a reward for every completed waste scheduled pickup",
      sub_text5: "Earn a reward for every completed waste scheduled pickup",
      reverse: false,
    },

    {
      imgSrc: PSR,
      imgAlt: "drop off",
      header1: "Drop off Schedule Process",
      header2: "How It Works",

      sub_text:
        "Download and install the (Pakam Household Application) from goggle play store and/or IOS app store)",

      sub_text:
        "Select your type of user (individual or commercial) and create account.",

      sub_text: "Sign In",

      sub_text:
        "Select your type of user (individual or commercial) and create account.",

      sub_text:
        "Choose waste category/categories and input the waste quantity in bags.",

      sub_text:
        "Your E-wallet is credited as soon as the request is completed by the recycler. EARN-AS-YOU WASTE!!! Recycling made easy.",

      reverse: true,
    },
  ];

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
