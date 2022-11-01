import axios from "axios";

export const constant = {
  // baseUrl: "https://packamserver.herokuapp.com/api",
  baseUrl: "https://pakam-staging.herokuapp.com/api",
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

export const careerRegister = (formData: {}) => {
  return ApiRequest().post("/user/uploadresume", formData);
};

export const faqRequest = (data: {}) => {
  return ApiRequest().post("/v2/contactUs", data);
};
