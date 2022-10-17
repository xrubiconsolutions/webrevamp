import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

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

const Card = ({ imgSrc = "", text = "", imgAlt = "", ...props }) => {
  return (
    <>
      <OverallContainer>
        <div>
          <CardContainer {...props}>
            <Image src={imgSrc} width={140} height={140}></Image>
          </CardContainer>
        </div>
        <P>{text}</P>
      </OverallContainer>
    </>
  );
};

export default Card;
