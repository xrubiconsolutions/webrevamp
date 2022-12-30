import tw from "twin.macro";
import styled from "styled-components";

import { Column, Container, Row } from "../../..";

const AboutHeroSection = styled.main`
  padding: 5.2rem 0;
  ${tw`text-white bg-primary`}
  @media screen and (max-width: 960px) {
    padding: 4rem 0;
  }
`;

const FrameContainer = styled.div`
  ${tw`flex h-full p-0 mt-8 lg:mt-0`};

  > iframe {
    ${tw`rounded-xl w-full`};
    flex: 1 1 auto;
  }
`;

const AboutHeroH1 = styled.h1`
  ${tw` text-5xl lg:text-6xl font-extrabold mb-4`}
`;
const AboutHeroP = styled.p`
  ${tw` text-base lg:text-lg `}
  letter-spacing: 0.5px;
  line-height: 2.5rem;
  @media screen and (max-width: 960px) {
    line-height: 1.75rem;
  }
`;
const AboutHeroContainer = styled.p`
  ${tw`space-y-6 lg:my-10 lg:pr-8`}
`;
const AboutHero = () => {
  return (
    <AboutHeroSection>
      <Container>
        <Row>
          <Column>
            <AboutHeroContainer>
              <AboutHeroH1>Who we are</AboutHeroH1>
              <AboutHeroP>
                {/* We are the first and foremost waste and recycling eco-system
                enabler. Pakam provides a smart waste collection system that
                promotes circularity through waste and recycling management. We
                enhance the waste collection eco-system with technology and data
                generated . Our company is focused on using tech driven schemes
                to proffer lasting solutions that are eco- friendly and
                sustainable. */}
                Pakam Technology is a platform as a service (PaaS) company that
                utilizes software applications and data to promote a circular
                economy and achieve sustainability through recycling and waste
                management. We focus on using technology to protect the
                environment, empower people, and generate profit. Our solution
                also aligns with achieving the 2030 Sustainable Development
                Goals (SDGs).
              </AboutHeroP>
            </AboutHeroContainer>
          </Column>
          <Column>
            <FrameContainer>
              <iframe
                className="aspect-video "
                src="https://www.youtube.com/embed/kXoy8TbaVWE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </FrameContainer>
          </Column>
        </Row>
      </Container>
    </AboutHeroSection>
  );
};
export default AboutHero;
