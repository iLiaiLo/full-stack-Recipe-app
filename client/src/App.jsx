import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Favourites from './Routes/Favourites'
import Navigation from './navigation/Navigation'
import Recipe from './Routes/Recipe'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/:id" element={<Recipe />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
