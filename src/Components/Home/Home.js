import c3po from "../../images/c3po.png";
import "./home.css";
const Home = () => {
  return (
    <>
      <h1>Welcome to the Epic Universe of Star Wars Starships!</h1>
      <h3>
        Enter a galaxy far, far away and embark on a thrilling journey through
        the iconic starships of the Star Wars saga. 
      </h3>
      <img className="c3po-image" src={c3po} alt="c3po" />
      
    </>
  );
};

export default Home;
