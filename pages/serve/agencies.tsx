import ArticleSection from "../../src/components/ArticleSection/ArticleSection";
import { agencies } from "../../src/utils/data";

const Agencies = () => {
  return (
    <>
      <ArticleSection {...agencies} />
    </>
  );
};

export default Agencies;
