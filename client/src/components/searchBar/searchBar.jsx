import "../searchBar/searchBar.style.css";


function SearchBar ({handleChange, handleSubmit, refreshPage }){
    return (
        <div className="searchBar">
            <form onChange={handleChange}>
                <h1>Buscar recetas</h1>
                <p>Busqueda de recetas por nombre:</p>
                <input placeholder="nombre de receta" type="search"/>
                <button type="submit" onClick={handleSubmit}>Buscar</button>
            </form>
            <button onClick={refreshPage}>
            Borrar búsqueda
        </button>
        </div>       
        )
}

export default SearchBar;