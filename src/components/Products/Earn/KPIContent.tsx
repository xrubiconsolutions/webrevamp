import React from "react";
import { BodyContent, ContainerContent } from "../KPI/styles";
import KPIHeader from "../KPI/KPIHeader";
import Benefit from "../KPI/Benefit";
import { Container } from "../..";
import { KPIarticles } from "../../../utils/data";

const KPIContent = () => {
  const articles = KPIarticles;
  return (
    <BodyContent>
      <Container>
        <ContainerContent className="pt-10 -mt-0">
          {articles?.map((article) => (
            <KPIHeader {...article} />
          ))}
          <Benefit />
        </ContainerContent>
      </Container>
    </BodyContent>
  );
};

export default KPIContent;
