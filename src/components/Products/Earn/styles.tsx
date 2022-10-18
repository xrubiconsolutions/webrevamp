import styled from "styled-components";
import tw from "twin.macro";

export const ImageContent = styled.div`
  ${tw`lg:w-[50%]`}
`;

export const ContentContainer = styled.div`
  ${tw`lg:w-[50%]  mt-10`}
`;

export const ProcessHeader = styled.div`
  ${tw`text-xl font-medium lg:text-[20px] font-medium md:text-2xl  `}
`;
export const WorkHeader = styled.div`
  ${tw` text-5xl font-bold lg:text-6xl font-bold lg:font-extrabold text-primary pt-5 pb-6 md:font-bold `}
`;

export const Section = styled.div`
  ${tw`flex gap-5 pb-7 `}
  font-family:Raleway;
`;

export const Paragraph = styled.div`
  ${tw` text-lg lg:text-xl lg:leading-[25px] text-body  `}
`;

export const Span = styled.span`
  ${tw`text-[15px]  lg:text-2xl lg:font-medium`}
`;

export const Br = styled.div`
  @media (min-width: 1024px) {
    ${tw`block mt-[20px]`}
  }
`;

export const ReverseBack = styled.div``;
