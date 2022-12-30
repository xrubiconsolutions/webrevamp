import { CardContainer } from "../News&Media/styles";
import { PressRelase } from "../../../../utils/data";
import { PressCard } from "./PressCard";
import { useRouter } from "next/router";

const PressRelease = () => {
  return (
    <div className="bg-secondary">
      <CardContainer>
        {PressRelase?.map((data, index) => {
          return <PressCard {...data} key={index} />;
        })}
      </CardContainer>
    </div>
  );
};

export default PressRelease;
