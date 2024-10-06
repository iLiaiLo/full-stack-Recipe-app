import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navigation">
        <NavLink to="/"  className={({isActive})=>isActive?"active":""}>Home</NavLink>
        <NavLink to="/favourites" className={({isActive})=>isActive?"active":""}>Favourites</NavLink>
    </nav>
  )
}

export default NavBar