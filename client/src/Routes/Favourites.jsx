import { useState ,useEffect} from "react"
import { NavLink } from "react-router-dom"
import { favouritesData } from "../foodData/fetchData"

const Favourites = () => {
  const [favourites,setFavourites]=useState([])

  useEffect(()=>{
    const favouriteRecipes=async ()=>{
      try {
        const Data=await favouritesData();
        setFavourites(Data);
      } catch (error) {
        console.log(error)
      }
    }
    favouriteRecipes()
  },[])

  const handleRemove=async (id)=>{

    try {
      await fetch(`http://localhost:5000/recipes/favourites/${id}`,{
        method:"DELETE",
        headers:{
          "Content-type":"application/json"
        }
      })
      const filteredData=favourites.filter(item=>item.id!==id)
      setFavourites(filteredData)
    } catch (error) {
      console.log(error)
    }
  }


  return (<section>

    {favourites.length===0?<h1 className="Message">No favourite recipes yet</h1>:
    <section className="favourites">
      
      {
        favourites.map(fav=>{
          return <div key={fav?.id} className="favourite">
            <header>{fav?.name}</header>
            <img src={fav?.thumbnail_url} alt="Image" />
            <NavLink  to={`/${fav?.id}`}><button>View more details</button></NavLink>
            <button onClick={()=>handleRemove(fav?.id)}>Remove</button>
          </div>
        })
      }

    </section>}

  </section>)
}

export default Favourites