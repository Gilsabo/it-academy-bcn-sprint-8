import "./App.css";
import Starships from "./Components/Starships/Starships";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import RootLayouts from "./Layouts/Layouts";
import StarshipDetail, { starshipDetailsLoader } from "./Components/StarshipDetail/StarshipDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element ={<RootLayouts />}>
        <Route path="home" element={<Home />} />
        <Route path="starships" element={<Starships />} />
        <Route path="starships/:index" element= {< StarshipDetail/>} loader={starshipDetailsLoader} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
