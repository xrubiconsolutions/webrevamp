import styled from "styled-components";
import tw from "twin.macro";

export const Heading = styled.h1`
  ${tw` text-primary text-3xl font-extrabold leading-snug lg:text-5xl md:text-4xl  `}
`;

export const Paragraph = styled.p`
  ${tw`text-body pt-5 pb-0   md:mt-0 md:mb-20  lg:w-4/5 lg:mt-6  w-full lg:pt-0 lg:text-[17px] text-sm leading-6 md:leading-loose`}
`;

export const BodyContent = styled.div`
  ${tw`bg-secondary`}
`;

export const DescSection = styled.div`
  ${tw`text-center flex flex-col items-center justify-center `};
`;
