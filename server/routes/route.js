const express=require("express");
const Recipes=require(".././models/db");
const Favourites=require(".././models/favouritesDb");
const router=express.Router();

router.get("/",async (req,res)=>{
    try {
        const data=await Recipes.find()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error:error})
    }
})

router.post("/favourites",async (req,res)=>{
    try {
        const data=req.body;
        const favourite=new Favourites(data);
        await favourite.save()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({error:error})
    }
})

router.get("/favourites",async (req,res)=>{
    try {
        const data=await Favourites.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:error})
    }
})

router.delete("/favourites/:id",async (req,res)=>{
    try {
        const Id=+req.params.id;
        const data=await Favourites.deleteOne({id:Id})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:error})
    }
})

module.exports=router