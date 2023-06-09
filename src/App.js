import "./App.css";
import Starships from "./Components/Starships/Starships";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import RootLayouts from "./Layouts/Layouts";
import StarshipDetail, { starshipDetailsLoader } from "./Components/StarshipDetail/StarshipDetail";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);  
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact  path="/" element ={<RootLayouts userData={userData}/> }>
        <Route exact path="home" element={<Home />} />
        <Route exact path="starships" element={<Starships />} />
        <Route exact path="starships/:numberUrl" element= {< StarshipDetail/>} loader={starshipDetailsLoader} />
        <Route exact path="login" element= {<Login  userData={userData} setUserData={setUserData}/> }  />
      </Route>
    ),
    { basename: process.env.PUBLIC_URL}
  );
console.log(router)
  return (
    <div className="App">
      <RouterProvider router={router } />
    </div>
  );
}

export default App;
