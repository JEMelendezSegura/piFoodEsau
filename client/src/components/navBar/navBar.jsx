import React from "react";
import { NavLink } from "react-router-dom";
import "../navBar/navBar.style.css";



class NavBar extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return <nav className="container">
            <NavLink to={"/home"}>
                <button>Home</button>
            </NavLink>
            <NavLink to={"/"}>
                <button >Landing</button>
            </NavLink>
        </nav>
    }
}

export default NavBar;
