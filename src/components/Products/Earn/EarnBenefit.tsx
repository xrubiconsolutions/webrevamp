import React from "react";
import GuyPickUpTrash from "/public/img/GupPickupTrash.png";
import Card from "../KPI/Card";
import tw from "twin.macro";
import styled from "styled-components";

const FeaturesSection = styled.div`
  ${tw` grid grid-cols-1 md:grid-cols-2 md:gap-10  lg:grid-cols-3  xl:grid-cols-4 gap-10 lg:gap-12`}
  margin-bottom: 100px;

  @media (max-width: 376px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    margin-top: -30px;
  }
`;

const EarnBenefit = () => {
  const articles = [
    { imgSrc: GuyPickUpTrash, imgAlt: "trash", text: "Know your daily pickup" },
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Reduce your service cost",
    },
    // {
    //   imgSrc: GuyPickUpTrash,
    //   imgAlt: "trash",
    //   text: "Provide world class service",
    // },
    // {
    //   imgSrc: GuyPickUpTrash,
    //   imgAlt: "trash",
    //   text: "Reduce organization’s carbon footprint",
    // },
    // {
    //   imgSrc: GuyPickUpTrash,
    //   imgAlt: "trash",
    //   text: "Geo-fencing location and global positioning system",
    // },
    // {
    //   imgSrc: GuyPickUpTrash,
    //   imgAlt: "trash",
    //   text: "Eliminate overfilling by collecting waste real time",
    // },
    // {
    //   imgSrc: GuyPickUpTrash,
    //   imgAlt: "trash",
    //   text: "Send optimized route directly to truck drivers",
    // },
    // {
    //   imgSrc: GuyPickUpTrash,
    //   imgAlt: "trash",
    //   text: "Get instant payment on geo payment scheme",
    // },
  ];

  return (
    <div>
      {articles?.map((article, index) => {
        return (
          <FeaturesSection>
            <Card {...article} key={index} />;
          </FeaturesSection>
        );
      })}
    </div>
  );
};

export default EarnBenefit;
