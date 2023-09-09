import "../card/card.style.css";
import { Link } from "react-router-dom";


function Card (props){

    const {image, title, diets, id} = props.recipe;
return (
    <div className="card">
        <h2>{title}</h2>
        <Link to={`/detail/${id}`}>
        <img src={image} alt="Foto de la receta"></img>
        </Link>
        <p>{diets}</p>
    </div>
)

}

export default Card;