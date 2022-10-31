import styled from "styled-components";
import tw from "twin.macro";
import { values } from "../../../../../utils/data";

const FormLabel = styled.div`
  ${tw`text-sm lg:text-lg `}
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.3em 1em;
  border-radius: 12px;
  font-size: 18px;
  color: black;
  background: #ffffff;
  outline: none;
  box-shadow: none;
  border: 1px solid #c2c2c2;
  transition: all 0.3s ease-out;
  position: relative;
  height: 2.78rem;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
  &[type="file"] {
    color: rgba(169, 169, 169, 0.99);

    // font-size: 12px;
  }
  &::-webkit-file-upload-button {
    background: linear-gradient(178.54deg, #008300 -24.78%, #005700 98.76%);
    color: #ffff;
    border: 0;
    font-size: 14px;
    padding: 0.3rem;
    border-radius: 3px;
    // visibility: hidden;
  }
`;

type Props = {
  label?: string;
  onChange?: () => void;
  id?: number;
  placeholder?: string;
  name?: string;
  value?: string;
  placeholder?: string;
};
const FormInput = ({ label, onChange, id }: Props) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <InputField
        key={id}
        onChange={onChange}
        //   value={value}
        autoComplete="off"
        //   placeholder={placeholder}
      />
    </>
  );
};

export default FormInput;
