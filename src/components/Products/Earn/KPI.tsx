import React from "react";
import KPIContainer from "../KPI";
import { KPIarticles } from "../../../utils/data";

const KPI = () => {
  const articles = KPIarticles;
  return (
    <div>
      {articles.map((article) => {
        return <KPIContainer {...article} />;
      })}
    </div>
  );
};

export default KPI;
