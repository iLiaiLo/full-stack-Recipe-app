import { addMessage } from "../toastMessages/messages";

import { useRef } from "react";

const useAddFavouriteRecipe = ({ setFavourites, recipe }) => {
  const timeOutRef = useRef(null);
  const handleAdd = () => {
    clearTimeout(timeOutRef.current);
    setTimeout(async () => {
      try {
        const res = await fetch("http://localhost:5000/recipes/favourites", {
          method: "POST",
          body: JSON.stringify(recipe),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to add recipe to favourites");
        }

        setFavourites((favourites) => [...favourites, recipe]);

        addMessage();
      } catch (error) {
        console.log(error);
      }
    }, 300);
  };
  return handleAdd;
};

export default useAddFavouriteRecipe;
