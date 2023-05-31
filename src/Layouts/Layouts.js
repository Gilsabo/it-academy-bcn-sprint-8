import { NavLink, Outlet } from "react-router-dom";
import "./layouts.css";
import logoStarWars from "../images/logo-starwars.png";

const RootLayouts = ({ userData }) => {
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
            <div className="instagram">
              <a href="https://www.instagram.com/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="#ffffff"
                />
              </svg>
              </a>
            </div>
            <div className="youtube">
              <a href="https://www.youtube.com/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  fill="#ffffff"
                />
              </svg>
              </a>
            </div>
            <div className="facebook">
              <a href="https://www.facebook.com/StarWars/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  fill="#ffffff"
                />
              </svg>
              </a>
            </div>
            <div className="kids">
              <a href="https://www.starwarskids.com/">
              <svg 
                className="kids-svg"
                fill="none"
                height="15"
                viewBox="0 0 40 15"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                
                <rect
                  fill="white"
                  height="15"
                  rx="7.5"
                  width="38.7"
                  x="0.557617"
                />
                <path
                  clip-rule="evenodd"
                  d="M8.58428 3H5.95703V12H8.58428V10.0843L9.25797 9.14579L10.796 12H13.9277H13.9285H16.917V3H13.9277V11.9987L11.1329 6.90867L13.8724 3H10.8185L8.58428 6.36862V3ZM23.1389 7.51292C23.1389 8.81147 22.3357 9.37715 21.0906 9.37715H20.6367V5.62305H21.0906C22.3357 5.62305 23.1389 6.18859 23.1389 7.48715V7.51292ZM21.0326 3H17.9141V12H20.9397C24.2329 12 25.8855 10.11 25.8855 7.44852V7.42302C25.8855 4.76154 24.2679 3 21.0326 3ZM27.3774 8.6902L25.8857 10.5373C26.9477 11.5043 28.4752 12 30.1698 12C32.4131 12 33.8572 10.8844 33.8572 9.06206V9.03734C33.8572 7.28928 32.4251 6.64471 30.289 6.2355C29.406 6.06193 29.1793 5.91335 29.1793 5.67771V5.65299C29.1793 5.44221 29.3702 5.29349 29.7879 5.29349C30.5636 5.29349 31.5063 5.55384 32.2939 6.14885L33.6542 4.19014C32.6876 3.39671 31.4943 3 29.8834 3C27.5802 3 26.3393 4.27692 26.3393 5.92571V5.95056C26.3393 7.78527 27.986 8.34306 29.8596 8.73978C30.7544 8.92571 31.0171 9.06206 31.0171 9.30993V9.33478C31.0171 9.57028 30.8022 9.70664 30.3011 9.70664C29.3224 9.70664 28.2842 9.4092 27.3774 8.6902Z"
                  fill="black"
                  fill-rule="#ffffff" 
                />
              </svg>
              </a>
            </div>
          </div>
          <div className="register-buttons">
            <NavLink to="/login">
              <div className="register-button">LOG IN </div>
            </NavLink>
            <div className="slash">&#47;&#47;</div>
            <NavLink to="/login">
              <button className="register-button">SIGN UP </button>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink className="home-nav" to="/home">
            <h3>HOME</h3>
          </NavLink>
          {userData ? (
            <NavLink className="starship-nav" to="/starships">
              <h3>STARSHIPS</h3>
            </NavLink>
          ) : (
            <NavLink className="starship-nav" to="/login">
              <h3>STARSHIPS</h3>
            </NavLink>
          )}
        </div>
      </header>

      <main>{<Outlet />}</main>
    </div>
  );
};

export default RootLayouts;
