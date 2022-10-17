import { NextPage } from "next";
import styled from "styled-components";
import tw from "twin.macro";
import Lottie from "lottie-react";
import EmptyState from "../../src/utils/empty-state.json";
import { Container } from "../../src/components";

const CareersSection = styled.div`
  ${tw`flex items-center justify-center py-28 bg-white`}
`;
const CareersWrapper = styled.div`
  ${tw`flex flex-col items-center justify-center space-y-6`}
`;
const CareerBodyHeading = styled.h6`
  ${tw`font-extrabold text-center text-lg lg:text-2xl`}
`;
const CareerBodyText = styled.p`
  ${tw`font-thin text-center text-lg md:text-xl lg:text-3xl`}
`;
const Careers: NextPage = () => {
  return (
    <>
      <CareersSection>
        <Container>
          <CareersWrapper>
            <Lottie
              animationData={EmptyState}
              loop={true}
              className="w-2/4 h-3/5 lg:w-1/4 lg:h-1/5"
            />
            <CareerBodyHeading className="font-extrabold text-4xl">
              No jobs openings available now{" "}
            </CareerBodyHeading>
            <CareerBodyText className="font-thin text-xl">
              Please do well to check back to our page for recent openings.
            </CareerBodyText>
          </CareersWrapper>
        </Container>
      </CareersSection>
    </>
  );
};

export default Careers;
