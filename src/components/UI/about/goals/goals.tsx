import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components";
import { Column, Container, Row } from "../../..";

const GoalSection = styled.section`
  padding: 10.2rem 0;
  ${tw`min-h-full w-full bg-goal-pattern bg-cover bg-no-repeat`}
  @media screen and (max-width: 960px) {
    padding: 4rem 0;
  }
`;
const GoalContainer = styled.div`
  ${tw`flex flex-col items-start  lg:px-10 gap-4`}
`;
const GoalTitle = styled.h3`
  ${tw`font-extrabold text-6xl text-primary`}
`;
const GoalBody = styled.p`
  ${tw``}
`;

const Goals = () => {
  return (
    <GoalSection>
      <Container>
        <Row>
          <Column>
            <GoalContainer>
              <Image
                src="/img/mission.png"
                alt="mission"
                width={200}
                height={201}
              />
              <GoalTitle>Our Mission.</GoalTitle>
              <GoalBody>
                Our mission is to acheive waste scarcity with digital tools
                while building robust circular economy
              </GoalBody>
            </GoalContainer>
          </Column>
          <Column className="mt-10 lg:mt-0">
            <GoalContainer>
              <Image
                src="/img/vision.png"
                alt="vision"
                width={200}
                height={201}
              />
              <GoalTitle>Our Vision.</GoalTitle>
              <GoalBody>
                Our vision is to consistently deploy a global waste technology
                solution that promotes smart sustainability and circular
                economy.
              </GoalBody>
            </GoalContainer>
          </Column>
        </Row>
      </Container>
    </GoalSection>
  );
};

export default Goals;
