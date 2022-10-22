import { ImageContainer, ImageImage, Paragraph, Flex } from "./styles";

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
        <div>
          <ImageContainer>
            <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
          </ImageContainer>
        </div>
      </Flex>
    </>
  );
};

export default FlexContainer;
