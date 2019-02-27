import React from "react";

import NavItem from "./NavItem/NavItem";
import ContactsLinks from "../ContactsLinks/ContactsLinks";
import classes from "./Navigation.css";

const navItems = () => {
  return (
    <nav className={`${classes.Navigation}`}>
      <ul className={classes.NavList}>
        <NavItem link="/" exact={true}>
          About Me
        </NavItem>
        <NavItem link="/MySkills">My Skills</NavItem>
        <NavItem link="/MyProjects">My Works</NavItem>
        <NavItem link="/ContactMe">Contact Me</NavItem>
        <ContactsLinks />
      </ul>
    </nav>
  );
};

export default navItems;
