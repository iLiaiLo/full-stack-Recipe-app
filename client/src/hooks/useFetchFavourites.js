import { useState, useEffect } from "react";

const useFetchFavourites = ({ setFavourites }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const favouriteRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "http://localhost:5000/recipes/favourites"
        );
        const Data = await response.json();
        if (!response.ok) {
          setError(response);
          return;
        }

        setFavourites(Data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };
    favouriteRecipes();
  }, [setFavourites]);
  return { error, loading };
};

export default useFetchFavourites;
