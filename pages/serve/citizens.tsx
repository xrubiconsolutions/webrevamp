import ArticleSection from "../../src/components/ArticleSection/ArticleSection";
import { citizens } from "../../src/utils/data";

const Citizens = () => {
  return (
    <>
      <ArticleSection {...citizens} />
    </>
  );
};

export default Citizens;
