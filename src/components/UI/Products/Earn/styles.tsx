import styled from "styled-components";
import tw from "twin.macro";

export const CardWrapper = styled.div<{ rev: boolean }>`
  ${tw`lg:w-full md:w-full md:items-start flex justify-between  lg:items-center  lg:pt-4 `}
  flex-direction: ${({ rev }) => (rev ? "row-reverse" : "row")};

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContent = styled.div`
  ${tw`  md:w-[45%] lg:w-[35%] `};
`;
export const ImageContainers = styled.div<{ rev: boolean }>`
  margin: auto;

  @media (max-width: 1024px) {
    width: 320px;
    margin-top: 40px;
    margin-bottom: 30px;
  }

  @media (max-width: 769px) {
    padding-top: 10px;
    padding-bottom: 0px;
  }

  @media (max-width: 450px) {
    width: 190px;
    padding-top: 0px;
    padding-bottom: 20pxx;
  }

  @media (min-width: 1025px) {
    ${tw`flex`}
    margin:30px 0;
    width: 370px;
  }
`;

export const ContentContainer = styled.div`
  ${tw` lg:w-[100%] xl:w-[50%]  mt-10 lg:pr-10`}
`;

export const ProcessHeader = styled.div`
  ${tw`text-base font-medium lg:text-[20px]  md:text-2xl md:text-left `}
`;
export const WorkHeader = styled.div`
  ${tw` text-4xl  font-extrabold lg:text-5xl lg:font-extrabold text-primary pt-1 pb-7 md:font-bold md:text-left`}
`;

export const Section = styled.div`
  ${tw`flex gap-5 pb-7 lg:pb-6 `};
  font-family: Raleway;
`;

export const Paragraph = styled.div<{ rev: boolean }>`
  ${tw` text-sm leading-[20px] lg:text-base lg:leading-[25px] text-body  `};
`;

export const Span = styled.span`
  ${tw`text-sm font-medium `}
`;

export const Br = styled.div`
  @media (min-width: 1024px) {
    ${tw`block mt-[20px]`}
  }
`;

export const ReverseBack = styled.div``;
