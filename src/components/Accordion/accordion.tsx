import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IconContext } from "react-icons/lib";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { Container } from "..";
import { TechnologyModel } from "../../utils/data";

const AccordionSection = styled.div`
  /* ${tw`flex flex-col items-center justify-center h-screen bg-white `} */
`;
const AccordionContainer = styled.div`
  /* ${tw`absolute`} */
`;
const AccordionWrapper = styled.div`
  /* ${tw``} */
`;
const Wrap = styled.div`
  ${tw`flex items-center justify-between gap-3 py-5 `}
`;

type props = {
  data?: Array<TechnologyModel>;
};
const Accordion = ({ data }: props) => {
  console.log(data, "Arraydata");
  const [clicked, setClicked] = useState(0);

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
    console.log(clicked);
  };
  return (
    <IconContext.Provider value={{ color: "#3D4E4B" }}>
      <AccordionSection>
        <AccordionContainer>
          {data?.map((item, index) => {
            return (
              <AccordionWrapper
                className={
                  clicked === index
                    ? "border-b-4 border-primary border-opacity-25"
                    : "border-b-2 border-primary border-opacity-25"
                }
              >
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h4 className="lg:text-lg text-base font-bold text-blak cursor-pointer w-10/12 md:w-full">
                    {item?.text}
                  </h4>
                  {clicked === index ? <FiMinusCircle /> : <FiPlusCircle />}
                </Wrap>
                {clicked === index ? (
                  <p className="pb-4 text-sm text-body ease-in-out duration-300">
                    {item?.description}
                  </p>
                ) : null}
              </AccordionWrapper>
            );
          })}
        </AccordionContainer>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
