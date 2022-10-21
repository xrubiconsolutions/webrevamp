import KpiBenefits from "./KpiBenefits";
import { BodyContent, ContainerContent } from "../KPI/styles";
import { Container } from "../../..";
import KPIHeader from "../KPI/KPIHeader";
import { payContentArticles } from "../../../../utils/data";
import Benefit from "../KPI/Benefit";

const KpiContainer = () => {
  const articles = payContentArticles;
  return (
    <BodyContent>
      <Container>
        <ContainerContent className="-mt-20">
          {articles?.map((article) => (
            <KPIHeader {...article} />
          ))}
          <Benefit />
        </ContainerContent>
      </Container>
    </BodyContent>
  );
};

export default KpiContainer;
