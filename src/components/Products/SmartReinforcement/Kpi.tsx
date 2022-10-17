import React from "react";
// import KPIContainer from "../KPI";
// import KPIContainer from "../KPI";
import KpiContainer from "./KpiContainer";

const Kpi = () => {
  const articles = [
    {
      heading: "Key Perfomance Improvement",
      text: "Provides a focus for strategic and operational improvement, by helping us create an analytical basis for decision making and help focus attention on what matters most.",
    },
  ];

  return (
    <div>
      {articles.map((article) => {
        return <KpiContainer {...article} />;
      })}
    </div>
  );
};

export default Kpi;
