import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./starships.css";
import { Link } from "react-router-dom";

const Starships = () => {
  const [starShipsData, setStarShipsData] = useState(null);
  const [numberUrl, setNumberURl] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/starships/?page=1")
      .then((response) => {
        setStarShipsData(response.data.results);
        const numbers = response.data.results.map((item) => {
          const regex = /\/(\d+)\//;
          const number = item.url.match(regex);
          return parseInt(number[1]);
        });
        setNumberURl(numbers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(numberUrl);

  return (
    <>
      {starShipsData && (
        <div className="container">
          {starShipsData.map((item, index) => (
            <Link
              to={numberUrl[index].toString()}
              className="link"
              key={numberUrl[index]}
            >
              <div className="starship-box">
                <h3 className="name-starship">{item.name} </h3>
                <h4 className="model-starship">{item.model}</h4>
              </div>
            </Link>
          ))}
          <button type="button">View more...</button>
        </div>
      )}
    </>
  );
};

export default Starships;
