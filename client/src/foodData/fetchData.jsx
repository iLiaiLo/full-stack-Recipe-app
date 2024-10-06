
const fetchData =async () => {
    try {
        const response=await fetch("http://localhost:5000/recipes");
        const Data=await response.json()
        return Data;
        
    } catch (error) {
        console.log(error)
    }
}

const favouritesData=async ()=>{
    try {
        const response=await fetch("http://localhost:5000/recipes/favourites");
        const Data=await response.json()
        return Data;
    } catch (error) {
        console.log(error)
    }
}

export {fetchData,favouritesData}