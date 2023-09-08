import Cards from "../../cards/cards";
import SearchBar from "../../searchBar/searchBar";
import "../home/home.style.css";


function Home (){
    return (
        <div className="home">
            <SearchBar/>
            <Cards/>
        </div>
      );
}

export default Home;