import { ImageContains, Paragraph, Flex } from "./styles";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import Earnaswaste from "./Earn/Earnaswaste";
import { EarnWasteModel } from "../../../utils/data";

const ImageContainer = styled.div`
  object-fit: cover;
`;

const FlexContainer = ({
  text = "",
  reverse,
  imgAlt = "",
  imgSrc = "",
  top,
}: EarnWasteModel) => {
  return (
    <>
      <Flex reverse={reverse ? true : false} top={top ? true : false}>
        <div>
          <Paragraph reverse={reverse ? true : false}>{text}</Paragraph>
        </div>

        {/* <ImageContainer> */}
        {/* <ImageImage
            src={imgSrc}
            alt={imgAlt}
            width={600}
            height={300}
            layout="fixed"
          ></ImageImage> */}
        {/* </ImageContainer> */}

        <ImageContains top={top ? true : false}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={430}
            height={450}
            className="object-contain"
          />
        </ImageContains>
      </Flex>
    </>
  );
};

export default FlexContainer;
