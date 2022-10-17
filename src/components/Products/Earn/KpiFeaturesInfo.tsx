import GuyPickUpTrash from "/public/img/GupPickupTrash.png";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import Card from "../KPI/Card";

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

const CardContainer = styled.div`
  // ${tw` flex flex-col justify-center items-center p-2 bg-primary gap-10 rounded-t-xl`}
`;

const P = styled.p`
  ${tw`text-primary p-10 text-center`}
`;

const OverallContainer = styled.div`
  height: 220px;
  width: 310px;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    width: 280px;
    height: 250px;
  }

  @media screen and (min-width: 1024px) {
    width: 280px;
    height: 220px;
  }

  @media (max-width: 769px) {
    width: 80%;
    height: 85%;
    margin: auto;
  }

  @media (max-width: 500px) {
    width: 80%;
    height: 85%;
    margin: auto;
  }

  > div {
    height: 73%;
    background-color: ${tw`bg-primary flex items-center justify-center rounded-t-3xl`};
  }

  > p {
    height: 27%;
    ${tw` border-primary border-2 border-solid flex items-center justify-center font-bold text-base`}
    font-family:Raleway;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const KpiFeaturesInfo = () => {
  const features = [
    { imgSrc: GuyPickUpTrash, imgAlt: "trash", text: "Know your daily pickup" },
    {
      imgSrc: GuyPickUpTrash,
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
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Geo-fencing location and global positioning system",
    },
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Eliminate overfilling by collecting waste real time",
    },
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Send optimized route directly to truck drivers",
    },
    {
      imgSrc: GuyPickUpTrash,
      imgAlt: "trash",
      text: "Get instant payment on geo payment scheme",
    },
  ];

  return (
    <FeaturesSection>
      {features?.map(({ text, imgAlt, imgSrc }) => {
        return (
          <OverallContainer>
            <div>
              <CardContainer>
                <Image src={imgSrc} width={140} height={140}></Image>
              </CardContainer>
            </div>
            <P>{text}</P>
          </OverallContainer>
        );
      })}
    </FeaturesSection>
  );
};

export default KpiFeaturesInfo;
