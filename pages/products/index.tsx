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
      tab: "Earn-as-you Waste ",
      component: <Earn />,
    },
    { tab: "Pay-as-you Waste", component: <Pay /> },
    { tab: "Smart Enforcement", component: <SmartReinforcement /> },
  ];

  return (
    <div className="pt-16 bg-primary">
      <PageTab
        pages={pages}
        prevLink="/,"
        center={true}
        tab={0}
        onTabChange=""
      />
    </div>
  );
};

export default Products;
