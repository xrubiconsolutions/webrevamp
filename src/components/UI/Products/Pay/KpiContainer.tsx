import KpiBenefits from "./KpiBenefits";
import { BodyContent } from "../KPI/styles";
import { Container } from "../../..";
import KPIHeader from "../KPI/KPIHeader";
import { payContentArticles } from "../../../../utils/data";
import Benefit from "../KPI/Benefit";

const KpiContainer = () => {
  const articles = payContentArticles;
  return (
    <BodyContent>
      <Container>
        {articles?.map((article) => (
          <KPIHeader {...article} />
        ))}
        <Benefit />
      </Container>
    </BodyContent>
  );
};

export default KpiContainer;
