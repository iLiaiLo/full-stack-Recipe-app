import { useState, useEffect } from "react";

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("http://localhost:5000/recipes");
        if (!res.ok) {
          setError(res);
          return;
        }
        const recipes = await res.json();

        setRecipes(recipes);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);
  return { recipes, loading, error };
};

export default useFetchRecipes;
