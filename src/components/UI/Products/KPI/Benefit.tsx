import Card from "./Card";
import styled from "styled-components";
import tw from "twin.macro";
import { KPIFeaturesInfo } from "../../../../utils/data";

export const FeaturesSection = styled.div`
  ${tw` grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  xl:grid-cols-4 gap-7 lg:gap-5 pb-20`}
`;

const Benefit = () => {
  const articles = KPIFeaturesInfo;
  return (
    <FeaturesSection>
      {articles?.map((article) => {
        return <Card {...article} />;
      })}
    </FeaturesSection>
  );
};

export default Benefit;
