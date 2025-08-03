import { deleteMessage } from "../toastMessages/messages";
import { useRef } from "react";
const useRemoveFavouriteRecipe = ({ favourites, setFavourites }) => {
  const timeOutRef = useRef(null);
  const handleRemove = (id) => {
    clearTimeout(timeOutRef);
    setTimeout(async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/recipes/favourites/remove/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!res.ok) {
          throw new Error("Failed to add recipe to favourites");
        }
        const filteredData = favourites.filter((item) => item.id !== id);
        setFavourites(filteredData);
        deleteMessage();
      } catch (error) {
        console.log(error);
      }
    }, 300);
  };
  return handleRemove;
};

export default useRemoveFavouriteRecipe;
