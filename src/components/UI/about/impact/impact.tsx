import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../../..";
import { impact } from "../../../../utils/data";
import Image from "next/image";

const ImpactSection = styled.section`
  padding: 5.2rem 0;
  background: linear-gradient(
    116.24deg,
    #fffdef 22.69%,
    rgba(231, 255, 220, 0.8) 46.48%,
    rgba(239, 249, 202, 0.510217) 65.1%,
    rgba(252, 239, 169, 0) 97.87%
  );
  @media screen and (max-width: 960px) {
    padding: 4rem 0;
  }
`;
const ImapactTitle = styled.h3`
  ${tw`text-primary font-extrabold text-center text-5xl  lg:text-left lg:text-6xl`}
`;
const ImapactContainer = styled.div`
  ${tw`grid lg:grid-cols-2 lg:grid-rows-3 gap-5 mt-10`}
`;
const ImapactCard = styled.div`
  ${tw`flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-primary h-full`}
`;
const ImapactText = styled.p`
  ${tw`text-sm lg:text-base`}
`;

const Impact = () => {
  return (
    <ImpactSection>
      <Container>
        <ImapactTitle>Our Impact.</ImapactTitle>
        <ImapactContainer>
          {impact.map((el, i) => (
            <ImapactCard>
              <Image src={el.imgUrl} alt="impact" height={76} width={85} />
              <ImapactText>{el.text}</ImapactText>
            </ImapactCard>
          ))}
        </ImapactContainer>
      </Container>
    </ImpactSection>
  );
};

export default Impact;
