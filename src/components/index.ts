import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;

export const Button = styled.button<{
  icons?: boolean;
  weight?: boolean;
  primary?: boolean;
  white?: boolean;
  width?: boolean;
  className?: string;
}>`
  ${({ icons }) => (icons ? tw`flex items-center justify-center` : "")};
  border-radius: 59.65px;

  background: ${({ primary }) => (primary ? "#008300" : "#FFFFFF")};
  white-space: nowrap;
  color: ${({ white }) => (white ? "white" : "#008300")};
  padding: 11px 46.5px;
  font-weight: ${({ weight }) => (weight ? 500 : 700)};
  border: ${({ white }) => (white ? "none" : "1px solid #b8d7c7")};
  font-size: 16px;
  outline: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #ffff;
    background: ${({ primary }) => (primary ? "#145C53 " : "#DCEBE3")};
  }
  width: ${({ width }) => (width ? "" : "100%")};
  @media screen and (max-width: 960px) {
    width: ${({ width }) => (width ? "" : "100%")};
  }
`;
