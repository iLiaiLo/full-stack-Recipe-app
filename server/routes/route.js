import express from "express";
import getAllRecipes from "../controllers/getRecipes.js";
import getSingleRecipe from "../controllers/getSingleRecipe.js";
import getFavourites from "../controllers/getFavourites.js";
import addFavourites from "../controllers/addFavourites.js";
import removeFavourite from "../controllers/removeFavourite.js";
const router = express.Router();

router.get("/favourites", getFavourites);
router.post("/favourites", addFavourites);
router.delete("/favourites/remove/:id", removeFavourite);

router.get("/", getAllRecipes);
router.get("/:id", getSingleRecipe);

export default router;
