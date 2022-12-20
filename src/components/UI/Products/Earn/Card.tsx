import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../..";
// import { ImageImage } from "../styles";
import { EarnWasteContentModel } from "../../../../utils/data";
import Image from "next/image";
import { osName } from "react-device-detect";

import {
  ImageContent,
  Paragraph,
  Span,
  Br,
  ContentContainer,
  ProcessHeader,
  WorkHeader,
  Section,
  CardWrapper,
} from "./styles";

const ImageContainers = styled.div<{ rev: boolean }>`
  ${tw`w-[55%] mt-10  md:w-[100%] md:mt-10 md:mb-5 lg:w-[90%] `}
  @media (max-width:1024px) {
    margin: 60px auto 10px auto;
  }
`;

const Card = ({
  imgSrc,
  imgAlt,
  header1,
  header2,
  sub_text,
  reverse,
  soonchecker,
}: EarnWasteContentModel) => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    var platform = require("platform");
    setDevice(platform?.os?.family);
  }, [device]);

  return (
    <CardWrapper rev={reverse ? true : false}>
      <ImageContent>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={600}
          height={450}
          className="object-contain"
        />
      </ImageContent>

      <ContentContainer>
        <ProcessHeader>{header1}</ProcessHeader>
        <WorkHeader>{header2}</WorkHeader>

        {sub_text?.map((item, index) => {
          return (
            <Section key={index}>
              <Span> {index + 1}.</Span>
              <Paragraph rev={reverse ? true : false}>{item}</Paragraph>
            </Section>
          );
        })}

        <Br />

        {soonchecker ? (
          <Button
            children="Coming Soon"
            icons={false}
            weight={false}
            primary={true}
            white={true}
            width={true}
            className=""
          />
        ) : device === "Windows" ? (
          <a
            href="https://play.google.com/store/apps/details?id=com.pakamcustomer"
            target="_blank"
          >
            <Button
              children="Download Now!"
              icons={false}
              weight={false}
              primary={true}
              white={true}
              width={true}
              className=""
            />
          </a>
        ) : device === "macOS" ? (
          <a
            href="https://apps.apple.com/ng/app/pakam-household-recycling-app/id1539296957"
            target="_blank"
          >
            <Button
              children="Download Now!"
              icons={false}
              weight={false}
              primary={true}
              white={true}
              width={true}
              className=""
            />
          </a>
        ) : osName === "iOS" ? (
          <a
            href="https://apps.apple.com/ng/app/pakam-household-recycling-app/id1539296957"
            target="_blank"
          >
            <Button
              children="Download Now!"
              icons={false}
              weight={false}
              primary={true}
              white={true}
              width={true}
              className=""
            />
          </a>
        ) : (
          <a
            href="https://play.google.com/store/apps/details?id=com.pakamcustomer"
            target="_blank"
          >
            <Button
              children="Download Now!"
              icons={false}
              weight={false}
              primary={true}
              white={true}
              width={true}
              className=""
            />
          </a>
        )}
      </ContentContainer>
    </CardWrapper>
  );
};

export default Card;

// {OSNAME}
