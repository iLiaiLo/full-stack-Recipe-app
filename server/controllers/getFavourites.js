import { Favourites } from "../models/db.js";
const getFavourites = async (req, res) => {
  try {
    const favouritesData = await Favourites.find();
    return res.status(200).json(favouritesData);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default getFavourites;
