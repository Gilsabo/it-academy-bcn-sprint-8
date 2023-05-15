import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./starships.css"
import {Link} from "react-router-dom"

const Starships = () => {
  const [starShipsData, setStarShipsData] = useState(null);
console.log(starShipsData)
  

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/starships/?page=1")
      .then((response) => {
        console.log(response.data.results);
        setStarShipsData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {starShipsData && 
        <ul className="starship">
          {starShipsData.map((item, index) => 
            <Link to={index.toString()} className="box-starship" key={index} >
              <div>{item.name} and {index}</div>
              <div>{item.model}</div>
            </Link>
          )}
        </ul>
      }
    </>
  );
};

export default Starships;
