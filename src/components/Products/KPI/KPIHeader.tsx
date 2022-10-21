import React from "react";
import { DescSection, Heading, Paragraph } from "./styles";

const KPIHeader = ({ heading = "", text = "" }) => {
  return (
    <DescSection>
      <Heading>{heading}</Heading>
      <Paragraph>{text}</Paragraph>
    </DescSection>
  );
};

export default KPIHeader;
