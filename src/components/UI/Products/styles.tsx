import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

export const OverallContainer = styled.div`
  ${tw`bg-primary`}
  @media (min-width: 1024px) {
    padding-bottom: 70px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 60px;
  }
`;

export const Heading = styled.h1`
  ${tw`text-left md:text-center text-xl md:text-3xl text-white pt-10  font-semibold font-Raleway lg:text-4xl `};

  @media (max-width: 1024px) {
    font-size: 31px;
    padding-top: 50px;
    text-align: left;
  }
  @media (max-width: 769px) {
    font-size: 32px;
    margin-bottom: -10px;
  }

  @media (max-width: 450px) {
    font-size: 28px;
    line-height: 35px;
    padding-top: 40px;
  }

  @media (max-width: 376px) {
    font-size: 25px;
    margin-top: -20px;
  }

  @media (min-width: 1440px) {
    font-size: 47px;
    padding-top: 60px;
  }
`;

export const Flex = styled.div<{ reverse: boolean }>`
  ${tw`flex flex-col lg:w-full gap-20 lg:mt-10  `}
  flex-direction:${({ reverse }) => (reverse ? "row-reverse" : "row")};
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  > div:first-child {
    ${tw`flex xl:w-[65%] md:w-full sm:w-full`};
  }
  > div:nth-child(2) {
    ${tw`flex md:w-[50%] lg:w-[100%] xl:w-[35%] sm:w-full `};

    @media (max-width: 1024px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      width: 45%;
    }

    @media (max-width: 500px) {
      width: 80%;
    }
  }
`;

export const Paragraph = styled.p`
  ${tw`text-white pt-10 lg:pt-0 xl:pt-10 pb-10 lg:pb-20  lg:text-base lg:leading-[40px] text-sm leading-9 font-light`}
`;

export const ImageImage = styled(Image)`
  // object-fit: contain;
`;

export const ImageContainer = styled.div`
  margin: auto;
  @media (max-width: 1024px) {
    margin-top: -60px;
  }

  @media (max-width: 769px) {
    padding-top: 10px;
    padding-bottom: 0px;
  }

  @media (min-width: 1025px) {
    margin: 30px 0;
  }
`;
