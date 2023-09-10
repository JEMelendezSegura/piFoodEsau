import React, { useState } from 'react';
import "../searchBar/searchBar.style.css";


function SearchBar ({handleChange, handleSubmit, refreshPage, handleOrder, handleOrderByScore, handleFilterByApi, handleFilterByDiet, diets}){
    const [inputValue, setInputValue] = useState('');
    const handleInputReset = () => {
        setInputValue('');
      };

    return (
        <div className="searchBar">
            <form onChange={handleChange}>
                <h1>Buscar recetas</h1>
                <p>Busqueda de recetas por nombre: </p>
                <input placeholder="nombre de receta" type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit" onClick={(e) => { handleSubmit(e); handleInputReset(); }}  >Buscar</button>
                <button onClick={refreshPage}>Borrar búsqueda/filtro</button>
            </form>
            <div>
                <select onChange={handleOrder}>
                <option value="">Ordenar por nombre alfabético: </option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                </select>
            </div>
            <div>
                <select onChange={handleOrderByScore}>
                <option value="">Ordenar por health score: </option>
                <option value="A">Mayor</option>
                <option value="D">Menor</option>
                </select>
            </div>
            <div>
                <select onChange={handleFilterByApi}>
                <option value="">Filtrar recetas por origen: </option>
                <option value="API">API</option>
                <option value="DB">DB</option>
                </select>
            </div>
            <div>
                <select onChange={handleFilterByApi}>
                <option value="">Filtrar recetas por dieta: </option>
                {diets.map((diet)=>
                <option value = {diet.name}>{diet.name}</option>
                )}
                </select>
            </div>


        </div>       
        )
}

export default SearchBar;