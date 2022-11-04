import { NextPage } from "next";
import BodyContainer from "../../src/components/BodyContainer";

import CookiePolicy from "../../src/components/UI/cookie/cookie";

const Cookie: NextPage = () => {
  const pages = [
    {
      tab: "Cookie Policy",

      component: CookiePolicy,
    },
  ];

  const tabNo = 0;
  return (
    <>
      <BodyContainer
        title="Cookie policy for Pakam"
        tabNo={tabNo}
        pages={pages as any}
        smaller_title=""
        text=""
      />
    </>
  );
};

export default Cookie;
