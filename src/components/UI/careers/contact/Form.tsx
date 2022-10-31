import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../..";
import { careerRegister } from "../../../../utils/ApiRequest";

const UploadContainer = styled.div`
  ${tw`flex flex-col justify-center py-12 bg-secondary`}
  > h3 {
    color: #464f54;
    > span {
      ${tw`text-secondary`}
    }
  }
`;

const UploadFieldContainer = styled.form`
  ${tw`flex flex-col gap-6 py-8 w-5/6  lg:w-4/6 lg:w-full `};
  > button {
    ${tw`rounded-[10px] w-[190px] h-[50px] text-sm text-white font-semibold flex items-center justify-center`}
    background: linear-gradient(178.54deg, #008300 -24.78%, #005700 98.76%);
  }
`;

const FormLabel = styled.div`
  ${tw`text-xs md:text-sm md: pb-2 font-medium`}
  display:flex;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.7em 1em;
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
  font-weight: 500;

  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
  &[type="file"] {
    color: rgba(169, 169, 169, 0.99);
    font-size: 12px;
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
  &::placeholder {
    font-size: 14px;
    font-weight: medium;
    color: #c2c2c2;
    position: relative;
  }

  &:focus {
    position: relative;
    &::placeholder {
      font-size: 1px;
      top: -6px;
      transition: all 300ms ease-in-out;
      color: ${tw`text-primary`};
    }
  }

  @media (max-width: 1024px) {
    margin: 0.5rem 0rem;
  }
  @media (max-width: 768px) {
    padding: 1.45em 1em;
  }

  &::invalid[focused="true"] ~ span {
    color: red;
    display: block;
  }

  margin-bottom: 10px;
`;

// const InputField = styled.input`
// `;

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 500px) {
    display: block;
    width: 115%;
  }

  input:invalid ~ span {
    display: block;
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: -2px;
    display: none;
  }
`;

const UploadHeader = styled.div`
  ${tw`text-2xl text-center md:text-2xl xl:text-[25px] md:text-left font-bold bg-secondary mt-5  `}
`;

const Forms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const defaultFormData: {} = {
    fullname: "",
    phonenumber: "",
    email: "",
    jobtitle: "",
    linkedin: "",
    resume: "",
  };
  const [values, setValues] = useState(defaultFormData);

  // const [popupContent, setPopupContent] = useState<Array<any>>([]);

  const [alert, setAlert] = useState(true);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  let successMessage = "We have recieved your application.";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    form.append("location", "lagos");
    const data = Object.fromEntries(form.entries());
    try {
      setIsLoading(true);
      const sendData = await careerRegister(data);
      if (sendData?.data?.statusCode >= 400) {
        setIsLoading(false);
        setErrorMessage(sendData.data.error.response?.data.error);
        setError(true);
      } else {
        setIsLoading(false);
        setSuccess(true);
        setValues(defaultFormData);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, []);

  type Props = {
    id?: number;
    name?: any;
    type?: string;
    placeholder?: string;
    label?: string;
    className?: string;
    htmlFor?: string;
    value?: any;
    errorMessage?: string;
    required?: boolean;
    pattern?: any;
  };
  const inputs: Array<Props> = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "input your full name",
      label: "Full Name",
      htmlFor: "Fullname",
      required: true,
    },

    {
      id: 2,
      name: "phonenumber",
      type: "number",
      placeholder: "input your phone number",
      label: "Phone Number",
      htmlFor: "phonenumber",
      required: true,
      pattern: "/^(+)?(234|0)[0-9]*?.*/",
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "input your full email",
      label: "Email",
      htmlFor: "email",
      required: true,
    },

    {
      id: 4,
      name: "jobtitle",
      type: "text",
      placeholder: "input your location",
      label: "Job Title",
      htmlFor: "jobtitle",
      required: true,
    },

    {
      id: 5,
      name: "linkedin",
      type: "text",
      placeholder: "Paste your linkedin profile",
      label: "LinkedIn",
      htmlFor: "linkedin",
      className: "form__FormLabel",
      required: true,
    },

    {
      id: 6,
      name: "resume",
      type: "file",
      label: "Resume",
      htmlFor: "selectedFile",
      className: "form__FormLabel",
      required: true,
    },
  ];

  return (
    <div>
      <UploadContainer id="resume">
        <UploadHeader>
          Would like to be part of our team?{" "}
          <span className="text-primary">Get in touch</span>
        </UploadHeader>
        {(success || error) && (
          <div
            className={`register__messageBanner p-4 text-left font-medium pb-7 ${
              success && "-success"
            } ${error && "-error"}`}
          >
            {alert && (
              <div className="text-primary">
                {success ? "Registration Successfully" : "Registration Failed"}
              </div>
            )}
            {alert && (
              <p className="text-primary ">
                {errorMessage}
                {/* {success && successMessage} */}
              </p>
            )}
          </div>
        )}

        <UploadFieldContainer onSubmit={handleSubmit}>
          <div>
            <Form>
              {inputs?.map(
                ({
                  id,
                  className,
                  label,
                  placeholder,
                  type,
                  name,
                  errorMessage,
                  required,
                  pattern,
                }: Props) => {
                  return (
                    <div>
                      <FormLabel className={className}>{label}</FormLabel>
                      <InputField
                        key={id}
                        placeholder={placeholder}
                        type={type}
                        name={name}
                        value={values[name]}
                        onChange={handleChange}
                        required={required}
                        pattern={pattern}
                      />
                      <span>{errorMessage}</span>
                    </div>
                  );
                }
              )}
            </Form>
          </div>
          <Button
            children="Submit your details"
            icons={false}
            weight={false}
            primary={true}
            white={true}
            width={true}
            className=""
          />
        </UploadFieldContainer>
      </UploadContainer>
    </div>
  );
};

export default Forms;
