import React from "react";
import { NavLink as NavLinkComp } from "react-router-dom";
import "../navLink/navLink.style.css";

function NavLink({to, children, ...props}) {
  return <NavLinkComp
    {...props}
    to={to}
    className={({ isActive })=> ( isActive ? 'isActive' : undefined ) }
  >{children}</NavLinkComp>;
}

export default NavLink;
