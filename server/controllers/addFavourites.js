import { Favourites } from "../models/db.js";

const addFavourites = async (req, res) => {
  try {
    const data = req.body;
    const { _id, ...restData } = data;
    const favourite = new Favourites(data);
    const favouriteExists = await Favourites.findOne({ id: data.id });
    if (favouriteExists) {
      return res.status(400).json({ message: "Recipe already in favourites" });
    }
    await favourite.save();
    return res.status(201).json(restData);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default addFavourites;
