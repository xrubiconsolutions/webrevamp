import styled from "styled-components";
import tw from "twin.macro";

export const CardWrapper = styled.div``;

export const Content = styled.p`
  ${tw`text-xs leading-7 pt-4 pb-3 text-body font-medium`};
`;

export const Name = styled.p`
  ${tw`text-base font-bold leading-loose`};
`;

export const Role = styled.p`
  ${tw`font-normal font-medium text-sm leading-snug text-primary italic`}
`;

export const CardSection = styled.aside``;

export const Wrapper = styled.div`
  ${tw`rounded-[10px] min-h-[340px] w-[98%] leading-[24px]   bg-white`};
  padding: 20px 30px;
  box-shadow: 0px 9.34521px 27.4405px rgba(215, 228, 249, 0.5);
  transition: all 500ms ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;
