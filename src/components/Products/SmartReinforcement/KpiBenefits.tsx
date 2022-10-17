import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import GuyPickUpTrash from "/public/img/GupPickupTrash.png";
import Card from "../KPI/Card";
import Pakam from "/public/img/Pakam.png";
import Business from "/public/img/Business.png";
import Paper from "/public/img/Paper.png";

const FeaturesSection = styled.div`
  ${tw` grid grid-cols-1 md:grid-cols-2 md:gap-10  lg:grid-cols-3  xl:grid-cols-4 gap-10 lg:gap-12`}
  margin-bottom:100px;

  @media (max-width: 376px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    margin-top: -30px;
  }
`;

const KpiBenefits = () => {
  const features = [
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Geo fencing and global positioning",
    },
    {
      imgSrc: Paper,
      imgAlt: "trash",
      text: "Send optimise routes directly to environmental agencies",
    },
    {
      imgSrc: Business,
      imgAlt: "trash",
      text: "Provide world class service.",
    },
    {
      imgSrc: Pakam,
      imgAlt: "trash",
      text: "Reduce organization carbon footprint",
    },
  ];

  return (
    <FeaturesSection>
      {features?.map(({ text, imgSrc, imgAlt }) => {
        return <Card text={text} imgSrc={imgSrc} imgAlt={imgAlt} />;
      })}
    </FeaturesSection>
  );
};

export default KpiBenefits;
