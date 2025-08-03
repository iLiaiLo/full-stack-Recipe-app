import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import { useState } from "react";
import "./App.css";
import Home from "./Routes/Home";
import Favourites from "./Routes/Favourites";
import Navigation from "./navigation/Navigation";
import Recipe from "./Routes/Recipe";
import AppContext from "./context/appContext";

function App() {
  const [favourites, setFavourites] = useState([]);

  const props = {
    favourites,
    setFavourites,
  };

  return (
    <AppContext.Provider value={props}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/:id" element={<Recipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </AppContext.Provider>
  );
}

export default App;
