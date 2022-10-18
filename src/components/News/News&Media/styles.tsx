import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

export const CardContainer = styled.div`
  ${tw`w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-10  pb-40 pt-20`}
`;

export const CardWrapper = styled.div`
  ${tw`rounded-[10px] min-h-[468px] bg-white w-[95%] leading-[24px]`};
`;

export const H2 = styled.h2`
  ${tw`text-[21px] mt-5 pb-5 text-primary leading-[35px] font-bold underline tracking-normal`}
`;

export const H3 = styled.h3`
  ${tw`text-[15px] font-normal tracking-wider pt-2 pb-8 leading-9`}
`;
export const Flex = styled.div`
  ${tw`flex justify-between text-lg`}
`;

export const Div = styled.div``;
export const Link = styled.a``;

export const ImageHolder = styled(Image)`
  ${tw`object-contain rounded-lg `}
`;

export const Contains = styled.div`
  ${tw`pl-3  `}
`;
