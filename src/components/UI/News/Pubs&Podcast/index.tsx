import { Container } from "../../..";
import { PublicationData } from "../../../../utils/data";
import Card from "../News&Media/Card";
import { CardContainer } from "../News&Media/styles";

const Publications = () => {
  return (
    <>
      <div className="bg-secondary">
        <CardContainer>
          {PublicationData?.map((article, index) => (
            <Card {...article} key={index} />
          ))}
        </CardContainer>
      </div>
    </>
  );
};

export default Publications;
