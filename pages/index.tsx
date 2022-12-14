import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";
import Lottie from "lottie-react";
import { Button, Container } from "../src/components";
import Hero from "../src/components/UI/hero/hero";
import Members from "../src/components/UI/members";
import GlanceCards from "../src/components/UI/PakamAtGlance/glanceCards";
import Serve from "../src/components/UI/serve/serve";
import Support from "../src/components/UI/support";
import Testimonial from "../src/components/UI/testimonial";
import wave from "../src/utils/108668-teal-squiggle.json";

const Banner = styled.div`
  ${tw`bg-primary py-0 lg:py-0.5`};
`;
const BannerCaption = styled.div`
  ${tw`flex items-center justify-between flex-col md:flex-row lg:gap-y-0 gap-y-2`}
`;
const BannerCaptionText = styled.div`
  ${tw`text-white text-xs md:text-base lg:text-2xl font-semibold !leading-4 tracking-wide`}
  > span {
    ${tw`font-playball text-3xl lg:text-5xl tracking-wide`}
  }
`;
const BtnContainer = styled.div``;

const Divider = styled.div`
  --mask: radial-gradient(
        27.41px at 50% calc(100% + 14px),
        #0000 calc(99% - 6px),
        #000 calc(101% - 6px) 99%,
        #0000 101%
      )
      calc(50% - 40px) calc(50% - 13px + 0.5px) / 80px 26px repeat-x,
    radial-gradient(
        27.41px at 50% -14px,
        #0000 calc(99% - 6px),
        #000 calc(101% - 6px) 99%,
        #0000 101%
      )
      50% calc(50% + 13px) / 80px 26px repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const Home: NextPage = () => {
  // const {} = useRouter();

  return (
    <>
      <Head>
        <title>Pakam</title>
        <meta name="description" content="Pakam landing" />
      </Head>
      <Hero />
      {/* <div>
        <Lottie
          animationData={wave}
          loop={false}
          className="h-1/5 bg-secondary"
        /> */}
      {/* </div> */}

      {
        <Banner>
          <Container>
            {/* <Image
            src="/svg/WASTE-BANC-LOGO1 1.svg"
            alt="wastebanc"
            height={70}
            width={200}
            className="!mr-4"
          /> */}
            <BannerCaption>
              {/* <BannerCaptionText>
              Earn Extra Cash today by becoming a <br />
              <span>wastebanc</span> agent, for more info
            </BannerCaptionText> */}
              {/* <BtnContainer>
              <a
                href="https://forms.zohopublic.com/pakamtechnologylimited/form/WASTEBANCAGENTREGISTRATION/formperma/QOZQSCayHg6Fjw_5HUgtUJ1Hew4KbBag7-LNW7RsFPU"
                target="_blank"
                rel="noopener"
              >
                <Button>Register</Button>
              </a>
            </BtnContainer> */}
            </BannerCaption>
          </Container>
        </Banner>
      }
      <GlanceCards />
      <Support />
      <Serve />
      <Testimonial />
      <Members />
    </>
  );
};

export default Home;
