import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Card from "../KPI/Card";
import { payKpifeatures } from "../../../../utils/data";

const FeaturesSection = styled.div`
  ${tw` grid grid-cols-1 md:grid-cols-2 md:gap-10  lg:grid-cols-3  xl:grid-cols-4 gap-10 lg:gap-12`}
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-top: -40px;
  }

  @media (max-width: 450px) {
    margin-bottom: 70px;
    margin-top: -10px;
  }

  @media (min-width: 1024px) {
    margin-top: -30px;
    margin-bottom: 100px;
  }
`;

const KpiBenefits = () => {
  const articles = payKpifeatures;
  return (
    <FeaturesSection>
      {articles?.map(({ text, imgSrc, imgAlt }) => {
        return <Card text={text} imgSrc={imgSrc} imgAlt={imgAlt} />;
      })}
    </FeaturesSection>
  );
};

export default KpiBenefits;
