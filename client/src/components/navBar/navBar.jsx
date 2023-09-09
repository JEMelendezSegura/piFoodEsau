import React from "react";
import { NavLink } from "react-router-dom";
import "../navBar/navBar.style.css";



class NavBar extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return <nav className="nav">
            <NavLink to={"/home"}>
                <span>Home</span>
            </NavLink>
        </nav>
    }
}

export default NavBar;
