import Card from "./Card";
import { Container } from "../..";
import { CardContainer } from "./styles";
import Footer from "../../Footer/footer";
import { NewsMediaArticles } from "../../../utils/data";

const NewsMedia = () => {
  return (
    <>
      <div>
        <Container>
          <CardContainer>
            {NewsMediaArticles?.map((article, index) => (
              <Card {...article} key={index} />
            ))}
          </CardContainer>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default NewsMedia;
