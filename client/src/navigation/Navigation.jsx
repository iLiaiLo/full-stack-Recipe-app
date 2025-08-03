import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Navigation = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Navigation;
