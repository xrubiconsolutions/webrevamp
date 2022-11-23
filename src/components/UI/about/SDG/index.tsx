/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { SDGImageArray, SDGImageModalValue } from "../../../../utils/data";
import Image from "next/image";
import { Container } from "../../..";

const SDGContainer = styled.section`
  padding: 5.2rem 0;
  ${tw`w-full bg-secondary`}
  @media screen and (max-width: 960px) {
    padding: 4rem 0;
  }
`;

const SDGHeader = styled.div`
  ${tw`lg:max-w-[500px] w-full mx-auto mb-5`};

  > img {
    ${tw`mx-auto w-full`}
  }
`;

const DescText = styled.p`
  ${tw`text-sm text-blak font-medium text-center `}
`;
const SDGImageContainer = styled.section`
  ${tw`flex justify-center items-start pb-4 mx-auto mt-12`};
  width: auto;
  min-height: 321px;
`;
const SDGImageWrapper = styled.div`
  ${tw`mr-[21px]`};
  &:nth-child(even) {
    ${tw`self-end`};
  }
`;

const SDGImage = styled.img`
  && {
    ${tw`cursor-pointer`};
    &:nth-child(1) {
      ${tw`mb-[21px]`};
    }
    width: 126px;
    height: 126px;
    &.gif {
      ${tw`w-[116px] h-[116px] lg:mr-4 mx-auto`};
    }
  }
`;
const Modalbody = styled.div`
  ${tw`bg-white pt-[5px] px-[20px] pb-1 max-w-[500px] mx-auto`};
  min-height: 185px;
  background: #ffffff;
  border-radius: 15px;
`;
const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #222d33;
`;
const SubTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #464f54;
`;

// Modal.setAppElement("#yourAppElement");

const SDG = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [{ modalalt, url, title, subtitle }, setInfo] = useState({
    modalalt: "",
    url: "",
    title: "",
    subtitle: "",
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  type IValue = keyof typeof SDGImageModalValue;
  const handleOpenModal = (value: IValue) => {
    if (!SDGImageModalValue[value]) return;
    setInfo({ modalalt: "", url: "", title: "", subtitle: "" });
    setTimeout(() => {
      setInfo(SDGImageModalValue[value]);
    }, 100);
    setTimeout(openModal, 101);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(38,38,38, .75)",
      zIndex: "30",
    },
    content: {
      background: "transparent",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #FFFFFF",
      borderRadius: "20px",
      filter: "drop-shadow(0px 2.05834px 6.04394px rgba(215, 228, 249, 0.5))",
      width: "auto",
      height: "auto",
      padding: "12px",
    },
  };
  return (
    <>
      <div className="home_width_control bg-[#FAFAFA]">
        <SDGContainer>
          <Container>
            <SDGHeader>
              <Image
                src="/img/SG.png"
                alt="Sustainable development goals"
                height={164}
                width={771}
              />

              <DescText>
                We adhere to the economic sustainability standards, and our
                sustainable development goals focus on the following listed
                goals.
              </DescText>
            </SDGHeader>
            <SDGImageContainer>
              {SDGImageArray.length > 0 &&
                SDGImageArray.map((article, i) => {
                  return (
                    <SDGImageWrapper key={i}>
                      {article.map(({ image, alt }, idx) => (
                        <SDGImage
                          key={idx}
                          src={image}
                          alt={alt}
                          onMouseEnter={() => {
                            handleOpenModal(alt as IValue);
                            setTimeout(closeModal, 3000);
                          }}
                        />
                      ))}
                    </SDGImageWrapper>
                  );
                })}
            </SDGImageContainer>
          </Container>
        </SDGContainer>
      </div>
      {/* @ts-ignore */}

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}

        style={customStyles}
        contentLabel="SDG Modal"
      >
        <Modalbody onMouseLeave={closeModal}>
          <button className="block ml-auto" onClick={closeModal}>
            <div className="rounded-full bg-gray-200 w-[30px] h-[30px] flex justify-center items-center ">
              <IoClose className="text-black" />
            </div>
          </button>

          <div className="lg:flex justify-between items-start">
            <SDGImage className="gif" src={url} alt={modalalt} />
            <div>
              <Title className="mb-4">{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
            </div>
          </div>
        </Modalbody>
      </Modal>
    </>
  );
};

export default SDG;
