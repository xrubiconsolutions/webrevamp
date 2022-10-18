import styled from "styled-components";
import tw from "twin.macro";

export const Heading = styled.h1`
  ${tw` text-primary text-3xl font-bold leading-snug lg:text-[40px] md:text-3xl  `}
  font-family: Raleway;
`;

export const Paragraph = styled.p`
  ${tw`text-body pt-10 pb-10 leading-8  md:mt-5 md:leading-loose md:mb-20  lg:leading-loose lg:w-4/5 lg:mt-6  w-full lg:pt-5 lg:text-[18px] sm:text-xl `}
  font-family: Raleway;
`;

export const ContainerContent = styled.div``;

export const BodyContent = styled.div`
  ${tw`bg-secondary`}
`;

export const DescSection = styled.div`
  ${tw`text-center flex flex-col items-center justify-center w-[100%] lg:w-[100%] lg:-mt-20 md:-mt-28  -mt-36`};

  @media (max-width: 425px) {
    text-align: left;
  }
`;
