import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { ImageContent } from "../Earn/styles";
import { ImageImage, ImageContainer } from "../styles";
// import {}

const CardContainer = styled.div`
  // ${tw` flex flex-col justify-center items-center p-2 bg-primary gap-10 rounded-t-xl`}
`;

const P = styled.p`
  ${tw`text-primary p-10 text-center`}
`;

const OverallContainer = styled.div`
  height: 220px;
  width: 310px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 90%;
    height: 85%;
    margin: auto;
  }

  > div {
    height: 73%;
    background-color: ${tw`bg-primary flex items-center justify-center `};
  }

  > p {
    height: 27%;
    ${tw` border-primary border-2 border-solid flex items-center justify-center font-bold text-xs`}
    font-family:Raleway;
  }
`;

const ImageContainers = styled.div`
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 110px;
  }

  @media (min-width: 1024px) {
    ${tw`flex`}
    margin:30px 0;
    width: 110px;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const Card = ({ imgSrc = "", text = "", imgAlt = "", ...props }) => {
  return (
    <>
      <OverallContainer>
        <div>
          <CardContainer {...props}>
            <ImageContent>
              <ImageContainers>
                <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
              </ImageContainers>
            </ImageContent>
          </CardContainer>
        </div>
        <P>{text}</P>
      </OverallContainer>
    </>
  );
};

export default Card;
