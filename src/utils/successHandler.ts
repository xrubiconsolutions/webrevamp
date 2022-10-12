import { AxiosError } from "axios";
import { toast, ToastOptions } from "react-toastify";
import { handleResponseMessage } from ".";
import { BaseResponse } from "../interface/baseResponse";


export const handleRequestSuccess = <T>(response: BaseResponse<T>, defaultMessage?: string, options?: { toast?: ToastOptions }) => {
  let message = handleResponseMessage(response.message) || defaultMessage || 'Success';
  toast.success(message, options?.toast || {});
};