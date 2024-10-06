import { NavLink, useParams} from "react-router-dom"
import {fetchData,favouritesData} from "../foodData/fetchData"
import { useEffect, useState} from "react"


const Recipe = () => {
    const [favourites,setFavourites]=useState([])

    const [SingleRecipe,setSingleRecipe]=useState([])
 
    const {id}=useParams();

    useEffect(()=>{
        const Data=async ()=>{
            try {
                const RecipeData=await fetchData()
                setSingleRecipe(RecipeData);
            } catch (error) {
                console.log(error)
            }
        }
        Data()
    },[])

    useEffect(()=>{
        const Data=async ()=>{
            try {
                const Favourites=await favouritesData()
                setFavourites(Favourites)
            } catch (error) {
                console.log(error)
            }
        }
        Data()
    },[])
    
    
    const flag=favourites.find(item=>item.id===+id);

    const Recipe=SingleRecipe.find(item=>item.id===+id)

    const handleAdd=async ()=>{
        try {
            await fetch('http://localhost:5000/recipes/favourites',{
                method:"POST",
                body:JSON.stringify(Recipe),
                headers:{
                    "Content-type":"application/json"
                }
            })

            alert("added")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="singleParent">
    <div className="singleRecipe">
       <h1>{Recipe?.name}</h1>
       <img src={Recipe?.thumbnail_url} width={300} height={300} alt="Image" />

       <section>
       <header >Description:</header>
       <div>{Recipe?.description}</div>
       </section>

       <hr style={{width:"100%"}}/>

       <section>
       <header>How to make:</header>
        <ol>
       {Recipe?.instructions.map((instruction)=>{
        return <li key={instruction?.position}>
            <div>{instruction?.display_text}</div>
        </li>
       })}
       </ol>
       </section>
       <hr style={{width:"100%"}}/>
       {!flag ? <button onClick={handleAdd}>add to favourites</button>:<i>Added in favourites</i>}
    
       <NavLink to={'/'}><button>back to Home page</button></NavLink>
       <NavLink to={'/favourites'}><button>back to Favourites page</button></NavLink>

    </div>

    </div>
  )
}

export default Recipe