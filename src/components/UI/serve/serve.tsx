import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Container } from "../..";
import { serve } from "../../../utils/data";

import { useRouter } from "next/router";
import VanillaTilt from "vanilla-tilt";

const ServeContainer = styled.div`
  ${tw`bg-primary py-12 lg:py-20`}
`;
const ServeTitle = styled.h4`
  ${tw`text-white  font-extrabold text-center text-3xl lg:text-5xl mb-7 `}
  letter-spacing: 0.5px;
`;
const ServeCardContainer = styled.div`
  ${tw`grid lg:grid-cols-3 gap-6`}
`;
const ServeCard = styled.div`
  ${tw`bg-white px-4 py-8 rounded-xl grid items-start justify-start gap-2 cursor-pointer`}
  /* transform-style: preserve-3d; */
  transform: translate3d(0);
  transform: perspective(1000px);

  &:hover {
    ${tw`bg-secondary cursor-pointer`}
  }
`;
const ServeCardTitle = styled.div`
  ${tw`text-lg text-primary font-bold`}
  transform: translateZ(30px);
`;
const ServeCardBody = styled.div`
  ${tw`text-base`}
  transform: translateZ(30px);
`;
const ServeCardLink = styled.div`
  ${tw`text-sm font-bold`}
`;
const ImageContainer = styled.div`
  transform: translateZ(25px);
`;
const Serve = () => {
  const router = useRouter();
  const serveTilt = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    return VanillaTilt.init(serveTilt.current, {
      reverse: true,
    });
  }, []);

  return (
    <ServeContainer>
      <Container>
        <ServeTitle>Who We Serve.</ServeTitle>
        <ServeCardContainer>
          {serve.map((el, i) => (
            <ServeCard
              key={i}
              ref={(ref) => (serveTilt.current[i] = ref!)}
              onClick={() => router.push(el.linkUrl!)}
            >
              <>
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
              </>
            </ServeCard>
          ))}
        </ServeCardContainer>
      </Container>
    </ServeContainer>
  );
};

export default Serve;
