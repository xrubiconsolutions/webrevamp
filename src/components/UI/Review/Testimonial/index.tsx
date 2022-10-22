import React from "react";
// import { CardSection } from "./styles";
import { Container } from "../../..";
import { Review } from "../../../../utils/data";
import TestimonialCard from "./TestimonialCard";
import { CardContainer } from "../../News/News&Media/styles";

const Testimonial = () => {
  return (
    <div className="bg-secondary">
      <CardContainer>
        {Review.map((testimonial, index) => {
          return (
            <TestimonialCard {...testimonial} key={index}></TestimonialCard>
          );
        })}
      </CardContainer>
    </div>
  );
};

export default Testimonial;
