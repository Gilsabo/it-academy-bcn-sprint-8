import { NavLink, Outlet } from "react-router-dom";
import "./layouts.css"

const RootLayouts = () => {
  return (
    <div className="root-layout">
      <header className="App-header">
        <h1>Star wars</h1>
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
