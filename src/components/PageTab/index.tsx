import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FlexContainer, Container } from "..";

const TabsContainer = styled(FlexContainer)<{
  active?: boolean;
  center?: boolean;
  paddingBottom?: boolean;
}>`
  ${tw`pt-5 text-xs lg:text-base overflow-hidden space-x-5 lg:space-x-20 w-[95%] lg:w-[90%] 2xl:w-3/4 mx-auto overflow-x-hidden`};
  justify-content: ${({ center }) => center && "space-around"};

  @media (max-width: 768px) {
    justify-content: ${({ center }) => center && "center"};
    gap: 10px;
    font-size: 10px;
  }
  padding-bottom: ${({ paddingBottom }) => paddingBottom && "60px"};

  @media (max-width: 768px) {
    padding-bottom: ${({ paddingBottom }) => paddingBottom && "40px"};
    ${tw`-mt-6`}
  }

  > * {
    ${tw`py-4`}
  }
`;

const Tab = styled.p<{ active?: boolean; center?: boolean }>`
  ${tw`cursor-pointer mb-0 px-1 relative border-b-2`};
  color: ${({ active }) => (active ? "#FFF" : "#A3A3A3")};

  border-color: #fff;
  border-style: solid;
  border-bottom-width: ${({ active }) => (active ? "2px" : "0")};
  bottom: ${({ center }) => (center ? "0" : "-2px")};
  margin-top: 30px;

  @media (max-width: 1024px) {
    font-size: 11px;
    letter-spacing: 0.5px;
  }

  @media (max-width: 450px) {
    font-size: 9px;
  }

  @media (max-width: 376px) {
    font-size: 8px;
  }

  @media (min-width: 1024px) {
    font-size: 12.5px;
    letter-spacing: 1px;
  }
  &:hover {
    color: white;
  }
`;

const PageTab = ({
  title = "",
  pages = [{ tab: "", component: () => <></> }],
  tab = 0,
  ...props
}) => {
  const [active, setActive] = useState(tab);
  const tabs = pages?.map(({ tab }) => tab);

  return (
    <div>
      <div className="bg-primary">
        <Container>
          <TabsContainer {...props}>
            {tabs?.map((tab, idx) => (
              <Tab
                {...props}
                key={idx}
                active={active === idx}
                onClick={() => setActive(idx)}
              >
                {tab}
              </Tab>
            ))}
          </TabsContainer>
        </Container>
      </div>
      <div>{pages[active].component}</div>
    </div>
  );
};

export default PageTab;
