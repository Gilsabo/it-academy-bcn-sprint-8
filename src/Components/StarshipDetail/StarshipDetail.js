import {useParams, useLoaderData} from "react-router-dom"

const StarshipDetail = () => {
    const {index} = useParams()
    const starship = useLoaderData()
    console.log(starship.results[index])
    


    return ( 
        <div className="starship">
            <h2>hola {index} {starship.results[index].name}</h2>
            
        </div>
     );
}
 
export default StarshipDetail;

export const starshipDetailsLoader = async ({params}) => {
const {index} = params

const res= await fetch ("https://swapi.py4e.com/api/starships/" )

return res.json()
}