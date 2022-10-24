import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../..";
import { ImageImage } from "../styles";
import { EarnWasteContentModel } from "../../../../utils/data";

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
  ${tw`w-[70%] mt-10  md:w-[45%] md:mt-20 md:mb-5 lg:w-[100%] xl:w-[65%] ml-auto mr-auto lg:m-0`}
`;

const Card = ({
  imgSrc,
  imgAlt,
  header1,
  header2,
  sub_text,
  reverse,
}: EarnWasteContentModel) => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    var platform = require("platform");
    setDevice(platform?.os?.family);
  }, [device]);

  return (
    <CardWrapper rev={reverse ? true : false}>
      <ImageContent>
        <ImageContainers rev={reverse ? true : false}>
          <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
        </ImageContainers>
      </ImageContent>

      <ContentContainer>
        <ProcessHeader>{header1}</ProcessHeader>
        <WorkHeader>{header2}</WorkHeader>

        {sub_text?.map((item, index) => {
          return (
            <Section>
              <Span> {index + 1}.</Span>
              <Paragraph rev={reverse ? true : false}>{item}</Paragraph>
            </Section>
          );
        })}

        <Br />

        {device === "Windows" ? (
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
        ) : (
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
        )}
      </ContentContainer>
    </CardWrapper>
  );
};

export default Card;
