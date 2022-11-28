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
  ${tw`text-left md:text-center text-xl md:text-3xl text-white pt-10 font-extrabold font-Raleway lg:text-4xl `};

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

export const Flex = styled.div<{ reverse: boolean; top: boolean }>`
  ${tw`flex flex-col lg:w-full gap-10 items-center justify-between mt-0`}
  flex-direction:${({ reverse }) => (reverse ? "row-reverse" : "row")};
  padding-top: ${({ top }) => (top ? "70px" : "")};
  @media (max-width: 1024px) {
    flex-direction: column;
    padding-top: ${({ top }) => (top ? "10px" : "")};
  }

  @media (max-width: 728px) {
    padding-top: ${({ top }) => (top ? "20px" : "")};
  }
  > div:first-child {
    ${tw`xl:w-[65%]`}
  }
  > div:nth-child(2) {
    ${tw`xl:w-[30%]`}
  }
`;

export const Paragraph = styled.p<{ reverse: boolean }>`
  ${tw`text-white pt-10 lg:pt-0 xl:pt-10 pb-10 lg:pb-20  lg:text-base lg:leading-[40px] text-sm leading-9 font-light`};
  margin-top: ${({ reverse }) => (reverse ? "30px" : "")};
`;

export const ImageContains = styled.div<{ top: boolean }>`
  @media (max-width: 1024px) {
    margin-top: ${({ top }) => (!top ? "-80px" : "")};
  }
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
