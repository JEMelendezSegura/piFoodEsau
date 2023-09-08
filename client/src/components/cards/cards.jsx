import Card from "../card/card";
import "../cards/cards.style.css";


function Cards (props){
    const recipes = props.recipes;


    return (
        <div className="cards">
            {recipes.map((recipe)=>(
                <Card recipe = {recipe}/>
            ))}
    
        </div>
    )
}

export default Cards;