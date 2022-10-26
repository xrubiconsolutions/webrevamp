import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

export const CardContainer = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3  gap-5  pb-40 pt-20`}
`;

export const CardWrapper = styled.div<{ bg: boolean }>`
  ${tw`rounded-sm min-h-[200px] w-[100%]  pb-5 bg-white`};
  background: ${({ bg }) => (bg ? " #005700;" : "white")};
  box-shadow: 0px 9.34521px 27.4405px rgba(215, 228, 249, 0.7);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H2 = styled.h2<{ col?: boolean; decoration: boolean }>`
  ${tw` text-[14px] md:text-base mt-5 pb-3  leading-[35px] font-bold  tracking-normal `}
  transition:all 500ms ease-in-out;
  color: ${({ col }) => (col ? "#fff" : "#005700")};
  text-decoration: ${({ decoration }) => (decoration ? "none" : "underline")};
`;

export const H3 = styled.h3`
  ${tw`text-xs  tracking-wider pt-2 pb-6 leading-5 font-medium`}
`;
export const Flex = styled.div`
  ${tw`flex justify-between text-lg`}
`;

export const Div = styled.div`
  ${tw`flex justify-between text-xs font-medium`}
`;
export const Link = styled.a``;

export const ImageHolder = styled(Image)`
  // ${tw`object-contain`}
`;

export const Contains = styled.div<{ col?: boolean }>`
  ${tw`pl-5 pr-5  `}
  color: ${({ col }) => (col ? " white;" : "black")};
`;
