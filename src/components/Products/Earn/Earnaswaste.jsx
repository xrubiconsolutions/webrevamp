import React from "react";
import { Container } from "../..";
import FlexContainer from "../Flex";
import { Heading } from "../styles";
import PSR from "/public/img/PSR.png";
import { OverallContainer } from "../styles";

const Earnaswaste = () => {
  const articles = [
    {
      text: "Earn-as-You Waste is a recycling service that connects waste generators to waste collectors/aggregators in real time, ensuring individuals capture value for their waste. The Earn-as-You Waste mobile application includes a household app which enables household members (as an individual or commercial user like schools, businesses etc.) to schedule for a “pick-up”  or “drop-off” of their recyclable waste.The App features include multi-selection of waste categories, in-app chat with collectors, in-app direct to call, community chat, E-wallet, and learning resources on waste matters. With the Earn-as-You Waste App, users can easily sort their trash from source, schedule collection, and receive monetary value of this trash in their wallet. Users can simply transfer their  money directly to their bank accounts or donate to a charity of their choice. Experience a seamless flow while using your Earn-as-You Waste application.",
      imgAlt: "",
      imgSrc: PSR,
      reverse: false,
    },
  ];
  return (
    <div>
      <OverallContainer>
        <Container>
          <Heading>Earn-as-you-waste (Pakam Households).</Heading>
          {articles.map((article) => {
            return <FlexContainer {...article} />;
          })}
        </Container>
      </OverallContainer>
    </div>
  );
};

export default Earnaswaste;
