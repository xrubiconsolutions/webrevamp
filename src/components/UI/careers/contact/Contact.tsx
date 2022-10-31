import React, { useState, useEffect, useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
// import GP from "/public/img/ContactPointer.png";
import GP from "/public/img/Group 626021.png";
import LG from "/public/img/LGImage.png";
import Forms from "./Form";

const ArticleHeroSection = styled.div`
  ${tw`pb-20 sm:-mt-10 md:pt-20`}
`;
const ArticleHeroRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  > div:first-child {
    flex-basis: 48%;
  }

  > div:last-child {
    flex-basis: 52%;
  }

  @media (max-width: 1024px) {
    ${tw`flex-col`}
    > div:first-child {
      width: 100%;
    }

    > div:last-child {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const ArticleHeroCol = styled.div``;

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
  // max-width: 555px;
`;

function Contacts() {
  const [width, setWidth] = useState(1200);

  const tilt = useRef(null);
  useEffect(() => {
    return VanillaTilt.init(tilt.current!, {
      reverse: true,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ArticleHeroSection id="resume">
      <ArticleHeroRow>
        <div>
          <ArticleHeroCol>
            <Forms />
          </ArticleHeroCol>
        </div>
        <div>
          <ArticleHeroCol>
            <ArticleHeroImgWrapper ref={tilt}>
              {width > 1000 ? (
                <Image
                  src={LG}
                  className="object-contain"
                  layout="responsive"
                  // width={300}
                />
              ) : (
                <Image src={GP} className="object-cover" />
              )}
            </ArticleHeroImgWrapper>
          </ArticleHeroCol>
        </div>
      </ArticleHeroRow>
    </ArticleHeroSection>
  );
}

export default Contacts;
