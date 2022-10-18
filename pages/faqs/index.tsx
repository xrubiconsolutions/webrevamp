import { NextPage } from "next";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../src/components";
import Accordion from "../../src/components/Accordion/accordion";
import { faqs } from "../../src/utils/data";
const FaqSection = styled.section`
  ${tw`bg-secondary py-6 lg:py-20`}
`;
const FaqHeader = styled.header`
  ${tw`mt-4 flex flex-col space-y-3`}
`;
const FaqHeaderH1 = styled.section`
  ${tw`font-extrabold text-5xl text-blak-100 text-center `}
`;
const FaqHeaderP = styled.section`
  ${tw`text-base md:text-lg text-blak-100 text-center`}
`;
const FaqBody = styled.section`
  ${tw`w-full lg:w-4/5 mx-auto mt-8 lg:mt-12`}
`;

const Faqs: NextPage = () => {
  return (
    <>
      <FaqSection>
        <Container>
          <FaqHeader>
            <FaqHeaderH1>FAQs</FaqHeaderH1>
            <FaqHeaderP>
              You have got any questions? we’ve got you covered!
            </FaqHeaderP>
          </FaqHeader>
          <FaqBody>
            <Accordion data={faqs} />
          </FaqBody>
        </Container>
      </FaqSection>
    </>
  );
};

export default Faqs;
