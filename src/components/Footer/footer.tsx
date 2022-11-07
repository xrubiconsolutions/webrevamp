import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "..";
import { FaWhatsapp } from "react-icons/fa";

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
  ${tw`text-base text-white hover:cursor-pointer`}
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
              <a
                href="https://play.google.com/store/apps/details?id=com.pakamcustomer"
                target="_blank"
              >
                <Image
                  src="/img/Google play.png"
                  alt="play store"
                  width={120}
                  height={40}
                />
              </a>

              <a
                href="https://apps.apple.com/ng/app/pakam-household-recycling-app/id1539296957"
                target="_blank"
              >
                <Image
                  src="/img/apple.png"
                  alt="app store"
                  width={120}
                  height={40}
                />
              </a>
            </AppContainer>
          </FooterContainerList>
          <FooterContainerList>
            <FooterContainerListH6>Legal</FooterContainerListH6>
            <FooterContainerCenter>
              <FooterContainerListP>
                <Link href="/cookie">Cookie Policy</Link>
              </FooterContainerListP>
              <FooterContainerListP>
                <Link href="/aggrement">End User License Agreement</Link>
              </FooterContainerListP>
              <FooterContainerListP>
                <Link href="/privacy">Privacy Policy</Link>
              </FooterContainerListP>
              <FooterContainerListP>
                <Link href="/terms">Terms and Conditions</Link>
              </FooterContainerListP>
            </FooterContainerCenter>
          </FooterContainerList>
          <FooterContainerList>
            <FooterContainerListH6>Contact Us</FooterContainerListH6>
            <FooterContainerCenter>
              <FooterContainerListP>
                127, Ogunlana Drive, Surulere
              </FooterContainerListP>
              <FooterContainerListP>+234 - 912 261 6778</FooterContainerListP>
              <FooterContainerListP>+234 - 708 664 6637</FooterContainerListP>
              <FooterContainerListP>info@pakam.ng</FooterContainerListP>
              <AppContainer>
                <a
                  href="https://web.facebook.com/people/Pakam/100067730415458/"
                  target="_blank"
                >
                  <Image
                    src="/img/facebook.png"
                    alt="facebook"
                    width={25.82}
                    height={26.67}
                  />
                </a>

                <a
                  href="https://www.instagram.com/pakam_ng/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                >
                  <Image
                    src="/img/instagram.png"
                    alt="instagram"
                    width={25.82}
                    height={26.67}
                  />
                </a>

                <a
                  href="https://twitter.com/_Pakam?t=x-7tBM5MyJeUK4oqR53uFg&s=09"
                  target="_blank"
                >
                  <Image
                    src="/img/twitter.png"
                    alt="twitter"
                    width={25.82}
                    height={26.67}
                  />
                </a>

                <a
                  href="https://api.whatsapp.com/message/7U3WYHMHI3HPF1?autoload=1&app_absent=0"
                  target="_blank"
                >
                  <FaWhatsapp fontSize={27} color="white" />
                </a>
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
