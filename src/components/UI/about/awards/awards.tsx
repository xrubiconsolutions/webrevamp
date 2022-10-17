import { awards } from "../../../../utils/data";
import BannerSection from "../../../BannerSection";
import styled from "styled-components";
import tw from "twin.macro";

const AwardsContainer = styled.div`
  ${tw`mb-4`}
`;

const Awards = () => {
  return (
    <AwardsContainer>
      <BannerSection
        title="Awards and recognition"
        imgUrl={awards}
        classname="object-contain"
        width={240}
        height={100}
      />
    </AwardsContainer>
  );
};

export default Awards;
