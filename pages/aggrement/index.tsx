import BodyContainer from "../../src/components/BodyContainer";
import EndUser from "../../src/components/UI/agreement/EndUser";
import { NextPage } from "next";

const Aggrement: NextPage = () => {
  const pages = [
    {
      tab: "End User Lincense Aggrement",
      component: EndUser,
    },
  ];
  const tabNo = 0;
  return (
    <>
      <BodyContainer
        title=""
        tabNo={tabNo}
        pages={pages}
        smaller_title="Pakam Mobile Application End User Lincense Aggrement"
        text=""
      />
    </>
  );
};
export default Aggrement;
