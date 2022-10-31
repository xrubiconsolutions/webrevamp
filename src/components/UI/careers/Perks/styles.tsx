import styled from "styled-components";
import tw from "twin.macro";

export const PerkValueCard = styled.div`
  ${tw` bg-white h-[170px] md:h-[228px] text-center flex flex-col justify-center gap-2  ease-in-out duration-500 hover:cursor-pointer rounded-lg  `};
  box-shadow: 0px 9.34521px 27.4405px rgba(215, 228, 249, 0.3);
  &:hover {
    transform: translateY(-5px);
  }
`;
export const PerkCardP = styled.p`
  ${tw`text-body text-xs md:text-base font-medium tracking-wide`}
`;
