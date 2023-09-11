import React, { useState } from 'react';
import "../searchBar/searchBar.style.css";


function SearchBar ({handleChange, handleSubmit, refreshPage, handleOrder, handleOrderByScore, handleFilterByApi, handleFilterByDiet, diets}){
    const [inputValue, setInputValue] = useState('');
    const handleInputReset = () => {
        setInputValue('');
      };

    return (
        <div className="searchBar">
            <form className='searchBar form' onChange={handleChange}>
                <h1 className='searchBar h1'>Buscador de recetas</h1>
                <input className='searchBar input' placeholder="Ingresa una receta o ingrediente" type="search" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button className='searchBar button' type="submit" onClick={(e) => { handleSubmit(e); handleInputReset(); }}  >Buscar</button>
                <button className='searchBar button' onClick={refreshPage}>Borrar búsqueda/filtro</button>
            </form>
            <div>
                <select className='searchBar select' onChange={handleOrder}>
                <option value="">Ordenar por nombre alfabético: </option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                </select>
            </div>
            <div>
                <select className='searchBar select' onChange={handleOrderByScore}>
                <option value="">Ordenar por health score: </option>
                <option value="A">Mayor</option>
                <option value="D">Menor</option>
                </select>
            </div>
            <div>
                <select className='searchBar select' onChange={handleFilterByApi}>
                <option value="">Filtrar recetas por origen: </option>
                <option value="API">API</option>
                <option value="DB">DB</option>
                </select>
            </div>
            <div>
                <select className='searchBar select' onChange={handleFilterByDiet}>
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