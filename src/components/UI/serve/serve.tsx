import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Container } from "../..";
import { serve } from "../../../utils/data";

const ServeContainer = styled.div`
  ${tw`bg-primary py-6 lg:py-20`}
`;
const ServeTitle = styled.h4`
  ${tw`text-white  font-extrabold text-center text-3xl lg:text-5xl mb-7 `}
  letter-spacing: 0.5px;
`;
const ServeCardContainer = styled.div`
  ${tw`grid lg:grid-cols-3 gap-6`}
`;
const ServeCard = styled.div`
  ${tw`bg-white px-4 py-8 rounded-xl grid items-start justify-start gap-2`}
  &:hover {
    ${tw`bg-secondary cursor-pointer`}
  }
`;
const ServeCardTitle = styled.div`
  ${tw`text-lg text-primary font-bold`}
`;
const ServeCardBody = styled.div`
  ${tw`text-base`}
`;
const ServeCardLink = styled.div`
  ${tw`text-sm font-bold`}
`;
const ImageContainer = styled.div``;
const Serve = () => {
  return (
    <ServeContainer>
      <Container>
        <ServeTitle>Who We Serve.</ServeTitle>
        <ServeCardContainer>
          {serve.map((el, i) => (
            <ServeCard key={i}>
              <ImageContainer>
                <Image
                  src={el.imgUrl}
                  width={80}
                  height={60}
                  className="flex self-start"
                />
              </ImageContainer>
              <ServeCardTitle>{el.title}</ServeCardTitle>
              <ServeCardBody>{el.text}</ServeCardBody>
              <ServeCardLink>{el.link}</ServeCardLink>
            </ServeCard>
          ))}
        </ServeCardContainer>
      </Container>
    </ServeContainer>
  );
};

export default Serve;
