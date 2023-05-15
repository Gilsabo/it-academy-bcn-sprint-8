import { NavLink, Outlet } from "react-router-dom";

const RootLayouts = () => {
  return (
    <div className="root-layout">
      <header className="App-header">
        <h1>Star wars</h1>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/starships">Starships</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayouts;
