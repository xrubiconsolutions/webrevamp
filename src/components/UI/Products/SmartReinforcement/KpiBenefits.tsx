import React from "react";
import Card from "../KPI/Card";
import { kpiFeatures } from "../../../../utils/data";
import { FeaturesSection } from "../KPI/Benefit";

const KpiBenefits = () => {
  const articles = kpiFeatures;
  return (
    <FeaturesSection>
      {articles?.map(({ text, imgSrc, imgAlt }) => {
        return <Card text={text} imgSrc={imgSrc} imgAlt={imgAlt} />;
      })}
    </FeaturesSection>
  );
};

export default KpiBenefits;
