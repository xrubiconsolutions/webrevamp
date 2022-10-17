// import KPI from "./KPI";
import Card from "./Card";
import styled from "styled-components";
import tw from "twin.macro";
import GuyPickUpTrash from "/public/img/GupPickupTrash.png";
import Paper from "/public/img/Paper.png";
import Business from "/public/img/Business.png";

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

const Benefit = () => {
  const KPIFeaturesInfo = [
    { imgSrc: GuyPickUpTrash, imgAlt: "trash", text: "Know your daily pickup" },
    {
      imgSrc: Paper,
      imgAlt: "trash",
      text: "Reduce your service cost",
    },
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Provide world class service",
    },
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Reduce organization’s carbon footprint",
    },
    {
      imgSrc: Paper,
      imgAlt: "trash",
      text: "Geo-fencing location and global positioning system",
    },
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Eliminate overfilling by collecting waste real time",
    },
    {
      imgSrc: Business,
      imgAlt: "trash",
      text: "Send optimized route directly to truck drivers",
    },
    {
      imgSrc: Business,
      imgAlt: "trash",
      text: "Get instant payment on geo payment scheme",
    },
  ];

  return (
    <FeaturesSection>
      {KPIFeaturesInfo?.map(({ text, index, imgSrc, imgAlt }) => {
        return <Card text={text} key={index} imgSrc={imgSrc} imgAlt={imgAlt} />;
      })}
    </FeaturesSection>
  );
};

export default Benefit;
