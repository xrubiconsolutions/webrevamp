import KpiBenefits from "./KpiBenefits";
import { BodyContent, ContainerContent } from "../KPI/styles";
import { Container } from "../../..";
import KPIHeader from "../KPI/KPIHeader";
import { payContentArticles } from "../../../../utils/data";

const KpiContainer = ({ heading = "", text = "" }) => {
  const articles = payContentArticles;
  return (
    <BodyContent>
      <Container>
        <ContainerContent>
          {articles?.map((article) => (
            <KPIHeader {...article} />
          ))}
          <KpiBenefits />
        </ContainerContent>
      </Container>
    </BodyContent>
  );
};

export default KpiContainer;
