import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FlexContainer, Container } from "..";

const TabsContainer = styled(FlexContainer)`
  ${tw`pt-5 text-xs lg:text-base overflow-hidden space-x-5 lg:space-x-20   mx-auto overflow-x-hidden`};
  justify-content: ${(props) => props.center && "space-around"};

  @media (max-width: 768px) {
    justify-content: ${(props) => props.center && "center"};
    gap: 10px;
    font-size: 10px;
  }

  > * {
    /* ${tw`py-4`} */
  }
`;

const Tab = styled.p`
  ${tw`cursor-pointer mb-0 px-1 relative border-b-2`};
  color: ${(props) => (props.active ? "#FFF" : "#A3A3A3")};
  border-color: #fff;
  border-style: solid;
  border-bottom-width: ${(props) => (props.active ? "2px" : "0")};
  bottom: ${(props) => (props.center ? "0" : "-2px")};
  margin-top: 30px;

  /* @media (max-width: 1024px) {
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
  } */
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
            {tabs.map((tab, idx) => (
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
          </TabsContainer>
        </>
      </div>
      {!onTabChange && <div>{pages[active].component}</div>}
    </>
  );
};

export default PageTab;
