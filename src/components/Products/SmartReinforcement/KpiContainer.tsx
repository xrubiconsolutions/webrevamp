import KpiBenefits from "./KpiBenefits";
import {
  BodyContent,
  ContainerContent,
  DescSection,
  Heading,
  Paragraph,
} from "../KPI/styles";
import { Container } from "../..";

const KpiContainer = ({ heading = "", text = "" }) => {
  return (
    <BodyContent>
      <Container>
        <ContainerContent className="pt-20 -mt-20">
          <DescSection>
            <Heading>{heading}</Heading>
            <Paragraph>{text}</Paragraph>
          </DescSection>
          <KpiBenefits />
        </ContainerContent>
      </Container>
    </BodyContent>
  );
};

export default KpiContainer;
