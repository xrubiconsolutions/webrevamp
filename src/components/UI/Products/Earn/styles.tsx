import styled from "styled-components";
import tw from "twin.macro";

export const CardWrapper = styled.div<{ rev: boolean }>`
  ${tw`lg:w-full md:w-full md:items-start flex justify-between  lg:items-center  lg:pt-20 `}
  flex-direction:${({ rev }) => (rev ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContent = styled.div<{ rev: boolean }>`
  ${tw`lg:w-[50%]`};
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
  ${tw`lg:w-[50%]  mt-10`}
`;

export const ProcessHeader = styled.div`
  ${tw`text-2xl font-medium lg:text-[20px]  md:text-2xl  `}
`;
export const WorkHeader = styled.div`
  ${tw` text-6xl font-bold lg:text-6xl lg:font-extrabold text-primary pt-5 pb-6 md:font-bold `}
`;

export const Section = styled.div`
  ${tw`flex gap-5 pb-7 `}
  font-family:Raleway;
`;

export const Paragraph = styled.div<{ rev: boolean }>`
  ${tw` text-lg lg:text-xl lg:leading-[25px] text-body  `};
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
