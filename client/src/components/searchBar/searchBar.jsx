import "../searchBar/searchBar.style.css";

function SearchBar ({handleChange, handleSubmit}){
    return (
        <div className="searchBar">
            <form onChange={handleChange}>
                <h1>Buscar recetas</h1>
                <p>Busqueda de recetas por nombre:</p>
                <input placeholder="nombre de receta" type="search"/>
                <button type="submit" onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
}

export default SearchBar;