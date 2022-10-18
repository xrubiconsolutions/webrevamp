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
