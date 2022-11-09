import { Container } from "../../..";
import FlexContainer from "../Flex";
import { Heading } from "../styles";
import { OverallContainer } from "../styles";
import { earnarticles } from "../../../../utils/data";

const Earnaswaste = () => {
  return (
    <div>
      <OverallContainer>
        <Container>
          <Heading>Earn-as-you Waste (Pakam Household).</Heading>
          {earnarticles.map((article, i) => {
            return <FlexContainer {...article} key={i} />;
          })}
        </Container>
      </OverallContainer>
    </div>
  );
};

export default Earnaswaste;
