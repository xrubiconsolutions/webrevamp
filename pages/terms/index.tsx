import { NextPage } from "next";
import BodyContainer from "../../src/components/BodyContainer";
import TermsCollectors from "../../src/components/UI/terms/TermsCollectors";
import TermsGenerators from "../../src/components/UI/terms/TermsGenerators";

const Terms: NextPage = () => {
  const pages = [
    {
      tab: "For Generators",

      component: TermsGenerators,
    },
    { tab: "For Collectors", component: TermsCollectors },
  ];

  const tabNo = 0;
  return (
    <>
      <BodyContainer
        title="Terms and Conditions"
        tabNo={tabNo}
        pages={pages as any}
        smaller_title=""
        text=""
      />
    </>
  );
};

export default Terms;
