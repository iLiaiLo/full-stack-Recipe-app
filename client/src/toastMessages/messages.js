import { toast } from "react-toastify";

import { Bounce } from "react-toastify";

const messageProps = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};
export const addMessage = () =>
  toast.info("Recipe added to favourites", messageProps);

export const deleteMessage = () =>
  toast.info("Recipe removed from favourites", messageProps);
