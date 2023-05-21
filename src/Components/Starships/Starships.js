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
  
  const [addOnePage, setAddOnePage] =useState(2)

  

   const loadMoreData=()=>{    
    const one= 1
      setAddOnePage((prevPageNumber => prevPageNumber + one));
      console.log(addOnePage)
   
    
    axios
      .get(`https://swapi.py4e.com/api/starships/?page=${addOnePage}`)
      .then((response) => {
        
        console.log(response.data.next)
        console.log(response)
        setStarShipsData(preStarShipsData=>([...preStarShipsData,...response.data.results]))
        const numbers = response.data.results.map((item) => {
          const regex = /\/(\d+)\//;
          const number = item.url.match(regex);
          
          return parseInt(number[1]);
        });
        setNumberURl(prevNumbers=>[...prevNumbers, ...numbers]);
        console.log(numberUrl)
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
  
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
          <button onClick={loadMoreData} type="button">View more...</button>
        </div>
      )}
    </>
  );
};

export default Starships;
