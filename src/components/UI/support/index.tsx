import { Container } from "../..";
import styled from "styled-components";
import tw from "twin.macro";
import Marquee from "react-fast-marquee";
import { support } from "../../../utils/data";
import Image from "next/image";

const SupportBanner = styled.div`
  ${tw`bg-white py-3 lg:py-6`}
`;
const SupportBannerTitle = styled.h4`
  ${tw`text-blak font-extrabold text-center text-2xl `}
`;

const Support = () => {
  return (
    <SupportBanner>
      <SupportBannerTitle>PAKAM IS SUPPORTED BY.</SupportBannerTitle>
      <div className="mt-8">
        <Marquee
          gradient={true}
          gradientColor={[248, 251, 251]}
          direction="right"
        >
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
          >
            {support.map((el, i) => (
              <Image
                key={i}
                src={el}
                width={200}
                height={64}
                className="object-contain !ml-2 lg:!ml-8"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </SupportBanner>
  );
};

export default Support;
