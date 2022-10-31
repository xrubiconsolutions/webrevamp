import React from "react";
import BackDrop from "./backdrop";
import styled from "styled-components";
import tw from "twin.macro";
import { FaTimes } from "react-icons/fa";

const ModalContainer = styled.div<{ equalPad?: boolean }>`
  ${tw`bg-white fixed md:top-[120px] rounded-md mx-auto md:m-auto p-10 pr-6 w-[97%] md:w-[70%] max-h-[70vh] lg:max-h-[82vh] overflow-y-scroll `}
  padding-right:${({ equalPad }) => equalPad && "40px"};
`;

// const ModalContainer = styled.div`
//   ${tw`bg-white fixed rounded-md mx-auto md:m-auto p-10 pr-6 w-[97%] md:w-[70%] max-h-[70vh] lg:max-h-[88vh] overflow-y-scroll`}
//   padding-right: ${(props) => props.equalPad && "40px"};
//   // width: ${(props) => props.width || "33rem"};
//   // max-height: 88%;
//   // position: absolute;
//   // top: 7rem;
// `;

// const ListItemModal = styled.div`
//   ${tw`absolute bg-white border border-gray-100 p-3 rounded-md flex flex-col w-40 z-30`}
//   display: ${(props) => (props.show ? "block" : "none")};
//   left: ${(props) => props.left || "-5rem"};
//   width: ${(props) => props.width || "10rem"};
//   padding: ${(props) => props.noPad && "0"};
//   border-width: ${(props) => props.noPad && "0"};
// `;

const ListItemModal = styled.div<{
  show?: boolean;
  left?: boolean | any;
  width?: boolean | any;
  noPad?: boolean;
}>`
  ${tw`absolute bg-white border border-gray-100 p-3 rounded-md flex flex-col w-40 z-30`}
  display: ${({ show }) => (show ? "block" : "none")};
  left: ${({ left }) => left || "-5rem"};
  width: ${({ width }) => width || "10rem"};
  padding: ${({ noPad }) => noPad && "0"};
  border-width: ${({ noPad }) => noPad && "0"};
`;

const PostActionWrapper = styled.div`
  ${tw`h-8 w-2/5 relative flex justify-center items-center px-4 text-center text-gray-300 z-30`}
  background-color: ${(props) => props.color || "#009E52"}
`;

const DropdownContainer = styled.div`
  ${tw`relative w-max`}
`;
const Modal = ({
  show = false,
  close = () => null,
  type = "dialog",
  children,
  ...props
}: {
  show?: boolean;
  close?: () => void;
  type?: string;
  children?: React.ReactNode;
  props?: React.ReactNode;
}) => {
  switch (type) {
    case "dialog":
      return (
        <>
          <div className="mt-20">
            <BackDrop show={show} close={close} />
            <div
              className={`${
                show ? "slidedown_animate" : "slideup_animate"
              } fixed left-0 w-full h-full overflow-hidden flex justify-center top-0 items-center z-20`}
              onClick={close}
            >
              <ModalContainer {...props} onClick={(e) => e.stopPropagation()}>
                {children}
              </ModalContainer>
            </div>
          </div>
        </>
      );
    // case "dropdown":
    //   return (
    //     <>
    //       <BackDrop show={show} close={close} />
    //       <DropdownContainer {...props}>
    //         <ListItemModal {...props} show={show}>
    //           {children}
    //         </ListItemModal>
    //       </DropdownContainer>
    //     </>
    //   );
    case "postAction":
      return (
        <>
          <BackDrop show={show} close={close} />
          <div
            className="absolute left-0 w-full h-full overflow-hidden flex justify-center top-0 z-20"
            onClick={close}
          >
            <PostActionWrapper {...props} onClick={(e) => e.stopPropagation()}>
              {children}
              <FaTimes
                onClick={close}
                size="15"
                className="cursor-pointer right-4 absolute"
              />
            </PostActionWrapper>
          </div>
        </>
      );
    default:
      return (
        <>
          <BackDrop show={show} close={close} />
          <div className="relative">
            <ListItemModal show={show}>{children}</ListItemModal>
          </div>
        </>
      );
  }
};

export default Modal;
