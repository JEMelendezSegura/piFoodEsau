import "../landing/landing.style.css";
import { useNavigate } from "react-router-dom";




function Landing() {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/home");
  }

  return (
    <div className="homepage">
      <div className="transparent-box">
        <h1>DIETAS Y RECETAS</h1>
        <p>by</p>
        <h2>
          JOSÉ ESAÚ MELÉNDEZ SEGURA
        </h2>
        <button onClick={handleClick}>Home</button>
      </div>
    </div>
  );
}

export default Landing;
