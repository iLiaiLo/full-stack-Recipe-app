import { Favourites } from "../models/db.js";

const removeFavourite = async (req, res) => {
  try {
    const id = +req.params.id;
    const foundRecipe = await Favourites.findOne({ id });
    if (!foundRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    await Favourites.deleteOne({ id });
    return res.status(200).json({ message: "Recipe removed from favourites" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default removeFavourite;
