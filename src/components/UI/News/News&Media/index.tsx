import Card from "./Card";
import { Container } from "../../..";
import { CardContainer } from "./styles";
import { NewsMediaArticles } from "../../../../utils/data";

const NewsMedia = () => {
  return (
    <>
      <div className="bg-secondary">
        <CardContainer>
          {NewsMediaArticles?.map((article, index) => (
            <Card {...article} key={index} />
          ))}
        </CardContainer>
      </div>
    </>
  );
};

export default NewsMedia;
