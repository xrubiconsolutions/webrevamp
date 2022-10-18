import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../..";
import { ImageImage, ImageContainer } from "../styles";

import {
  ImageContent,
  Paragraph,
  Span,
  Br,
  ContentContainer,
  ProcessHeader,
  WorkHeader,
  Section,
  ReverseBack,
} from "./styles";

export const CardWrapper = styled.div`
  ${tw`lg:w-full md:w-full md:items-start flex flex-col lg:flex-row lg:justify-between  lg:items-center md:flex-col lg:pt-20`}
`;

const ImageContainers = styled.div`
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

const Card = ({
  imgSrc = null,
  imgAlt = "",
  header1 = "",
  header2 = "",
  sub_text = [],
  reverse = false,
}) => {
  return (
    // <div>
    //   {!reverse ? (
    //     <CardWrapper reverse={reverse}>
    //       <ImageContent>
    //         <ImageContainer>
    //           <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
    //         </ImageContainer>
    //       </ImageContent>

    //       <ContentContainer>
    //         <ProcessHeader>{header1}</ProcessHeader>
    //         <WorkHeader>{header2}</WorkHeader>
    //         {ListItems.map((item, index) => {
    //           return (
    //             <Section>
    //               <Span> {index + 1}.</Span>
    //               <Paragraph>{item.sub_text}</Paragraph>
    //             </Section>
    //           );
    //         })}
    //         <Br />
    //         <Button
    //           children="Download Now!"
    //           width={"20px"}
    //           primary="primary"
    //           white={"white"}
    //         />
    //       </ContentContainer>
    //     </CardWrapper>
    //   ) : (
    //     <CardWrapper reverse={reverse}>
    //       {/* <ImageContent> */}
    //       <ReverseBack>
    //         {/* <ImageContainer>
    //           <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
    //         </ImageContainer> */}
    //         {/* </ImageContent> */}

    //         <ImageContent>
    //           <ImageContainer>
    //             <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
    //           </ImageContainer>
    //         </ImageContent>
    //       </ReverseBack>
    //       <ContentContainer>
    //         <ProcessHeader>{header1}</ProcessHeader>
    //         <WorkHeader>{header2}</WorkHeader>
    //         {Lists.map((item, index) => {
    //           return (
    //             <Section>
    //               <Span> {index + 1}.</Span>
    //               <Paragraph style={{ width: "70%" }}>
    //                 {item.sub_text}
    //               </Paragraph>
    //             </Section>
    //           );
    //         })}
    //         <Br />
    //         <Button
    //           children="Download Now!"
    //           width={"20px"}
    //           primary="primary"
    //           white={"white"}
    //         />
    //       </ContentContainer>
    //     </CardWrapper>
    //   )}
    // </div>

    <CardWrapper>
      <ImageContainers>
        <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
      </ImageContainers>

      <ContentContainer>
        <ProcessHeader>{header1}</ProcessHeader>
        <WorkHeader>{header2}</WorkHeader>

        {sub_text?.map((item, index) => {
          return (
            <Section>
              <Span> {index + 1}.</Span>
              <Paragraph>{item}</Paragraph>
            </Section>
          );
        })}

        <Br />
        <Button
          children="Download Now!"
          width={"20px"}
          primary="primary"
          white={"white"}
        />
      </ContentContainer>
    </CardWrapper>
  );
};

export default Card;
