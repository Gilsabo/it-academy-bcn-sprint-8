import { useEffect } from "react";
import { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import "./starshipDetail.css";

const StarshipDetail = () => {
  const { numberUrl } = useParams();
  const starship = useLoaderData();
  const [imageStarship, setImageStarship] = useState(null);
  console.log(starship);

  useEffect(() => {
    setImageStarship(
      "https://starwars-visualguide.com/assets/img/starships/" +
        numberUrl +
        ".jpg"
    );
  }, []);

  return (
    <>
      {imageStarship && <img className="image-starship" src={imageStarship} alt="fetched-starship" />}
      
      <div className="starship">
        <div className="container-left">
          <header className="name-starship"><h1> {starship.name}</h1></header>
          <p>Model: {starship.model} </p>
          <p>Cost in credits: {starship.cost_in_credits}</p>
          <p>Atmospheric speed: {starship.max_atmosphering_speed}</p>
          <p>MGLT: {starship.MGLT}</p>
          <p>Consumables: {starship.consumables}</p>
          <p>Passengers: {starship.passengers}</p>
        </div>
        <div className="container-right">
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Length: {starship.length}</p>
          <p>Crew: {starship.crew}</p>
          <p>Cargo Capacity: {starship.cargo_capacity}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
        </div>
      </div>
    </>
  );
};

export default StarshipDetail;

export const starshipDetailsLoader = async ({ params }) => {
  console.log(params);

  const { numberUrl } = params;

  const res = await fetch("https://swapi.py4e.com/api/starships/" + numberUrl);

  return res.json();
};
