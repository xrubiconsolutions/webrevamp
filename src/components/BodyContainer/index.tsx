import styled from "styled-components";
import tw from "twin.macro";
import { Container, Button } from "..";
import PageTab from "../PageTab";
import { FC, ReactNode, useState } from "react";
import { Link as LinkS } from "react-scroll";

const TitleContainer = styled.header`
  width: 100%;
  z-index: 2;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 134px initial;
  align-items: flex-end;
  background-repeat: no-repeat;
  ${tw`flex flex-col items-center justify-center h-full min-h-[200px]  md:h-[330px] lg:h-[330px] space-y-0  lg:space-y-5 -mt-5 bg-header-bg`}
`;

const TitleH1 = styled.h1`
  ${tw`text-white font-extrabold text-6xl  `}
`;

const TitleH2 = styled.h1`
  ${tw`text-white text-3xl text-center font-extrabold md:text-4xl lg:text-5xl   md:w-[90%] lg:max-w-[80%] xl:max-w-[65%] mx-auto  pt-8 lg:pt-2 `}
`;

const TitleH4 = styled.h1`
  ${tw`text-white text-3xl w-[100%] text-center font-extrabold md:text-5xl md:max-w-[80%] lg:max-w-[65%] mx-auto md:pt-0 lg:pt-0`};
`;

const P = styled.p`
  ${tw`text-white text-lg md:font-medium md:text-2xl  pt-10 `}
`;
const BodySection = styled.section`
  ${tw`bg-secondary`}
`;

const P2 = styled.p`
  ${tw`text-white text-xs leading-6 text-center  md:text-xl  w-[100%]  lg:w-[70%] xl:w-[50%] m-auto pt-7 pb-5 md:pt-10 md:pb-1 lg:pt-2 lg:pb-0`}
`;

const ButtonContainer = styled.div`
  ${tw`md:pb-10 md:pt-5`}
`;
type props = {
  title?: string;
  smaller_title?: string;
  text?: string;
  smaller_text?: string;
  classname?: string;
  tabNo: number;
  pages: Array<{ tab: string; component: () => JSX.Element }>;
  isButton?: boolean;
  careerTitle?: string;
};

const BodyContainer: FC<props> = ({
  title,
  text,
  tabNo,
  pages,
  smaller_title,
  smaller_text,
  isButton,
  careerTitle,
  children,
}) => {
  const [tabBody, setTabBody] = useState(pages[0].component);

  const updateBody = (elem: JSX.Element) => {
    setTabBody(elem);
  };

  return (
    <>
      <TitleContainer>
        {/* <Container> */} <P>{text}</P>
        <TitleH1>{title}</TitleH1>
        <TitleH2>
          {tabBody.type.name !== "ExpertReview"
            ? smaller_title
            : "What experts are saying about us"}
        </TitleH2>
        <TitleH4>{careerTitle}</TitleH4>
        <Container>
          <P2>{smaller_text}</P2>
        </Container>
        {isButton ? (
          <ButtonContainer>
            <Button
              weight={false}
              primary={false}
              white={false}
              width={true}
              isBorder={true}
            >
              <LinkS
                to="resume"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Submit Resume
              </LinkS>
            </Button>
          </ButtonContainer>
        ) : (
          ""
        )}
        <PageTab
          tab={tabNo !== undefined ? tabNo : 0}
          title=""
          pages={pages}
          prevLink="/"
          center={true}
          onTabChange={updateBody}
        />
      </TitleContainer>

      <BodySection>
        <Container>{tabBody}</Container>
      </BodySection>
    </>
  );
};

export default BodyContainer;
