import { NavLink } from "react-router-dom";
import Loading from "../statusPages/Loading";
import ErrorPage from "../statusPages/ErrorPage";
import useFetchRecipes from "../hooks/useFetchRecipes";
const Home = () => {
  const { recipes, loading, error } = useFetchRecipes();

  if (error) {
    return <ErrorPage error={error} />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Recipes">
      {recipes.map((recipe, index) => {
        return (
          <div key={index} className="Recipe">
            <header>{recipe.name}</header>
            <img src={recipe.thumbnail_url} alt="Image" />
            <NavLink to={`/${recipe.id}`}>
              <button>view</button>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
