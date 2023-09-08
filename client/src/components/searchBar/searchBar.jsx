import "../searchBar/searchBar.style.css";

function SearchBar (){
    return (
        <div className="searchBar">
            <h1>Buscar recetas</h1>
            <p>Busqueda de recetas por nombre:</p>
            <input placeholder="nombre de receta" type="search"/>
            <button>Buscar</button>
        </div>
    )
}

export default SearchBar;