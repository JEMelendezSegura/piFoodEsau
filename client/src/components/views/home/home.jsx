import { useEffect } from "react";
import Cards from "../../cards/cards";
import SearchBar from "../../searchBar/searchBar";
import "../home/home.style.css";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";
import { useSelector } from "react-redux";


function Home (){
    const dispatch = useDispatch();
    // const recipes = useSelector((state)=>{state.recipes})



    useEffect(()=>{
        dispatch(getRecipesByName());
    }, [dispatch]);


    return (
        <div className="home">
            <SearchBar/>
            <Cards/>
        </div>
      );
}

export default Home;