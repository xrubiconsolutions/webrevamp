import { Review } from "../../../../utils/data";
import { CardContainer } from "../../News/News&Media/styles";
import TestimonialCard from "../Testimonial/TestimonialCard";
import { ExpertReviewData } from "../../../../utils/data";

const ExpertReview = () => {
  return (
    <div className="bg-secondary">
      <CardContainer>
        {ExpertReviewData.map((testimonial, index) => {
          return (
            <TestimonialCard {...testimonial} key={index}></TestimonialCard>
          );
        })}
      </CardContainer>
    </div>
  );
};

export default ExpertReview;
