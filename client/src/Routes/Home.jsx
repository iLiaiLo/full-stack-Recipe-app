import { useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import {fetchData} from "../foodData/fetchData";


const Home = () => {

    const [recipeData,setRecipeData]=useState([])

    useEffect(()=>{
        const Data=async ()=>{
            try {
               const data=await fetchData();
               setRecipeData(data)
            } catch (error) {
                console.log(error)
            }
        }
        Data()
    },[])
    
  return (
    <div className="Recipes">
        
        {recipeData.map((recipe,index)=>{
            return <div key={index} className="Recipe">
                <header>{recipe.name}</header>
                <img src={recipe.thumbnail_url} alt="Image"  />
                <NavLink to={`/${recipe.id}`}><button>view</button></NavLink>
            </div>
        })}
    
    </div>
  )
}

export default Home