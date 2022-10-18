import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../..";
import { chunk } from "../../../../utils";
import { values } from "../../../../utils/data";
import Lottie from "lottie-react";

const ValueContainer = styled.section`
  padding: 5.2rem 0;
  ${tw`bg-value-pattern bg-cover bg-no-repeat min-h-full w-full `}
  @media screen and (max-width: 960px) {
    padding: 4rem 0;
  }
`;
const ValueTitle = styled.h3`
  ${tw`font-extrabold text-white text-center text-5xl lg:text-6xl`}
`;
const ValueCardWrapper = styled.div`
  ${tw`flex flex-col gap-4 mt-8`}
`;
const ValueCardContainer = styled.div`
  ${tw`flex flex-col lg:flex-row justify-center items-stretch gap-4`}
`;
const ValueCard = styled.div`
  ${tw`rounded-lg shadow-md p-4 bg-white flex flex-col items-center justify-center lg:w-1/5 max-h-full  space-y-3`}
`;
const ValueCardP = styled.p`
  ${tw``}
`;

const Values = () => {
  return (
    <ValueContainer>
      <Container>
        <ValueTitle>Our Core Values.</ValueTitle>
        <ValueCardWrapper>
          {chunk(values.slice(0, 6), 3)?.map((value) => {
            return (
              <ValueCardContainer>
                {value.map((el, id) => {
                  return (
                    <ValueCard
                      key={id}
                      className="hover:-translate-y-1.5 hover:ease-in-out duration-300"
                    >
                      <Lottie
                        animationData={el.imgUrl}
                        loop={true}
                        className="lg:w-3/4 w-32 h-32 lg:h-4/5 "
                      />
                      <ValueCardP>{el.text}</ValueCardP>
                    </ValueCard>
                  );
                })}
              </ValueCardContainer>
            );
          })}
        </ValueCardWrapper>
      </Container>
    </ValueContainer>
  );
};

export default Values;
