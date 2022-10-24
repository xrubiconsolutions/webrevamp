import React from "react";
import { BodyContent } from "../KPI/styles";
import KPIHeader from "../KPI/KPIHeader";
import Benefit from "../KPI/Benefit";
import { Container } from "../../..";
import { KPIarticles } from "../../../../utils/data";

const KPIContent = () => {
  const articles = KPIarticles;
  return (
    <BodyContent>
      <Container>
        {articles?.map((article) => (
          <KPIHeader {...article} />
        ))}
        <Benefit />
      </Container>
    </BodyContent>
  );
};

export default KPIContent;
