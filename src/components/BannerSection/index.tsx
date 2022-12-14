import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Container } from "..";
import { FC } from "react";

const Banner = styled.div`
  ${tw`bg-white py-6 lg:py-6`}
`;
const BannerTitle = styled.h4`
  ${tw`text-blak font-extrabold text-center text-2xl text-primary `}
`;

type props = {
  title: string;
  classname: string;
  height: number;
  width: number;
  imgUrl: Array<string>;
};

const BannerSection: FC<props> = ({
  title,
  imgUrl,
  classname,
  width,
  height,
}) => {
  return (
    <Banner>
      <Container>
        <BannerTitle>{title}</BannerTitle>
        <div className="mt-8 flex items-center justify-center flex-wrap">
          {imgUrl.map((el, i) => (
            <div key={i}>
              <Image
                src={el}
                width={width}
                height={height}
                className={classname}
              />
            </div>
          ))}
        </div>
      </Container>
    </Banner>
  );
};

export default BannerSection;
