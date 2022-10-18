import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "..";

const FooterSection = styled.footer`
  ${tw`flex items-center justify-center gap-8  bg-primary`}// background: #F5F6FD;
`;
const FooterContainer = styled.div`
  ${tw`grid lg:grid-cols-3 items-start lg:justify-center gap-5 lg:gap-28 py-10`}
`;
const FooterContainerList = styled.div`
  ${tw`space-y-6`}
`;
const FooterContainerListP = styled.p`
  ${tw`text-base text-white`}
`;
const FooterContainerCenter = styled.p`
  ${tw`space-y-2`}
`;
const FooterContainerListH6 = styled.h6`
  ${tw`text-lg text-white font-bold`}
`;
const FooterHr = styled.hr``;
const FooterFootNote = styled.div`
  ${tw`pb-4 pt-6 text-sm font-thin text-white text-center`}
`;
const AppContainer = styled.div`
  ${tw`flex gap-3`}
`;
const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <FooterContainerList>
            <Image
              src="/img/pakam_logo_white.png"
              alt="Pakam Logo"
              width={120.68}
              height={40}
            />
            <FooterContainerListP>
              Pakam enabling people, planet and profit
            </FooterContainerListP>
            <AppContainer>
              <Image
                src="/img/Google play.png"
                alt="play store"
                width={120}
                height={40}
              />
              <Image
                src="/img/apple.png"
                alt="app store"
                width={120}
                height={40}
              />
            </AppContainer>
          </FooterContainerList>
          <FooterContainerList>
            <FooterContainerListH6>Legal</FooterContainerListH6>
            <FooterContainerCenter>
              <FooterContainerListP>Cookies Policy</FooterContainerListP>
              <FooterContainerListP>
                End User License Agreement
              </FooterContainerListP>
              <FooterContainerListP>Privacy Policy</FooterContainerListP>
              <FooterContainerListP>Terms and Condition</FooterContainerListP>
            </FooterContainerCenter>
          </FooterContainerList>
          <FooterContainerList>
            <FooterContainerListH6>Contact Us</FooterContainerListH6>
            <FooterContainerCenter>
              <FooterContainerListP>
                127 Ogunlana Drive, Surulere
              </FooterContainerListP>
              <FooterContainerListP>+234 - 912 261 6778</FooterContainerListP>
              <FooterContainerListP>+234 - 708 664 6637</FooterContainerListP>
              <FooterContainerListP>info@pakam.ng</FooterContainerListP>
              <AppContainer>
                <Image
                  src="/img/facebook.png"
                  alt="facebook"
                  width={25.82}
                  height={26.67}
                />
                <Image
                  src="/img/instagram.png"
                  alt="instagram"
                  width={25.82}
                  height={26.67}
                />
                <Image
                  src="/img/twitter.png"
                  alt="twitter"
                  width={25.82}
                  height={26.67}
                />
              </AppContainer>
            </FooterContainerCenter>
          </FooterContainerList>
        </FooterContainer>
        <FooterHr />
        <FooterFootNote>© 2021 Pakam. All rights reserved</FooterFootNote>
      </Container>
    </FooterSection>
  );
};

export default Footer;
