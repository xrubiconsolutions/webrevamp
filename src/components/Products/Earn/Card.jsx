import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Container } from "../..";
import { Button } from "../..";
import { ImageImage, ImageContainer } from "../styles";

const CardWrapper = styled.div`
  width: 100%;
  ${tw``}
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    padding-top: 50px;
  }
  @media (min-width: 1025px) {
    width: 100%;
    ${tw`flex justify-between`}
    padding-top:150px;
  }
`;

const ImageContent = styled.div`
  width: 100%;
  padding: 65px 0;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  > div:last-child {
    // margin-left: ${(props) => (props.reverse ? " " : "100px")};
  }
`;

const ContentContainer = styled.div`
  @media (max-width: 768px) {
    ${tw`pt-20`};
  }

  @media (max-width: 450px) {
    ${tw`pt-2`}
  }

  @media (max-width: 1024px) {
    max-width: 700px;
    margin: auto;
  }
`;

const ProcessHeader = styled.div`
  ${tw`text-xl -mt-10`}
  font-family: Raleway;

  @media (min-width: 1024px) {
    ${tw`text-[20px] -mt-10`}
  }

  @media (max-width: 1024px) {
    ${tw`text-[25px] pb-10`}
  }

  @media (max-width: 450px) {
    ${tw`text-[14px]pt-10 -mb-10`}
  }
`;
const WorkHeader = styled.div`
  ${tw`text-4xl font-extrabold `}
  color: #004900;
  font-family: Raleway;

  @media (max-width: 1024px) {
    ${tw`text-[48px] pb-10`}
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 33px;
  }
  @media (min-width: 1024px) {
    ${tw`text-[47px] mt-14 mb-14 `}
  }

  @media (max-width: 450px) {
    ${tw`text-[28px] `}
  }
`;

const Section = styled.div`
  ${tw`flex gap-5 pb-7 mt-3`}
  @media (max-width: 1024px) {
    max-width: 700px;
    margin: auto;
  }
`;

const Paragraph = styled.div`
  ${tw`text-base`}
  font-family: Raleway;
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    ${tw`text-[14px] font-light w-[92%] leading-[27px]   `}
  }
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 15px;
  font-family: Raleway;
`;

const Br = styled.div`
  @media (min-width: 1024px) {
    ${tw`block mt-[20px]`}
  }
`;

const ReverseBack = styled.div`
  @media (max-width: 1024px) {
    padding: 70px 0 40px 0;
  }
`;

const Card = ({
  imgSrc = "",
  imgAlt = "",
  header1 = "",
  header2 = "",
  reverse = "",
  sub_text = "",
  index,
}) => {
  const ListItems = [
    {
      sub_text:
        "Download and install the app from Android play-store and/or IOS app-store",
    },
    {
      sub_text:
        "Select your type of user (individual or commercial) and create account..",
    },
    { sub_text: "Sign In" },
    {
      sub_text:
        "Select your type of user (individual or commercial) and create account.",
    },
    {
      sub_text:
        "A nearby collector accepts your schedule and gets routed to your location to complete the pickup.A nearby collector accepts your schedule and gets routed to your location to complete the pickup",
    },
    {
      sub_text:
        " Your E-wallet is credited as soon as the request is completed.EARN-AS-YOU WASTE!!! Recycling made easy",
    },
  ];

  const Lists = [
    {
      sub_text:
        "Download and install the (Pakam Household Application) from goggle play store and/or IOS app store)",
    },
    {
      sub_text:
        "Select your type of user (individual or commercial) and create account.",
    },
    { sub_text: "Sign In" },
    {
      sub_text:
        "Select your type of user (individual or commercial) and create account.",
    },
    {
      sub_text:
        "Choose waste category/categories and input the waste quantity in bags.",
    },
    {
      sub_text:
        "Your E-wallet is credited as soon as the request is completed by the recycler. EARN-AS-YOU WASTE!!! Recycling made easy.",
    },
  ];

  return (
    <Container>
      <div>
        {!reverse ? (
          <CardWrapper reverse={reverse}>
            <ImageContent>
              <ImageContainer>
                <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
              </ImageContainer>
            </ImageContent>

            <ContentContainer>
              <ProcessHeader>{header1}</ProcessHeader>
              <WorkHeader>{header2}</WorkHeader>
              {ListItems.map((item, index) => {
                return (
                  <Section>
                    <Span> {index + 1}.</Span>
                    <Paragraph>{item.sub_text}</Paragraph>
                  </Section>
                );
              })}
              {/* <Section>
                <Span> {index + 1}.</Span>
                <Paragraph>{sub_text}</Paragraph>
              </Section> */}
              <Br />
              <Button
                children="Download Now!"
                width={"20px"}
                primary="primary"
                white={"white"}
              />
            </ContentContainer>
          </CardWrapper>
        ) : (
          <CardWrapper reverse={reverse}>
            {/* <ImageContent> */}
            <ReverseBack>
              <ImageContainer>
                <ImageImage src={imgSrc} alt={imgAlt}></ImageImage>
              </ImageContainer>
              {/* </ImageContent> */}
            </ReverseBack>
            <ContentContainer>
              <ProcessHeader>{header1}</ProcessHeader>
              <WorkHeader>{header2}</WorkHeader>
              {Lists.map((item, index) => {
                return (
                  <Section>
                    <Span> {index + 1}.</Span>
                    <Paragraph style={{ width: "70%" }}>
                      {item.sub_text}
                    </Paragraph>
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
        )}
      </div>
    </Container>
  );
};

export default Card;
