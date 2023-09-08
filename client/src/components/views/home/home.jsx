import { useEffect, useState } from "react";
import Cards from "../../cards/cards";
import SearchBar from "../../searchBar/searchBar";
import "../home/home.style.css";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";
import { useSelector } from "react-redux";


function Home (){
    const dispatch = useDispatch();
    const recipes = useSelector((state)=>state.recipes);
    const [searchRecipe, setSearchRecipe] = useState("");

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


    return (
        <div className="home">
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Cards recipes ={recipes}/>
        </div>
      );
}

export default Home;