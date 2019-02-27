import React from "react";


import AboutMePhoto from "../AboutMePhoto/AboutMePhoto";

import globalClasses from "../../../../index.css";
import classes from "./AboutMePersonalInfo.css";

const aboutMePersonalInfo = () => (
  <div className={`${classes.PersonalInfo} ${globalClasses["col-7"]}`}>
    <div>
      <h1>Taras Kozubov</h1>
      <h3>
        I'm front-end developer, who loves technology, and learning new things.
      </h3>
    </div>
    <div className={classes.GeneralInfo}>
      <div className={classes.GeneralInfoList}>
        <h2>General info</h2>
        <ul>
          <li>
            Date of Birth<span>18 dec, 1996</span>
          </li>
          <li>
            Education
            <span>Radio Engineering degree</span>
          </li>
          <li>
            E-mail <span>taraskozub19@gmail.com</span>
          </li>
          <li>
            Phone <span>0966797052</span>
          </li>
        </ul>
        <div className={classes.ButtonWrapper}>
          <button className={classes.DownloadCVButton}>Download CV</button>
        </div>
      </div>
      <div className={classes.PersonalInfoPhoto}>
        <AboutMePhoto />
      </div>
    </div>
  </div>
);

export default aboutMePersonalInfo;
