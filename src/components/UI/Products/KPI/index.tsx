import { Container } from "../../../index";
import { BodyContent, ContainerContent } from "./styles";
import Benefit from "./Benefit";
import KPIHeader from "./KPIHeader";
import { KPIarticles } from "../../../../utils/data";
import KpiBenefits from "../SmartReinforcement/KpiBenefits";

// Testing....

const KPIContainer = () => {
  const articles = KPIarticles;
  return (
    <BodyContent>
      <Container>
        <ContainerContent className="-mt-20">
          {articles?.map((article) => (
            <KPIHeader {...article} />
          ))}
          <KpiBenefits />
        </ContainerContent>
      </Container>
    </BodyContent>
  );
};

export default KPIContainer;
