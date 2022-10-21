import React from "react";
import Earn from "../../src/components/UI/Products/Earn";
import Pay from "../../src/components/UI/Products/Pay";
import SmartReinforcement from "../../src/components/UI/Products/SmartReinforcement";
import PageTab from "../../src/components/PageTab";

const Products = () => {
  interface PageModel {
    tab: string;
    component: any;
  }

  const pages: Array<PageModel> = [
    {
      tab: "Earn As You Waste ",
      component: <Earn />,
    },
    { tab: "Pay As You Waste", component: <Pay /> },
    { tab: "Smart Reinforcement", component: <SmartReinforcement /> },
  ];

  return <PageTab pages={pages} prevLink="/" center={true} />;
};

export default Products;
