import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

const P = styled.p`
  ${tw`text-primary p-9 text-center`}
`;

// const OverallContainer = styled.div`
//   cursor: pointer;

//   @media (max-width: 1024px) {
//     width: 100%;
//     height: 100%;
//   }

//   @media (min-width: 1024px) {
//     width: 100%;
//     height: 100%;
//   }

//   > div {
//     height: 65%;
//     background-color: ${tw`bg-primary flex items-center justify-center `};
//   }

//   > p {
//     height: 30%;
//     ${tw` border-primary border-2 border-solid flex items-center justify-center font-bold text-xs`}
//     font-family:Raleway;
//   }
// `;

const Overall = styled.div`
  > div:first-child {
    ${tw`bg-primary flex items-center justify-center rounded-t-xl`};
  }
  > div:nth-child(2) {
    ${tw` border-primary border-2 border-solid flex items-center justify-center font-bold text-xs`};
  }
`;

const ImageContainers = styled.div`
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (min-width: 1024px) {
    width: 90px;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const Card = ({ imgSrc = "", text = "", imgAlt = "", ...props }) => {
  return (
    <>
      {/* <OverallContainer>
        <div>
          <ImageContent>
            <ImageContainers>
              <ImageImage src={imgSrc} alt={imgAlt} height={150}></ImageImage>
            </ImageContainers>
          </ImageContent>
        </div>
        <P>{text}</P>
      </OverallContainer> */}

      <Overall>
        <div className="h-[160px]">
          <ImageContainers>
            <Image src={imgSrc} alt={imgAlt}></Image>
          </ImageContainers>
        </div>
        <div className="h-[80px]">
          <P>{text}</P>
        </div>
      </Overall>
    </>
  );
};

export default Card;
