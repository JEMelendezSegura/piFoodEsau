import { useState } from "react";
import Card from "../card/card";
import "../cards/cards.style.css";
import { useSelector } from "react-redux";

function Cards() {
  const recipes = useSelector((state) => state.recipes);
  const recipesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const currentRecipieOnPage = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  function nexHandler() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevHandler() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <div>
        <h1>Página: {currentPage}</h1>
        <button onClick={prevHandler}>Prev</button>
        <button onClick={nexHandler}>Next</button>

        <h2>Recetas</h2>
      </div>
      <div className="cards">
        {currentRecipieOnPage.map(
          (
            recipe //!cambie los recipes por cards para renderizar las 9 que quiero
          ) => (
            <Card recipe={recipe} />
          )
        )}
      </div>
    </div>
  );
}

export default Cards;

/* <h1>Página: {currentPage} </h1>
<button onClick={prevHandler}>Prev</button>
<button onClick={nextHandler}>Next</button> */
