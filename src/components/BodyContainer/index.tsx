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
const BodySection = styled.section`
  ${tw`bg-secondary`}
`;

type props = {
  title: string;
  classname?: string;
  tabNo: number;
  pages: Array<{ tab: string; component: () => JSX.Element }>;
};

const BodyContainer: FC<props> = ({ title, tabNo, pages, children }) => {
  const [tabBody, setTabBody] = useState(pages[0].component);
  const updateBody = (elem: JSX.Element) => {
    setTabBody(elem);
  };
  return (
    <div>
      <TitleContainer>
        <TitleH1>{title}</TitleH1>
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
