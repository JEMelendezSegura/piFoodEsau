import "../searchBar/searchBar.style.css";


function SearchBar ({handleChange, handleSubmit, refreshPage, handleOrder, handleOrderByScore }){
    return (
        <div className="searchBar">
            <form onChange={handleChange}>
                <h1>Buscar recetas</h1>
                <p>Busqueda de recetas por nombre:</p>
                <input placeholder="nombre de receta" type="search"/>
                <button type="submit" onClick={handleSubmit}>Buscar</button>
                <button onClick={refreshPage}>Borrar búsqueda</button>
            </form>
            <div>
                <select onChange={handleOrder}>
                <option value="">Ordenar por nombre alfabético:</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                </select>
            </div>
            <div>
                <select onChange={handleOrderByScore}>
                <option value="">Ordenar por health score</option>
                <option value="A">Mayor</option>
                <option value="D">Menor</option>
                </select>
            </div>


        </div>       
        )
}

export default SearchBar;