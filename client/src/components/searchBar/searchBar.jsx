import "../searchBar/searchBar.style.css";


function SearchBar ({handleChange, handleSubmit, refreshPage, handleOrder }){
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
                <option value="">Ordenar por:</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                </select>
            </div>

        </div>       
        )
}

export default SearchBar;