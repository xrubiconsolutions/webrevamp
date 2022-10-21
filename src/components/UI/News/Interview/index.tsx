import React from "react";
import { Container } from "../../../index";
import { CardContainer } from "../News&Media/styles";
import { InterviewData } from "../../../../utils/data";
import Card from "../News&Media/Card";

const Interview = () => {
  return (
    <div className="">
      <Container>
        <CardContainer>
          {InterviewData?.map((data, index) => {
            return <Card {...data} key={index} />;
          })}
        </CardContainer>
      </Container>
    </div>
  );
};

export default Interview;
