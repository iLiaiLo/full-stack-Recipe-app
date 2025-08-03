import { Recipes } from "../models/db.js";

const getAllRecipes = async (req, res) => {
  try {
    const data = await Recipes.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export default getAllRecipes;
