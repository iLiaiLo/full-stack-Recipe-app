import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/appContext";
import useFetchSingleRecipe from "../hooks/useFetchSingleRecipe";
import ErrorPage from "../statusPages/ErrorPage";
import Loading from "../statusPages/Loading";
import useAddFavouriteRecipe from "../hooks/useAddFavouriteRecipe";

const Recipe = () => {
  const { favourites, setFavourites } = useContext(AppContext);

  const { id } = useParams();

  const { recipe, loading, error } = useFetchSingleRecipe(id);
  const handleAdd = useAddFavouriteRecipe({ setFavourites, recipe });
  const recipeExists = favourites.find((item) => item.id === +id);

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="singleParent">
      <div className="singleRecipe">
        <h1>{recipe?.name}</h1>
        <img src={recipe?.thumbnail_url} alt="Image" />

        <section>
          <header>Description:</header>
          <div>{recipe?.description}</div>
        </section>

        <hr className="hierarchy" style={{ width: "100%" }} />

        <section>
          <header>How to make:</header>
          <ol>
            {recipe?.instructions?.map((instruction) => {
              return (
                <li key={instruction?.position}>
                  <div>{instruction?.display_text}</div>
                </li>
              );
            })}
          </ol>
        </section>
        <hr className="hierarchy" />
        {!recipeExists ? (
          <button onClick={handleAdd}>add to favourites</button>
        ) : (
          <i>Added in favourites</i>
        )}

        <NavLink to={"/"}>
          <button>back to Home page</button>
        </NavLink>
        <NavLink to={"/favourites"}>
          <button>go to Favourites page</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Recipe;
