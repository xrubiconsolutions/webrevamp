import React from "react";
import { Container } from "../../../index";
import { CardContainer } from "../News&Media/styles";
import { PressRelase } from "../../../../utils/data";
import Card from "../News&Media/Card";
// Testing..

const PressRelease = () => {
  return (
    <div className="bg-secondary">
      <CardContainer>
        {PressRelase?.map((data, index) => {
          return <Card {...data} key={index} />;
        })}
      </CardContainer>
    </div>
  );
};

export default PressRelease;
