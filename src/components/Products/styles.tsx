import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

export const OverallContainer = styled.div`
  ${tw`bg-primary`}
  @media (min-width: 1024px) {
    padding-bottom: 100px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 60px;
  }

  @media (max-width: 450px) {
    // padding-bottom: 50px;
  }
`;

export const Heading = styled.h1`
  ${tw`text-left md:text-center text-xl md:text-3xl text-white pt-10  font-semibold font-Raleway lg:text-4xl `}

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
    font-size: 25px;
    line-height: 35px;
    padding-top: 40px;
    // text-align: center;
  }

  @media (max-width: 376px) {
    font-size: 22px;
  }

  @media (min-width: 1440px) {
    font-size: 45px;
    line-height: 50px;
    padding-top: 60px;
  }
`;

export const Flex = styled.div`
  
${tw`flex flex-col lg:flex-row  lg: w-full gap-20 lg:mt-8 md:flex-col `}
> div:first-child{
  ${tw`flex lg:w-[65%] md:w-full sm:w-full`}
}
> div:nth-child(2){
  ${tw`flex lg:w-[30%] md:w-full sm:w-full`}
}
  }
`;

export const Paragraph = styled.p`
  ${tw`  text-white pt-10  pb-14 lg:pb-20  md:text-xl lg:text-[16px] leading-[27px] lg:leading-[40px] md:leading-10  `}
`;

export const ImageImage = styled(Image)`
  object-fit: contain;
`;

export const ImageContainer = styled.div`
  margin: auto;

  @media (max-width: 1024px) {
    width: 320px;
    margin-top: -30px;
  }

  @media (max-width: 769px) {
    padding-top: 10px;
    padding-bottom: 0px;
  }

  @media (max-width: 450px) {
    width: 230px;
    padding-top: 0px;
  }

  @media (min-width: 1025px) {
    ${tw`flex`}
    margin:30px 0;
    width: 370px;
  }
`;
