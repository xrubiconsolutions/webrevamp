import styled from "styled-components";
import tw from "twin.macro";
import { ImageContent } from "../Earn/styles";
import { ImageImage } from "../styles";

const CardContainer = styled.div`
  // ${tw` flex flex-col justify-center items-center p-2 bg-primary gap-10 rounded-t-xl`}
`;

const P = styled.p`
  ${tw`text-primary p-9 text-center`}
`;

const OverallContainer = styled.div`
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
  }

  > div {
    height: 65%;
    background-color: ${tw`bg-primary flex items-center justify-center rounded-t-lg`};
  }

  > p {
    height: 30%;
    ${tw` border-primary border-2 border-solid flex items-center justify-center font-bold text-xs`}
    font-family:Raleway;
  }
`;

const ImageContainers = styled.div`
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 80px;
  }

  @media (min-width: 1024px) {
    ${tw`flex`}
    margin:30px 0;
    width: 100px;
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
