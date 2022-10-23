import React from "react";
import BodyContainer from "../../src/components/BodyContainer";
import Testimonial from "../../src/components/UI/Review/Testimonial/index";
import ExpertReview from "../../src/components/UI/Review/ExpertReview/index";
import { PageModel } from "../../src/components/UI/News/Hero";
import TestimonialCard from "../../src/components/UI/Review/Testimonial/TestimonialCard";

const index = () => {
  const pages: Array<PageModel> = [
    {
      tab: "Testimonial ",
      component: <Testimonial />,
    },

    {
      tab: "Expert Review ",
      component: <ExpertReview />,
    },
  ];
  const tabNo = 0;

  return (
    <div>
      <BodyContainer
        title=""
        smaller_title="Delivering memorable experiences to 
        our customers is our top most priority"
        text=""
        tabNo={tabNo}
        pages={pages}
      />
    </div>
  );
};

export default index;
