import { ImageImage, Paragraph, Flex } from "./styles";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

const ImageContainer = styled.div`
  object-fit: cover;
`;

const FlexContainer = ({
  text = "",
  reverse = true,
  imgAlt = "",
  imgSrc = "",
}) => {
  return (
    <>
      <Flex reverse={reverse ? true : false}>
        <div>
          <Paragraph>{text}</Paragraph>
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

        <Image
          src={imgSrc}
          alt={imgAlt}
          width={700}
          height={350}
          layout="fixed"
          className="object-contain"
        />
      </Flex>
    </>
  );
};

export default FlexContainer;
