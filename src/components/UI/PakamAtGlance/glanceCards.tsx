import styled from "styled-components";
import Link from "next/link";
import tw from "twin.macro";
import { subscription } from "../../../utils/data";
import Lottie from "lottie-react";
import { Container } from "../..";

const GlanceCardsSection = styled.section`
  ${tw`bg-primary`}

  padding-bottom: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 50)));
  padding-top: calc(2.5rem + (10 - 7.5) * ((100vw - 20rem) / (100 - 50)));
`;
const GlanceCard = styled.article`
  color: #000;
  border-radius: 20px;
  /* border: solid 2px black; */
  padding: 1rem 1rem;
  background: white;
  -o-backdrop-filter: blur(6px);
  -ms-backdrop-filter: blur(6px);
  -moz-backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(10px);
  ${tw`space-y-2`}
  &:hover {
    box-shadow: 32px 32px 64px rgba(0, 87, 0, 0.1);
    cursor: pointer;
  }
  @media screen and (min-width: 1200px) {
    max-height: 285px;
    // min-height: 300px;
  }
`;
const GlanceCardsContainer = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  ${tw`space-y-4 lg:space-y-0`}

  @media screen and (min-width: 920px) {
    padding-left: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 30)));
    padding-right: calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 30)));
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    gap: 7px 17px;
    ${GlanceCard}:nth-of-type(1) {
      grid-area: 3 / 1 / 7 / 7;
    }
    ${GlanceCard}:nth-of-type(2) {
      grid-area: 1 / 7 / 5 / 13;
    }
    ${GlanceCard}:nth-of-type(3) {
      grid-area: 5 / 7 / 9 / 13;
    }
  }
`;

const GlanceCardHeading = styled.div`
  ${tw`text-[30px]   md:text-[50px]  text-white font-extrabold`}

  @media screen and (min-width: 920px) {
    /* grid-area: 1 / 1 / 3 / 7; */
    grid-area: 1 / 1 / 2 / 7;
  }
`;

const GlanceCardTitle = styled.h6`
  ${tw` font-extrabold text-primary text-xl`}
`;
const GlanceCardBody = styled.p`
  ${tw`text-sm leading-normal font-medium`}
`;
const GlanceCardLink = styled.a`
  ${tw`text-sm font-extrabold`}
`;

const GlanceCards = () => {
  return (
    <>
      <GlanceCardsSection>
        <Container>
          <GlanceCardsContainer>
            <GlanceCardHeading>Pakam Technology at a Glance.</GlanceCardHeading>

            <Link href="/products">
              <GlanceCard>
                <Lottie
                  animationData={subscription[1].imgUrl}
                  loop={true}
                  className="w-1/4 h-2/5"
                />
                <GlanceCardTitle>{subscription[1].title}</GlanceCardTitle>
                <GlanceCardBody>
                  Pay-as-You Waste is a full waste management appication that
                  enables citizen to properly dispose their non-recyclable and
                  specialized waste to collector.
                </GlanceCardBody>
                <GlanceCardLink href="">{subscription[1].link}</GlanceCardLink>
              </GlanceCard>
            </Link>

            <Link href="/products">
              <GlanceCard>
                <Lottie
                  animationData={subscription[0].imgUrl}
                  loop={true}
                  className="w-1/4 h-2/5"
                />
                <GlanceCardTitle>{subscription[0].title}</GlanceCardTitle>
                <GlanceCardBody>
                  {/* Earn-as-You Waste is a recycling service that connects waste
                  generators to waste collectors/aggregators in real time,
                  ensuring individuals capture value for their waste. */}
                  Earn-as-You Waste is a recycling service that connects waste
                  generators to waste collectors/aggregators in real time,
                  ensuring individuals capture value for their waste.
                </GlanceCardBody>
                <GlanceCardLink href="">{subscription[0].link}</GlanceCardLink>
              </GlanceCard>
            </Link>

            <Link href="/products">
              <GlanceCard>
                <Lottie
                  animationData={subscription[2].imgUrl}
                  loop={true}
                  className="w-1/4 h-2/5"
                />
                <GlanceCardTitle>{subscription[2].title}</GlanceCardTitle>
                <GlanceCardBody>
                  {/* Pakam smart enforcement is an environmental reporting platform
                  that connects reporting public to environmental agencies in
                  real-time. */}
                  The Pakam Smart Enforcement is an integrated environmental
                  reporting platform that provides an enabling environment for
                  the public to report environmental infractions to
                  environmental agencies in faster, better, and unified manner.
                </GlanceCardBody>
                <GlanceCardLink href="">{subscription[2].link}</GlanceCardLink>
              </GlanceCard>
            </Link>
          </GlanceCardsContainer>
        </Container>
      </GlanceCardsSection>
    </>
  );
};

export default GlanceCards;
