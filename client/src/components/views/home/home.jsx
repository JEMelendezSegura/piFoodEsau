import { useEffect, useState } from "react";
import Cards from "../../cards/cards";
import SearchBar from "../../searchBar/searchBar";
import "../home/home.style.css";
import { useDispatch } from "react-redux";
import { getRecipesByName, orderRecipes } from "../../redux/actions";
import { useSelector } from "react-redux";


function Home (){
    const dispatch = useDispatch();
    const recipes = useSelector((state)=>state.recipes);
    const [searchRecipe, setSearchRecipe] = useState("");
    const refreshPage = () => {
        window.location.reload();
      };
    
    function handleChange(e){
        e.preventDefault();
        setSearchRecipe(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getRecipesByName(searchRecipe));
    }

    useEffect(()=>{
        dispatch(getRecipesByName("")); //!mando sting vacio para obtener todo DB y API y setea las recipes
    }, [dispatch]);

    function handleOrder(e){
        dispatch(orderRecipes(e.target.value));
    }

    return (
        <div className="home">
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} refreshPage={refreshPage} handleOrder={handleOrder}/>
            <Cards recipes ={recipes}/>
        </div>
      );
}

export default Home;