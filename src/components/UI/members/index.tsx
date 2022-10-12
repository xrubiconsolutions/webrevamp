import { Container } from "../..";
import styled from "styled-components";
import tw from "twin.macro";
import Marquee from "react-fast-marquee";
import { members } from "../../../utils/data";
import Image from "next/image";

const MembersBanner = styled.div`
  ${tw`bg-white py-6 lg:py-6`}
`;
const MembersBannerTitle = styled.h4`
  ${tw`text-blak font-extrabold text-center text-2xl `}
`;

const Members = () => {
  return (
    <MembersBanner>
      <Container>
        <MembersBannerTitle>WE ARE MEMBERS OF.</MembersBannerTitle>
        <div className="mt-8 flex items-center justify-center">
          {members.map((el, i) => (
            <Image
              key={i}
              src={el}
              width={240}
              height={50}
              className="object-contain "
            />
          ))}
        </div>
      </Container>
    </MembersBanner>
  );
};

export default Members;
