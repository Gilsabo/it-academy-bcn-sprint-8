import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./pilots.css";

const Pilots = ({ starship }) => {
  console.log(starship);
  const [nameFromUse, setNameFromUse] = useState([]);

  useEffect(() => {
    const fetchPilotNames = async () => {
      try {
        const promises = starship.pilots.map((item) => axios.get(item));
        const responses = await Promise.all(promises);
        const names = responses.map((response) => response.data.name);
        console.log(responses[0].data.eye_color);
        setNameFromUse(names);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPilotNames();
  }, [starship.pilots]);

  const urlNumberCharacter = starship.pilots.map((pilot) => {
    const regex = /\/(\d+)\//;
    const character = pilot.match(regex);

    return parseInt(character[1]);
  });

  const pilotImages = urlNumberCharacter.map((character) => {
    return `https://starwars-visualguide.com/assets/img/characters/${character}.jpg`;
  });

  return (
    <>
      <h1>Pilots</h1>
      <div className="container-pilots">
        {pilotImages.length>0? (pilotImages.map((image, index) => (
          <div className="pilot" key={index}>
            <img className="image-pilot" src={image} alt="pilot" />
            <h3>Name : {nameFromUse[index]}</h3>
          </div>
        ))):(<h3 className="pilot-not-found"> there are no pilots</h3>)}
      </div>
    </>
  );
};

export default Pilots;
