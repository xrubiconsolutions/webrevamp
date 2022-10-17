import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";

export const OverallContainer = styled.div`
  ${tw`bg-primary`}
  @media (min-width: 1024px) {
    padding-bottom: 100px;
  }
`;

export const Heading = styled.h1`
  ${tw`text-left md:text-center text-xl md:text-3xl text-white pt-10  font-semibold font-Raleway lg:text-4xl `}

  @media (max-width: 1024px) {
    font-size: 31px;
    padding-top: 50px;
    text-align: left;
  }
  @media (max-width: 769px) {
    font-size: 32px;
    margin-bottom: -10px;
  }

  @media (max-width: 450px) {
    font-size: 25px;
    line-height: 35px;
    padding-top: 40px;
    // text-align: center;
  }

  @media (max-width: 376px) {
    font-size: 22px;
  }

  @media (min-width: 1440px) {
    font-size: 45px;
    line-height: 50px;
    padding-top: 60px;
  }
`;

export const Flex = styled.div`
  ${tw`flex w-[100%] gap-10 `}
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (min-width: 1024px) {
    margin-top: 80px;
  }

  @media (max-width: 769px) {
    flex-direction: column;
    margin-top: 40px;
    padding-bottom: 45px;
    ${tw`w-[98%] mx-auto text-center`}
  }

  @media (max-width: 450px) {
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  > div:nth-child(1) {
    // background: red;
    ${tw`w-[50%] `}

    @media (max-width: 1024px) {
      ${tw`w-[100%] `}
    }

    @media (min-width: 1024px) {
      ${tw`w-[100%]  `}
    }
    > p {
      ${tw`w-[95%] `}
      @media (max-width: 769px) {
        ${tw`w-[100%] `}
      }
    }
  }

  > div:nth-child(2) {
    // background: blue;
    ${tw` w-[50%] `}

    @media (max-width: 1024px) {
      ${tw`w-[100%] `}
    }

    @media (min-width: 1024px) {
      ${tw`w-[100%]  `}
      margin-left: ${(props) => (props.reverse ? "200px" : "150px")};
    }
  }
`;

export const Paragraph = styled.p`
  ${tw` text-white text-left md:text-left   `}

  font-family: Raleway;
  @media (max-width: 1024px) {
    line-height: 29px;
  }
  @media (max-width: 1024px) {
    font-size: 13.7px;
    line-height: 35px;
    // max-width: 700px;
    margin-top: 40px;
    text-align: left;
  }

  @media (max-width: 769px) {
    font-size: 12px;
    // max-width: 600px;
    // margin: 10px auto 60px auto;
    margin: 40px 0 50px 0;
    margin-top: 0px;
  }

  @media (min-width: 1024px) {
    font-size: 12.5px;
    line-height: 38px;
    padding-top: ${(props) => (props.reverse ? "" : "10px")};
    ${tw`w-[95%] `};
  }
`;

export const ImageImage = styled(Image)`
  object-fit: contain;
`;

export const ImageContainer = styled.div`
  margin: auto;

  @media (max-width: 1024px) {
    width: 300px;
    padding-top: 10px;
    padding-bottom: 60px;
  }

  @media (max-width: 769px) {
    margin-top: -80px;
    width: 300px;
    padding-top: 50px;
    padding-bottom: 1px;
  }

  @media (max-width: 450px) {
    width: 220px;
    padding-top: 40px;
    padding-bottom: 30px;
  }

  @media (min-width: 1025px) {
    ${tw`flex`}
    margin:0;
    width: 370px;
  }
`;
