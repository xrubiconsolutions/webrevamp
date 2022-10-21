import Card from "./Card";
import { Container } from "../../..";
import { CardContainer } from "./styles";
import { NewsMediaArticles } from "../../../../utils/data";

const NewsMedia = () => {
  return (
    <>
      <div className="bg-secondary">
        <Container>
          <CardContainer>
            {NewsMediaArticles?.map((article, index) => (
              <Card {...article} key={index} />
            ))}
          </CardContainer>
        </Container>
      </div>
    </>
  );
};

export default NewsMedia;
