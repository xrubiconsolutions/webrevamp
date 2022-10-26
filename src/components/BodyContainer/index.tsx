import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "..";
import PageTab from "../PageTab";
import { FC, ReactNode, useState } from "react";

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
  ${tw`flex flex-col items-center justify-center h-full lg:h-[300px] space-y-10 lg:space-y-5 p-4 lg:p-14 bg-header-bg`}
`;

const TitleH1 = styled.h1`
  ${tw`text-white font-extrabold text-6xl`}
`;

const TitleH2 = styled.h1`
  ${tw`text-white text-2xl  text-center font-extrabold md:text-4xl  md:max-w-[80%] lg:max-w-[65%] mx-auto`}

  @media (max-width:768px) {
    margin-top: -40px;
  }
`;

const P = styled.p`
  ${tw`text-white text-xl md:font-medium md:text-2xl mt-5`}
`;
const BodySection = styled.section`
  ${tw`bg-secondary`}
`;

type props = {
  title: string;
  smaller_title: string;
  text: string;
  classname?: string;
  tabNo: number;
  pages: Array<{ tab: string; component: () => JSX.Element }>;
};

const BodyContainer: FC<props> = ({
  title,
  text,
  tabNo,
  pages,
  smaller_title,
  children,
}) => {
  const [tabBody, setTabBody] = useState(pages[0].component);

  const updateBody = (elem: JSX.Element) => {
    setTabBody(elem);
  };
  return (
    <div>
      <TitleContainer>
        <P>{text}</P>
        <TitleH1>{title}</TitleH1>
        <Container>
          <TitleH2>
            {tabBody.type.name !== "ExpertReview"
              ? smaller_title
              : "What experts are saying about us"}
          </TitleH2>
        </Container>
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
    </div>
  );
};

export default BodyContainer;
