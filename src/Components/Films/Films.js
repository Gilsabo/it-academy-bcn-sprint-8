import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./films.css"

const Films = ({ starship }) => {
  console.log(starship);
  const [nameFromUse, setNameFromUse] = useState([]);

  useEffect(() => {
    const fetchFilmNames = async () => {
      try {
        const promises = starship.films.map((item) => axios.get(item));
        const responses = await Promise.all(promises);
        const names = responses.map((response) => response.data.title);

        console.log(names);

        setNameFromUse(names);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFilmNames();
  }, [starship.films]);

  const urlNumberCharacter = starship.films.map((pilot) => {
    const regex = /\/(\d+)\//;
    const character = pilot.match(regex);
    return parseInt(character[1]);
  });

  const pilotImages = urlNumberCharacter.map((character) => {
    return `https://starwars-visualguide.com/assets/img/films/${character}.jpg`;
  });

  return (
    <>
      <h1>Films</h1>
      <div className="container-films">
        {pilotImages.map((image, index) => (
          <div className="films" key={index}>
            <img className="image-films" src={image} alt="pilot" />
            <h3>Name : {nameFromUse[index]}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Films;
