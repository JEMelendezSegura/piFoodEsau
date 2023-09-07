import React from "react";
import { NavLink as NavLinkComp } from "react-router-dom";

function NavLink({to, children, ...props}) {
  return <NavLinkComp
    {...props}
    to={to}
  >{children}</NavLinkComp>;
}

export default NavLink;
