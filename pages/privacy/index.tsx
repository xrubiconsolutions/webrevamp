import { NextPage } from "next";
import BodyContainer from "../../src/components/BodyContainer";
import PrivacyCollectors from "../../src/components/UI/privacy/PrivacyCollectors";
import PrivacyGenerators from "../../src/components/UI/privacy/PrivacyGenerators";

const Privacy: NextPage = () => {
  const pages = [
    {
      tab: "For Generators",

      component: PrivacyGenerators,
    },
    { tab: "For Collectors", component: PrivacyCollectors },
  ];

  const tabNo = 0;
  return (
    <>
      <BodyContainer
        title="Privacy policy"
        tabNo={tabNo}
        pages={pages}
        smaller_title=""
        text=""
      />
    </>
  );
};

export default Privacy;
