import styled from "styled-components";
import tw from "twin.macro";

const BackdropContainer = styled.div<{ transparent?: boolean }>`
  ${tw`fixed left-0 top-0 w-full h-screen bg-gray-800 opacity-70 z-10`}
  background-color: ${({ transparent }) => transparent && "transparent"};
`;

const Backdrop = ({
  show = true,
  close = () => null,
}: {
  show?: boolean;
  close?: () => void;
}) => (show ? <BackdropContainer onClick={close} /> : null);

export default Backdrop;
