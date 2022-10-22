import React from "react";
import { ReviewData } from "../../../../utils/data";
import { Name, Role, Content, Wrapper } from "./styles";
import { RiDoubleQuotesR } from "react-icons/Ri";
import Quote from "/public/img/Quote.png";

const TestimonialCard = ({ content, name, role }: ReviewData) => {
  return (
    <Wrapper>
      <div className="relative">
        <Name>{name || "Michael Ogunleye"}</Name>
        <Role>{role || "household ownerss"}</Role>

        <RiDoubleQuotesR
          size={120}
          color="222D33"
          style={{
            position: "absolute",
            top: "10px",
            right: "-30px",
            zIndex: 2,
          }}
        />

        <Content>
          {content ||
            " Once you schedule they will always find you to pickup. Very fast, efficient and reliable. I recommend foe every household."}
        </Content>
      </div>
    </Wrapper>
  );
};

export default TestimonialCard;
