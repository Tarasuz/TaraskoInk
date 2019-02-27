import React from "react";

// import globalClasses from "../../../global.css";
import Navigation from "./Navigation/Navigation";
import Logo from "../Logo/Logo";
import classes from "./Header.css";

const Header = () => {
  return (
    <div className={`${classes.Toolbar}`}>
      <div className={`${classes.ToolbarContainer}`}>
        <header className={classes.ToolbarContentWrapper}>
          <Logo link="/" />
          <Navigation />
        </header>
      </div>
    </div>
  );
};

export default Header;
