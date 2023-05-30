import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import "./starshipDetail.css";
import Pilots from "../Pilots/Pilots";
import Films from "../Films/Films";
import forofor from "../../images/darth-vader.jpg";

const StarshipDetail = () => {
  const { numberUrl } = useParams();
  const starship = useLoaderData();
  const [imageStarship, setImageStarship] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageStarship(
      "https://starwars-visualguide.com/assets/img/starships/" +
        numberUrl +
        ".jpg"
    );
  }, [numberUrl]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      {imageStarship && !imageError ? (
        <img
          className="image-starship"
          src={imageStarship}
          alt="fetched-starship"
          onError={handleImageError}
        />
      ) : (
        <img className="image-starship" src={forofor} alt="fetched-starship" />
      )}

      <div className="starship">
        {/* Rest of the component */}
      </div>
      <Pilots starship={starship} />
      <Films starship={starship} />
    </>
  );
};

export default StarshipDetail;

export const starshipDetailsLoader = async ({ params }) => {
  const { numberUrl } = params;
  const res = await fetch("https://swapi.py4e.com/api/starships/" + numberUrl);
  return res.json();
};
