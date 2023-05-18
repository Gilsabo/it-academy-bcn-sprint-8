import { NavLink, Outlet } from "react-router-dom";
import "./layouts.css"
import logoStarWars from "../../images/logo-starwars.png"

const RootLayouts = () => {
  return (
    <div className="root-layout">
      <header className="App-header">
        <img src={logoStarWars} alt="logo-star-wars" />
        <div className="links">
          <NavLink to="/home">
            <h3 className="home-nav">HOME</h3>
          </NavLink>
          <NavLink to="/starships">
            <h3 className="starship-nav">STARSHIPS</h3>
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
