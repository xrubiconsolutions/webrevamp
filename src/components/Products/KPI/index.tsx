import { Container } from "../../index";
import {
  BodyContent,
  ContainerContent,
  DescSection,
  Heading,
  Paragraph,
} from "./styles";
import Benefit from "./Benefit";

const KPIContainer = ({ heading = "", text = "" }) => {
  return (
    <BodyContent>
      <Container>
        <ContainerContent className="pt-20 -mt-20">
          <DescSection>
            <Heading>{heading}</Heading>
            <Paragraph>{text}</Paragraph>
          </DescSection>
          <Benefit />
        </ContainerContent>
      </Container>
    </BodyContent>
  );
};

export default KPIContainer;
