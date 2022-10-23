import { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FlexContainer, Container } from "..";

const TabsContainer = styled(FlexContainer)<{
  center: boolean;
  paddingBottom: boolean;
}>`
  ${tw`pt-5 text-xs lg:text-base overflow-hidden space-x-5 lg:space-x-20   mx-auto overflow-x-hidden`};
  justify-content: ${(props) => props.center && "space-around"};

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
    /* ${tw`py-4`} */
  }
`;

const Tab = styled.p<{ active?: boolean; center?: boolean }>`
  ${tw`cursor-pointer mb-0 px-1 relative border-b-2 text-base lg:text-lg tracking-wider md:mt-10`};
  color: ${({ active }) => (active ? "#FFF" : "#A3A3A3")};

  border-color: #fff;
  border-style: solid;
  border-bottom-width: ${({ active }) => (active ? "2px" : "0")};
  bottom: ${({ center }) => (center ? "0" : "-2px")};

  @media (max-width: 1024px) {
  }

  // @media (max-width: 435px) {

  // }
`;

const PageTab = ({
  title = "",
  pages = [{ tab: "", component: () => <></> }],
  tab = 0,
  onTabChange,
  ...props
}) => {
  const [active, setActive] = useState(tab);
  const tabs = pages?.map(({ tab }) => tab);

  return (
    <>
      <div className="bg-primary">
        <>
          <TabsContainer {...props}>
            {tabs?.map((tab, idx, component) => (
              <Tab
                {...props}
                key={idx}
                active={active === idx}
                onClick={() => {
                  setActive(idx);
                  if (onTabChange) {
                    onTabChange(pages[idx].component);
                  }
                }}
              >
                {tab}
              </Tab>
            ))}

            {tabs?.map((tab, index) => {})}
          </TabsContainer>
        </>
      </div>
      {!onTabChange && <div>{pages[active].component}</div>}
    </>
  );
};

export default PageTab;
