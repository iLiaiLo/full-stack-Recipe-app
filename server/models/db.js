const mongoose=require("mongoose");

const subSchema=new mongoose.Schema({
    display_text:String,
    position:Number
})

const schema=new mongoose.Schema({
   aspect_ratio:String,
   name:String,
   id:Number,
   thumbnail_url:String,
   description:String,
   instructions:[subSchema]
})

const Recipes=mongoose.model("recipes",schema);

module.exports=Recipes

