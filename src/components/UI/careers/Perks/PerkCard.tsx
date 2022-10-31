import React from "react";
import { PerksBenefitsModel } from "../../../../utils/data";
import Image from "next/image";
import { PerkValueCard, PerkCardP } from "./styles";

const PerkCard = ({ imgAlt, imgUrl, text }: PerksBenefitsModel) => {
  return (
    <PerkValueCard>
      <Image src={imgUrl} alt={imgAlt} height={45} width={50}></Image>
      <PerkCardP>{text}</PerkCardP>
    </PerkValueCard>
  );
};

export default PerkCard;
