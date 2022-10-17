import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Column, Container, Row } from "../../..";
import { whatwedo } from "../../../../utils/data";

const WhatWeDoContainer = styled.section`
  padding: 5.2rem 0;
  ${tw`bg-secondary`}
  @media screen and (max-width: 960px) {
    padding: 4rem 0;
  }
`;
const WhatWeDoTitle = styled.h2`
  ${tw`text-primary text-5xl lg:text-6xl font-extrabold mb-4 text-center`}
`;
const WhatWeDoBody = styled.article`
  ${tw``}
`;
const WhatWeDoBodyText = styled.p`
  line-height: 2.5rem;
  @media screen and (max-width: 960px) {
    line-height: 1.75rem;
  }
`;
const WhatWeDoBodyWrapper = styled.div`
  ${tw`grid grid-cols-2 grid-rows-2 gap-4 lg:py-12 lg:pl-20 mt-10 lg:mt-0`}
`;
const WhatWeDoBodyCard = styled.div`
  ${tw`bg-white flex flex-col justify-between items-center px-2 lg:px-8 py-8 space-y-4 shadow-sm rounded-lg `}
`;

const WhatWeDoSection = () => {
  return (
    <WhatWeDoContainer>
      <Container>
        <WhatWeDoTitle>What We Do</WhatWeDoTitle>
        <Row>
          <Column>
            <WhatWeDoBody>
              <WhatWeDoBodyText>
                We connect ecosystem players. We ensure ecosystem inclusion that
                connects waste generators with waste collectors across the value
                chain. Our innovation has created a waste on-demand solution and
                has unified all categories of waste entities under a single
                platform. It provides an end to end data aggregation and insight
                to stakeholders We provide a learning platform for waste
                generators to know how to handle waste and ensure a cleaner
                environment. Through Pakam, Waste management problem is a thing
                of the past.!!!
              </WhatWeDoBodyText>
            </WhatWeDoBody>
          </Column>
          <Column>
            <WhatWeDoBodyWrapper>
              {whatwedo.map((el, i) => {
                return (
                  <WhatWeDoBodyCard
                    key={i}
                    className="hover:-translate-y-1.5 hover:ease-in-out duration-300"
                  >
                    <Image
                      src={el.imgUrl}
                      alt="doings"
                      width={57.04}
                      height={57.04}
                    />
                    <p className="text-xs md:text-sm text-center">{el.title}</p>
                  </WhatWeDoBodyCard>
                );
              })}
            </WhatWeDoBodyWrapper>
          </Column>
        </Row>
      </Container>
    </WhatWeDoContainer>
  );
};

export default WhatWeDoSection;
