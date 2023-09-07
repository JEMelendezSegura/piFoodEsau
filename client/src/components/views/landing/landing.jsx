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
        <h1>Bienvenido a mi sitio web</h1>
        <h2>
          PIF FOOD JOSÉ ESAÚ MELÉNDEZ SEGURA
        </h2>
        <button onClick={handleClick}>Home</button>
      </div>
    </div>
  );
}

export default Landing;
