import Image from "next/image";
import React from "react";
import { Container } from "../..";
import tw from "twin.macro";
import styled from "styled-components";
import Link from "next/link";

const HeroSection = styled.main`
  padding: 5.2rem 0 0;
  ${tw`text-primary bg-secondary`}
  @media screen and (max-width: 960px) {
    padding: 3rem 0 0;
  }
`;
const HeroRow = styled.div`
  display: flex;
  margin-right: -15px;
  margin-bottom: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: center;
  flex-direction: row;
`;
const HeroCol = styled.div`
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
const HeroH1 = styled.h1`
  ${tw` text-blak mb-4 text-[35px]  sm:text-[42px] md:text-[50px] lg:text-[56px] !leading-12 md:text-4xl md:!leading-12 !leading-extra-loose`}
  font-weight: 850;
  > span {
    ${tw`text-primary`}
  }
`;
const HeroP = styled.p`
  ${tw`text-blak`}
`;
const HeroBtns = styled.div`
  ${tw`flex items-center gap-6 `}
  margin: 20px 0;
`;
const HeroBtnsLinkImg = styled(Link)`
  height: 60px;
`;
const HeroBtnsImg = styled(Image)`
  object-fit: contain;
`;
const HeroImg = styled.div`
  transform: translate(0px, 6px);
  z-index: -10;
`;
const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroRow>
          <HeroCol>
            <HeroH1>
              Digital marketplace for waste,<span>recycling,</span> and smart
              enforcement.
            </HeroH1>
            <HeroP>Enabling people, planet, and profit .</HeroP>
            <HeroBtns>
              <HeroBtnsLinkImg href="">
                <HeroBtnsImg
                  src="/svg/app store badge.svg"
                  alt="appstore"
                  width={200}
                  height={73}
                />
              </HeroBtnsLinkImg>
              <HeroBtnsLinkImg href="">
                <HeroBtnsImg
                  src="/svg/get-it-on-google-play-badge.svg"
                  alt="playstore"
                  width={200}
                  height={73}
                />
              </HeroBtnsLinkImg>
            </HeroBtns>
          </HeroCol>

          <HeroCol>
            <HeroImg>
              <Image
                src="/svg/pakam_phone.svg"
                alt="app view"
                width={760}
                height={650}
              />
            </HeroImg>
          </HeroCol>
        </HeroRow>
      </Container>
    </HeroSection>
  );
};

export default Hero;
