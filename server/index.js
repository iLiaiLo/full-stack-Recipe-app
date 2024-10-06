const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();
const router=require("./routes/route")
require("dotenv").config();

const PORT=process.env.port || 5000;
const URI=process.env.URI;


app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST","PUT","PATCH","DELETE"],
    allowedHeaders:"Content-type"
}))

app.use('/recipes',router);

mongoose.connect(URI).then(()=>{
    console.log("connected to database")
    app.listen(PORT,()=>console.log(`serveer running on port: ${PORT}`))
})
.catch(e=>console.log(e))

