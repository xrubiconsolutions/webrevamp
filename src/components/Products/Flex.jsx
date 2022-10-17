import { ImageContainer, ImageImage, Paragraph, Flex } from "./styles";

const FlexContainer = ({ text = "", reverse = "", imgAlt, imgSrc }) => {
  return (
    <>
      {!reverse ? (
        <Flex reverse={reverse}>
          <div>
            <Paragraph>{text}</Paragraph>
          </div>
          <div>
            <ImageContainer>
              <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
            </ImageContainer>
          </div>
        </Flex>
      ) : (
        <Flex reverse={reverse}>
          <div>
            <Paragraph>{text}</Paragraph>
          </div>
          <div>
            <ImageContainer>
              <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
            </ImageContainer>
          </div>
        </Flex>
      )}
    </>
  );
};

export default FlexContainer;
