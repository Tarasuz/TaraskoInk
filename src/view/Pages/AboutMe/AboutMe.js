import React from "react";

import globalClasses from "../../../index.css";
import classes from "./AboutMe.css";
import AboutMePhoto from "./AboutMePhoto/AboutMePhoto";

import AboutMePersonalInfo from "./AboutMePersonalInfo/AboutMePersonalInfo";

const aboutMe = () => {
  return (
    <div className={`${classes.AboutMe} page`}>
      <AboutMePersonalInfo />
      <div className={`${classes.AboutMePhoto}  ${globalClasses["col-4"]}`}>
        <AboutMePhoto />
      </div>
    </div>
  );
};

export default aboutMe;
