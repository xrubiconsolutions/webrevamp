import React from "react";
import { PerksBenefit } from "../../../../utils/data";
import PerkCard from "./PerkCard";
import styled from "styled-components";
import tw from "twin.macro";

const PerkTitle = styled.h3`
  ${tw`font-bold text-body text-center text-2xl  lg:text-3xl`}
`;

const PerkContainer = styled.div`
  ${tw`  `}
`;

const PerkCardWrapper = styled.div`
  ${tw``};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    > div:first-child {
      grid-column: 1/2;
      grid-row: 1/3;
      align-self: start;
    }
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
  }
`;

const Perks = () => {
  return (
    <PerkContainer>
      <PerkTitle>Perks and Benefits</PerkTitle>
      <PerkCardWrapper>
        {PerksBenefit?.map((perks, index) => {
          return <PerkCard {...perks} key={index} />;
        })}
      </PerkCardWrapper>
    </PerkContainer>
  );
};

export default Perks;
