import styled from "styled-components";
import tw from "twin.macro";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { FC } from "react";

const BannerSlideContainer = styled.div`
  ${tw`bg-white py-3 lg:py-6`}
`;
const BannerSlideTitle = styled.h4`
  ${tw`text-blak font-extrabold text-center text-2xl text-primary`}
`;

type props = {
  title: string;
  imgUrl: Array<string>;
};

const BannerSlide: FC<props> = ({ title, imgUrl }) => {
  return (
    <BannerSlideContainer>
      <BannerSlideTitle>{title}</BannerSlideTitle>
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
            {imgUrl.map((el, i) => (
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
    </BannerSlideContainer>
  );
};

export default BannerSlide;
