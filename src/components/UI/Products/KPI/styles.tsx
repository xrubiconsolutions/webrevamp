import styled from "styled-components";
import tw from "twin.macro";

export const Heading = styled.h1`
  ${tw` text-primary text-5xl font-extrabold leading-snug lg:text-6xl md:text-6xl  `}
`;

export const Paragraph = styled.p`
  ${tw`text-body pt-10 pb-12   md:mt-0 md:leading-loose md:mb-20  lg:leading-loose lg:w-4/5 lg:mt-6  w-full lg:pt-5 md:text-[13px] lg:text-[17px] text-xl leading-9`}
`;

export const ContainerContent = styled.div``;

export const BodyContent = styled.div`
  ${tw`bg-secondary`}
`;

export const DescSection = styled.div`
  ${tw`text-center flex flex-col items-center justify-center w-[100%] lg:w-[100%] lg:-mt-20 md:-mt-20 -mt-36  pt-20 md:pt-5  `};

  @media (max-width: 425px) {
  }
`;
