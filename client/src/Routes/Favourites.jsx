import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/appContext";
import useRemoveFavouriteRecipe from "../hooks/useRemoveFavouriteRecipe";
import Loading from "../statusPages/Loading";
import ErrorPage from "../statusPages/ErrorPage";
import useFetchFavourites from "../hooks/useFetchFavourites";

const Favourites = () => {
  const { favourites, setFavourites } = useContext(AppContext);
  const { loading, error } = useFetchFavourites({ setFavourites });

  const handleRemove = useRemoveFavouriteRecipe({ favourites, setFavourites });

  if (error) {
    return <ErrorPage error={error} />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      {favourites.length === 0 ? (
        <h1 className="Message">No favourite recipes yet</h1>
      ) : (
        <section className="favourites">
          {favourites.map((fav) => {
            return (
              <div key={fav?.id} className="favourite">
                <header>{fav?.name}</header>
                <img src={fav?.thumbnail_url} alt="Image" />
                <NavLink to={`/${fav?.id}`}>
                  <button>View more details</button>
                </NavLink>
                <button onClick={() => handleRemove(fav?.id)}>Remove</button>
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Favourites;
