import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.css";

const navItem = ({ children, link, exact }) => {
  return (
    <li className={classes.NavItem}>
      <NavLink
        to={{
          pathname: link
        }}
        className={classes.NavLink}
        activeClassName={classes.activeLink}
        exact={exact}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default navItem;
