import { useState, useEffect } from "react";
const useFetchSingleRecipe = (id) => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`http://localhost:5000/recipes/${id}`);
        if (!res.ok) {
          setError(res);
          return;
        }
        const data = await res.json();
        setRecipe(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);
  return { recipe, loading, error };
};

export default useFetchSingleRecipe;
