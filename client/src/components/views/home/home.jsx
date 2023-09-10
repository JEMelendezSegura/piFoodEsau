import { useEffect, useState } from "react";
import Cards from "../../cards/cards";
import SearchBar from "../../searchBar/searchBar";
import "../home/home.style.css";
import { useDispatch } from "react-redux";
import {
  getRecipesByName,
  orderRecipes,
  orderRecipesbyScore,
  filterRecipesFromApi,
  filterRecipesByDiet,
  getAllDiets,
} from "../../redux/actions";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);
  const [searchRecipe, setSearchRecipe] = useState("");
  const refreshPage = () => {
    window.location.reload();
  };
  console.log(diets);

  function handleChange(e) {
    e.preventDefault();
    setSearchRecipe(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getRecipesByName(searchRecipe));
  }

  useEffect(() => {
    dispatch(getRecipesByName("")); //!mando sting vacio para obtener todo DB y API y setea las recipes
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getAllDiets());
  }, [dispatch]);

  function handleOrder(e) {
    dispatch(orderRecipes(e.target.value));
  }

  function handleOrderByScore(e) {
    dispatch(orderRecipesbyScore(e.target.value));
  }

  function handleFilterByApi(e) {
    dispatch(filterRecipesFromApi(e.target.value));
  }

  function handleFilterByDiet(e){
    dispatch(filterRecipesByDiet(e.target.value));
  }

  return (
    <div className="home">
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        refreshPage={refreshPage}
        handleOrder={handleOrder}
        handleOrderByScore={handleOrderByScore}
        handleFilterByApi={handleFilterByApi}
        handleFilterByDiet={handleFilterByDiet}
        diets={diets}
      />
      <Cards recipes={recipes} />
    </div>
  );
}

export default Home;
