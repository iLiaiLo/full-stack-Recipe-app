import { Recipes } from "../models/db.js";

const getSingleRecipe = async (req, res) => {
  try {
    const id = +req.params.id;
    const singleRecipe = await Recipes.findOne({ id });
    return res.status(200).json(singleRecipe);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default getSingleRecipe;
