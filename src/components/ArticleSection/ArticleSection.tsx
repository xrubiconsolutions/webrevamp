import React, { useEffect, useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "..";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

const ArticleHeroSection = styled.div`
  padding: 5.2rem 0;
  ${tw`bg-secondary`}
  @media screen and (max-width: 960px) {
    padding: 3rem 0;
  }
`;
const ArticleHeroRow = styled.div<{ imgStart: string }>`
  display: flex;
  margin-right: -15px;
  margin-bottom: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: center;
  flex-direction: ${({ imgStart }) =>
    imgStart === "start" ? "row-reverse" : "row"};
`;

const ArticleHeroCol = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;
const ArticleHeroH1 = styled.h1`
  ${tw`md:text-7xl text-5xl text-primary  mb-4`}
  font-weight: 850;
  line-height: 104px;
  @media screen and (max-width: 960px) {
    line-height: 1;
  }
`;
const ArticleTitle = styled.h1`
  ${tw`text-primary text-5xl lg:text-6xl font-extrabold mb-4 `}
`;
const ArticleBodyTitle = styled.h1`
  ${tw`text-primary text-5xl lg:text-6xl font-extrabold mb-4 `}
`;
const ArticleHeroP = styled.p`
  ${tw`md:text-lg text-base font-normal`}
`;

const ArticleHeroImgWrapper = styled.div`
  max-width: 555px;
`;
const ArticleHeroImg = styled.img`
  ${tw`lg:ml-6 md:ml-3 ml-0 object-contain`}
  max-width: 95%;
  margin-top: 0;
  margin-right: 0;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

type props = {
  imgStart?: any;
  header?: any;
  id?: any;
  title?: any;
  text?: string;
  img: string;
};

function ArticleSection({ title, imgStart, header, id, text, img }: props) {
  const tilt = useRef(null);
  useEffect(() => {
    return VanillaTilt.init(tilt.current!, {
      reverse: true,
    });
  }, []);
  return (
    <>
      <ArticleHeroSection id={id}>
        <Container>
          {title ? <ArticleTitle>{title}</ArticleTitle> : null}
          <ArticleHeroRow imgStart={imgStart} title={title}>
            <ArticleHeroCol>
              {header ? <ArticleBodyTitle>{header}</ArticleBodyTitle> : null}
              <ArticleHeroP>{text}</ArticleHeroP>
            </ArticleHeroCol>
            <ArticleHeroCol>
              <ArticleHeroImgWrapper ref={tilt}>
                <Image
                  src={img}
                  height={542}
                  width={573}
                  className="object-contain flex self-end"
                />
              </ArticleHeroImgWrapper>
            </ArticleHeroCol>
          </ArticleHeroRow>
        </Container>
      </ArticleHeroSection>
    </>
  );
}

export default ArticleSection;
