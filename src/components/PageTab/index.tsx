import React, { useState, useEffect, FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FlexContainer, Container } from "..";
import { useRouter } from "next/router";

const TabsContainer = styled(FlexContainer)<{
  center: boolean;
  paddingBottom: boolean;
}>`
  ${tw` text-xs lg:text-base overflow-hidden space-x-5 lg:space-x-20 mx-auto overflow-x-hidden -mt-10  md:-mt-5 `};
  justify-content: ${(props) => props.center && "space-between"};

  @media (max-width: 768px) {
    justify-content: ${({ center }) => center && "space-between"};
    gap: 10px;
  }

  @media (max-width: 1024px) {
    ${tw`pt-0 pb-10`}
  }

  @media (max-width: 768px) {
    ${tw`pt-0 pb-0 -mt-5`}
  }

  @media (max-width: 500px) {
    ${tw`pt-5 pb-7`}
  }
`;

const Tab = styled.p<{ active?: boolean; center?: boolean }>`
  ${tw`cursor-pointer mb-0 px-1 relative text-xs  md:text-sm lg:text-sm tracking-wider `};
  color: ${({ active }) => (active ? "#FFF" : "#A3A3A3")};

  border-color: #fff;
  border-style: solid;
  border-bottom-width: ${({ active }) => (active ? "2px" : "0")};
  bottom: ${({ center }) => (center ? "0" : "-2px")};
`;

type Props = {
  title?: string;
  tab?: number;
  center?: boolean;
  onTabChange?: (element: React.ReactNode | JSX.Element | Element) => void;
  pages?: Array<{ tab: string; component: JSX.Element }>;
  prevLink?: string;
};

const PageTab: FC<Props> = ({
  title = "",
  pages = [{ tab: "", component: () => <></> }],
  tab = 0,
  onTabChange,
  ...props
}) => {
  const [active, setActive] = useState(tab);
  const tabs = pages?.map(({ tab }) => tab);

  useEffect(() => {
    window.localStorage.setItem("active", JSON.stringify(active));
  }, [active]);

  useEffect(() => {
    const value = window.localStorage.getItem("active");
    console.log("value", value);
    if (value) return setActive(JSON.parse(value));
  }, []);

  const router = useRouter();

  useEffect(() => {
    router.push(`${router.pathname}?tab=${active}`, undefined, {
      shallow: true,
    });
  }, [active]);

  return (
    <>
      <div className="">
        ,
        <Container>
          <TabsContainer {...(props as any)}>
            {tabs?.map((tab, idx, component) => (
              <Tab
                {...props}
                key={idx}
                active={tab.length > 0 ? active === idx : false}
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
        </Container>
      </div>
      {!onTabChange && <div>{pages[active].component}</div>}
    </>
  );
};

export default PageTab;
