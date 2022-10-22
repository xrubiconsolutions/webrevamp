import styled from "styled-components";
import tw from "twin.macro";
// impor

export const HC = styled.div`
  ${tw``}
  poaition:relative;
`;

export const Texts = styled.div`
  ${tw`bg-primary text-white text-center pt-5  md:pt-20`}

  position:relative;

  // &::before {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   height: 100%;
  //   width: 100%;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   background: rgba(0, 0, 0, 0.1);
  }

  width: 100%;
  z-index: 2;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 134px initial;
  align-items: flex-end;
  background-repeat: no-repeat;
  ${tw`flex flex-col items-center justify-center h-full lg:h-[300px] space-y-10 lg:space-y-5 p-4 lg:p-14 bg-header-bg`}


  h3 {
    ${tw`text-xl  tracking-normal md:text-3xl  leading-[60px] md:leading-[80px] font-light `}
  }

  h2 {
    ${tw`text-3xl tracking-normal md:text-5xl lg:text-7xl font-bold leading-[25px] md:leading-[50px] `}
  }
`;

export const TabContainer = styled.div`
  ${tw` md:mt-0 `}
`;
