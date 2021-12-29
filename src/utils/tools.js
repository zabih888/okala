import { toast } from "react-toastify";

export const showSuccessToast = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
