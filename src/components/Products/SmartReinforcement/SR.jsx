import { Container } from "../..";
import FlexContainer from "../Flex";
import PSR from "/public/img/PSR.png";
import { Heading } from "../styles";
import { OverallContainer } from "../styles";
// import Screen from "/public/img/Screen.png";

const SR = () => {
  const articles = [
    {
      text: "The Pakam Smart Enforcement is an integrated environmental reporting platform that provides an enabling environment for the public to report environmental infractions to environmental agencies in a faste, better, and unified manner. It also allows the regulatory agencies to connect with the reporting public for easy access to all infractions reported.",
      imgAlt: "Pakam Smart Reinforcement",
      imgSrc: PSR,
      reverse: false,
    },
  ];
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
