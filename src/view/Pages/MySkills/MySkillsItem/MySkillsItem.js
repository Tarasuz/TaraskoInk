import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./MySkillsItem.css";

const skillsItem = ({ skillIcon, FAPrefix, skillHeading, skillSubHeading }) => (
  <div className={classes.SkillItem}>
    <FontAwesomeIcon icon={[`${FAPrefix}`, `${skillIcon}`]} size="10x" />
    <h3 className={classes.SkillHeading}>{skillHeading}</h3>
    <h4 className={classes.SkillSubHeading}>{skillSubHeading}</h4>
  </div>
);

export default skillsItem;
