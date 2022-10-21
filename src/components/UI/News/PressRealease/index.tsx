import React from "react";
import { Container } from "../../../index";
import { CardContainer } from "../News&Media/styles";
import { PressRelase } from "../../../../utils/data";
import Card from "../News&Media/Card";

const PressRelease = () => {
  return (
    <div className="bg-secondary">
      <Container>
        <CardContainer>
          {PressRelase?.map((data, index) => {
            return <Card {...data} key={index} />;
          })}
        </CardContainer>
      </Container>
    </div>
  );
};

export default PressRelease;
