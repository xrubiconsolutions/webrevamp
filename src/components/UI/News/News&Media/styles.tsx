import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

export const CardContainer = styled.div`
  ${tw`w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3  gap-10  pb-40 pt-20`}
`;

export const CardWrapper = styled.div<{ bg: boolean }>`
  ${tw`rounded-[10px] min-h-[468px] w-[95%] leading-[24px] pb-20 bg-white`};
  background: ${({ bg }) => (bg ? " #005700;" : "white")};
`;

export const H2 = styled.h2<{ col?: boolean; decoration: boolean }>`
  ${tw` text-[16px] md:text-[20px] mt-5 pb-5  leading-[35px] font-bold  tracking-normal hover:text-[20.1px]`}
  transition:all 500ms ease-in-out;
  color: ${({ col }) => (col ? "#fff" : "#005700")};
  text-decoration: ${({ decoration }) => (decoration ? "none" : "underline")};
`;

export const H3 = styled.h3`
  ${tw`text-xl font-normal tracking-wider pt-2 pb-8 leading-9 font-bold`}
`;
export const Flex = styled.div`
  ${tw`flex justify-between text-lg`}
`;

export const Div = styled.div`
  ${tw`flex justify-between text-lg font-medium`}
`;
export const Link = styled.a``;

export const ImageHolder = styled(Image)`
  ${tw`object-contain rounded-lg  `}
`;

export const Contains = styled.div<{ col?: boolean }>`
  ${tw`pl-5 pr-5  `}
  color: ${({ col }) => (col ? " white;" : "black")};
`;
