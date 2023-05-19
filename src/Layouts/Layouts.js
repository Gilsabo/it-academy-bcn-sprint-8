import { NavLink, Outlet } from "react-router-dom";
import "./layouts.css"
import logoStarWars from "../images/logo-starwars.png"

const RootLayouts = () => {
  return (
    <div className="root-layout">
      <header className="App-header">
        <img className="logo-star-wars" src={logoStarWars} alt="logo-star-wars" />
        <div className="links">
          <NavLink className="home-nav"to="/home">
            <h3 >HOME</h3>
          </NavLink>
          <NavLink className="starship-nav" to="/starships">
            <h3 >STARSHIPS</h3>
          </NavLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayouts;
