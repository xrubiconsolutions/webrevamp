import { Container } from "../..";
import FlexContainer from "../Flex";
import { Heading } from "../styles";
import { OverallContainer } from "../styles";
import { Smartarticles } from "../../../utils/data";
// import Screen from "/public/img/Screen.png";

const SR = () => {
  const articles = Smartarticles;
  return (
    <div>
      <OverallContainer>
        <Container>
          <Heading>Pakam Smart Reinforcement.</Heading>
          {articles.map((article) => {
            return <FlexContainer {...article} />;
          })}
        </Container>
      </OverallContainer>
    </div>
  );
};

export default SR;
