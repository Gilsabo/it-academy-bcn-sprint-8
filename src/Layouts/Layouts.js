import { NavLink, Outlet } from "react-router-dom";
import "./layouts.css";
import logoStarWars from "../images/logo-starwars.png";


const RootLayouts = ({userData}) => {
 
  

  return (
    <div className="root-layout">
      <header className="App-header">
        <div className="image">
          <img
            className="logo-star-wars"
            src={logoStarWars}
            alt="logo-star-wars"
          />
        </div>
        <div className="nav-bar">
          <div className="icons">
            <div className="instagram">Insta</div>
            <div className="youtube">Youtube</div>
            <div className="facebook">Facebook</div>
          </div>
          <div className="register-buttons">
            <NavLink to="/login">
            <div className="register-button"  >LOG IN </div>
            </NavLink>
            <div className="slash">&#47;&#47;</div>
            <NavLink to="/login" >
            <button className="register-button" >SIGN UP </button>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink className="home-nav" to="/home">
            <h3>HOME</h3>
          </NavLink>
          {userData?(
            <NavLink className="starship-nav" to="/starships">
              <h3>STARSHIPS</h3>
            </NavLink>):(
            <NavLink className="starship-nav" to="/login">
              <h3>STARSHIPS</h3>
            </NavLink>)
}
        </div>
      </header>

      <main>
        {<Outlet />}
      </main>
    </div>
  );
};

export default RootLayouts;
