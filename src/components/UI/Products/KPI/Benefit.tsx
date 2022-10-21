// import KPI from "./KPI";
import Card from "./Card";
import styled from "styled-components";
import tw from "twin.macro";
import { KPIFeaturesInfo } from "../../../../utils/data";

const FeaturesSection = styled.div`
  ${tw` grid grid-cols-1 md:grid-cols-2 md:gap-10  lg:grid-cols-3  xl:grid-cols-4 gap-10 lg:gap-12`}
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-top: -40px;
  }

  @media (max-width: 450px) {
    margin-bottom: 70px;
    margin-top: -10px;
  }

  @media (min-width: 1024px) {
    margin-top: -30px;
    margin-bottom: 100px;
  }
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
