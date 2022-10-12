import { AxiosError } from "axios";
import { toast, ToastOptions } from "react-toastify";
import { handleResponseMessage } from ".";


export const handleRequestErrors = (error: AxiosError | any, defaultMessage?: string, options?: { toast?: ToastOptions }) => {
    let useMessage = '';
    if (error.response?.status.toString().startsWith('4')) {
      console.log(handleResponseMessage(error.response?.data?.message || ''));
      useMessage = handleResponseMessage(error.response?.data?.message || '') || defaultMessage || 'An unexpected error occurred.';
    }
    toast.error(useMessage, options?.toast || {});
};