import "../card/card.style.css";
import { Link } from "react-router-dom";


function Card (props){

    const {image, title, diets} = props.recipe;
return (
    <div className="card">
        <h2>{title}</h2>
        <img src={image} alt="Foto de la receta"></img>
        <p>{diets}</p>
        <Link to={"/detail"}>
        <p>Detalle</p>
        </Link>
    </div>
)

}

export default Card;