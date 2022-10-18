import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../../..";
import { solutions } from "../../../../utils/data";
import Image from "next/image";

const SolutionsSection = styled.section`
  padding: 5.2rem 0;
  ${tw`bg-primary`}
  @media screen and (max-width: 960px) {
    padding: 4rem 0;
  }
`;
const SolutionsContainer = styled.div`
  ${tw`grid lg:grid-cols-3 lg:grid-rows-2 gap-3`}
`;
const SolutionsTitle = styled.h3`
  ${tw`text-white font-extrabold text-5xl text-center lg:text-left mb-5 lg:mb-0 lg:mt-10 lg:text-6xl`}
`;
const SolutionsCard = styled.div`
  ${tw`bg-white rounded-xl shadow-md p-8 h-full flex flex-col items-start justify-between gap-2`}
  :hover {
    transform: scale(1.03);
  }
`;
const SolutionsCardH6 = styled.h6`
  ${tw`font-bold text-lg text-primary`}
  :hover {
    transform: scale(1.03);
  }
`;
const SolutionsCardP = styled.p`
  ${tw``}
`;

const Solutions = () => {
  return (
    <SolutionsSection>
      <Container>
        <SolutionsContainer>
          {solutions.map((el, i) => (
            <>
              {el.isTitle ? (
                <SolutionsTitle key={i}>{el.title}</SolutionsTitle>
              ) : (
                <SolutionsCard
                  className=" hover:ease-in-out duration-300 "
                  key={i}
                >
                  <Image
                    src={el.imgUrl}
                    alt={el.title}
                    height={70}
                    width={70}
                  />
                  <SolutionsCardH6>{el.title}</SolutionsCardH6>
                  <SolutionsCardP>{el.text}</SolutionsCardP>
                </SolutionsCard>
              )}
            </>
          ))}
        </SolutionsContainer>
      </Container>
    </SolutionsSection>
  );
};

export default Solutions;
