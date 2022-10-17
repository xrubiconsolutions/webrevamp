import styled from "styled-components";
import tw from "twin.macro";

export const Heading = styled.h1`
  ${tw` text-primary text-3xl pt-5 pb-5 font-bold leading-snug lg:text-[40px] md:text-3xl md:pt-0 pb-0`}
  font-family: Raleway;

  @media (max-width: 450px) {
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  ${tw`text-body  pt-10 pb-10 leading-8  md:text-xl md:mt-5 md:leading-loose md:mb-20 md:pb-0 lg:w-3/4  lg:leading-loose md:w-4/5 lg:mt-6  lg:w-[90%] lg:pt-5`}
  font-family: Raleway;

  @media (min-width: 1024px) {
    padding-bottom: 80px;
    font-size: 16px;
    width: 50%;
  }

  @media (max-width: 450px) {
    text-align: left;
  }
`;

export const ContainerContent = styled.div`
  @media (max-width: 768px) {
    margin-top: -100px;
  }

  @media (min-width: 1024px) {
    margin-top: -60px;
    padding-top: 30px;
  }
`;

export const BodyContent = styled.div`
  ${tw`bg-secondary`}
`;

export const DescSection = styled.div`
  ${tw`text-center flex flex-col items-center justify-center w-[100%] lg:w-[100%]`};
`;
