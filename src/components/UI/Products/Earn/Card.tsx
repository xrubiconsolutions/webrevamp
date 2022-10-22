import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../..";
import { ImageImage, ImageContainer } from "../styles";
import { EarnWasteContentModel } from "../../../../utils/data";

import {
  ImageContent,
  Paragraph,
  Span,
  Br,
  ContentContainer,
  ProcessHeader,
  WorkHeader,
  Section,
  CardWrapper,
} from "./styles";

const ImageContainers = styled.div<{ rev: boolean }>`
  margin: auto;

  @media (max-width: 1024px) {
    width: 320px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  @media (max-width: 769px) {
    padding-top: 10px;
    padding-bottom: 0px;
  }

  @media (max-width: 450px) {
    width: 150px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  @media (min-width: 1025px) {
    ${tw`flex`}
    margin:30px 0;
    width: 370px;
  }
`;

const Card = ({
  imgSrc,
  imgAlt,
  header1,
  header2,
  sub_text,
  reverse,
}: EarnWasteContentModel) => {
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

    // <CardWrapper
    //   className={` md:flex-col lg:${reverse ? "flex-row-reverse" : "row"} `}
    // >
    <CardWrapper rev={reverse ? true : false}>
      <ImageContainers rev={reverse ? true : false}>
        <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
      </ImageContainers>

      <ContentContainer>
        <ProcessHeader>{header1}</ProcessHeader>
        <WorkHeader>{header2}</WorkHeader>

        {sub_text?.map((item, index) => {
          return (
            <Section>
              <Span> {index + 1}.</Span>
              <Paragraph rev={reverse ? true : false}>{item}</Paragraph>
            </Section>
          );
        })}

        <Br />
        <Button
          children="Download Now!"
          icons={false}
          weight={false}
          primary={true}
          white={true}
          width={true}
          className=""
        />
      </ContentContainer>
    </CardWrapper>
  );
};

export default Card;
