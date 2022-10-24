import React from "react";
import { ReviewData } from "../../../../utils/data";
import { Name, Role, Content, Wrapper } from "./styles";
import { RiDoubleQuotesR } from "react-icons/Ri";
import Quote from "/public/img/Quote.png";
import Image from "next/image";
import styled from "styled-components";
import tw from "twin.macro";

const ImageContainer = styled.div`
  ${tw`absolute top-[20px] right-[-15px]`}
`;
const TestimonialCard = ({ content, name, role }: ReviewData) => {
  return (
    <Wrapper>
      <div className="relative">
        <ImageContainer>
          <Image src={Quote} width={150} height={100}></Image>
        </ImageContainer>
        <Name>{name || "Michael Ogunleye"}</Name>
        <Role>{role || "household owners"}</Role>

        {/* <RiDoubleQuotesR
          size={170}
          color="rgba(0, 87, 0, 0.24)"
          style={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            zIndex: 2,
          }}
        /> */}

        <Content>
          {content ||
            " Once you schedule they will always find you to Pickup. Very fast, efficient and reliable. I recommend foe every household."}
        </Content>
      </div>
    </Wrapper>
  );
};

export default TestimonialCard;
