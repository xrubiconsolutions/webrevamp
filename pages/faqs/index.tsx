import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button, Container } from "../../src/components";
import Accordion from "../../src/components/Accordion/accordion";
import Input from "../../src/components/Input/input";
import { faqs } from "../../src/utils/data";
const FaqSection = styled.section`
  ${tw`bg-secondary py-6 lg:py-20`}
`;
const FaqHeader = styled.header`
  ${tw`mt-4 flex flex-col space-y-3`}
`;
const FaqHeaderH1 = styled.h1`
  ${tw`font-extrabold text-5xl text-blak-100 text-center `}
`;
const FaqHeaderP = styled.p`
  ${tw`text-base md:text-lg text-blak-100 text-center`}
`;
const FaqBody = styled.section`
  ${tw`w-full lg:w-4/5 mx-auto mt-8 lg:mt-12`}
`;
const FaqForm = styled.div`
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FaqFormTitle = styled.h3`
  ${tw`font-bold text-3xl lg:text-5xl mb-10`}
  color: #21312a;
`;
const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 920px) {
    width: 580px;
  }
`;
const FormLabel = styled.label`
  ${tw`text-xs md:text-sm md: pb-2 font-medium text-left`}
  display:flex;
`;
const Textarea = styled.textarea`
  padding: 0.3em 1em;
  border-radius: 5px;
  font-size: 13px;
  color: black;
  background: #ffffff;
  outline: none;
  box-shadow: none;
  border: 1px solid #c2c2c2;
  transition: all 0.3s ease-out;
  position: relative;
  height: 2.78rem;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 120px;
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
const ButtonWrappper = styled.div`
  ${tw`mt-4 flex mx-auto`}
`;

const Faqs: NextPage = () => {
  const [primary, setPrimary] = useState(true);
  const [white, setWhite] = useState(true);
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
      <FaqForm>
        <FaqFormTitle>Still have questions? Shoot.</FaqFormTitle>
        <FormContainer>
          <FormWrapper>
            <FormLabel> Email</FormLabel>
            <Input
              placeholder="Email"
              type="email"
              name=""
              value=""
              // onChange=(){}
              required={true}
            />
          </FormWrapper>
          <FormLabel> Message</FormLabel>
          <Textarea cols={30} rows={10}></Textarea>
          <ButtonWrappper>
            <Button primary={primary} white={white}>
              Send Message
            </Button>
          </ButtonWrappper>
        </FormContainer>
      </FaqForm>
    </>
  );
};

export default Faqs;
