import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.css";
import logoImg from "../../../assets/logo.png";

const logo = ({ link }) => {
  return (
    <div className={classes.Logo}>
      <Link to={link}>
        <img src={logoImg} alt="logo" />
      </Link>
    </div>
  );
};

export default logo;
