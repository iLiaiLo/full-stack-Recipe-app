import mongoose from "mongoose";

const subSchema = new mongoose.Schema(
  {
    display_text: String,
    position: Number,
  },
  { _id: false }
);

const schema = new mongoose.Schema({
  aspect_ratio: String,
  name: String,
  id: Number,
  thumbnail_url: String,
  description: String,
  instructions: [subSchema],
});

const Recipes = mongoose.model("recipes", schema);
const Favourites = mongoose.model("favourites", schema);

export { Recipes, Favourites };
