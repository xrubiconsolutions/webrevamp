import KpiBenefits from "./KpiBenefits";
import { BodyContent } from "../KPI/styles";
import { Container } from "../../..";
import KPIHeader from "../KPI/KPIHeader";
import { payContentArticles } from "../../../../utils/data";

const KpiContainer = ({ heading = "", text = "" }) => {
  const articles = payContentArticles;
  return (
    <BodyContent>
      <Container>
        {articles?.map((article) => (
          <KPIHeader {...article} />
        ))}
        <KpiBenefits />
      </Container>
    </BodyContent>
  );
};

export default KpiContainer;
