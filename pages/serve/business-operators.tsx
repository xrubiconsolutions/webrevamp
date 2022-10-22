import ArticleSection from "../../src/components/ArticleSection/ArticleSection";
import { businessOperators } from "../../src/utils/data";

const BusinessOperators = () => {
  return (
    <>
      <ArticleSection {...businessOperators} />
    </>
  );
};

export default BusinessOperators;
