import React from "react";
import Earn from "../../src/components/Products/Earn";
import Pay from "../../src/components/Products/Pay";
import SmartReinforcement from "../../src/components/Products/SmartReinforcement";
import PageTab from "../../src/components/PageTab";
import { useRouter } from "next/router";

const Products = () => {
  const pages = [
    {
      tab: "Earn As You Waste ",
      component: <Earn />,
    },
    { tab: "Pay As You Waste", component: <Pay /> },
    { tab: "Smart Reinforcement", component: <SmartReinforcement /> },
  ];

  const location = useRouter();
  const tabNo = location?.state?.tabNo;

  return (
    <PageTab
      tab={tabNo !== undefined ? tabNo : 0}
      title=""
      pages={pages}
      prevLink="/"
      center={true}
    />
  );
};

export default Products;
