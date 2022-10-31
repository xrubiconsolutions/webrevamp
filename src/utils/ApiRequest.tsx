import axios from "axios";

export const constant = {
  baseUrl: "https://packamserver.herokuapp.com/api",
};

// Resusable requests template
export const ApiRequest = () => {
  const config = {
    baseURL: constant.baseUrl,
    headers: { "Content-Type": "multipart/form-data" },
  };
  const instance = axios.create(config);
  return instance;
};

type Props = {
  formData: {};
};

export const careerRegister = (formData: Props) => {
  return ApiRequest().post("/user/uploadresume", formData);
};