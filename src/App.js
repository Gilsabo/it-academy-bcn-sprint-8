import "./App.css";
import Starships from "./Components/Starships/Starships";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import RootLayouts from "./Layouts/Layouts";
import StarshipDetail, { starshipDetailsLoader } from "./Components/StarshipDetail/StarshipDetail";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<RootLayouts userData={userData} />} >
            <Route path="home" element={<Home />} />
            <Route path="starships" element={<Starships />} />
            <Route path="starships/:numberUrl" element={<StarshipDetail />} loader={starshipDetailsLoader} />
            <Route path="login" element={<Login userData={userData} setUserData={setUserData} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
