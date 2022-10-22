import styled from "styled-components";
import tw from "twin.macro";

export const CardWrapper = styled.div``;

export const Content = styled.p`
  ${tw`text-xl leading-10 pt-5 pb-5 text-body font-medium`};
`;

export const Name = styled.p`
  ${tw`text-2xl font-bold leading-loose`};
`;

export const Role = styled.p`
  ${tw`font-normal text-xl leading-loose text-primary italic`}
`;

export const CardSection = styled.aside``;

//   ${tw`flex flex-col justify-end absolute top-0 w-[98%] lg:w-[379px]`};
//   min-height: 272px;
//   background: #ffffff;
//   box-shadow: 0px 9.34521px 27.4405px rgba(215, 228, 249, 0.5);
//   border-radius: 10.3836px;
//   padding-top: 20px;
//   padding-bottom: 20px;
//   padding-left: 33px;
//   font-family: Raleway;
//   color: #464f54;
//   z-index: 1;
//   .header {
//     ${tw`my-auto`};
//     // width: 329px;
//     min-height: 16px;
//     max-height: 200px;
//     // overflow-y: auto;
//     z-index: 2;
//   }
//   .footer {
//     ${tw`capitalize mt-10`};
//   }

//   ${tw`w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3  gap-10  pb-40 pt-20`}
//   display: flex;

export const Wrapper = styled.div`
  ${tw`rounded-[10px] min-h-[300px] w-[98%] leading-[24px]   bg-white`};
  padding: 20px 30px;
  box-shadow: 0px 9.34521px 27.4405px rgba(215, 228, 249, 0.5);
  transition: all 500ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
