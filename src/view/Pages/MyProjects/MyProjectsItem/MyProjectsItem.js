import React from "react";

import classes from "./MyProjectsItem.css";

const myProjectsItem = ({ children, project }) => (
  <div className={classes.ProjectsItem + " " + classes[project]}>
    {children}
  </div>
);

export default myProjectsItem;
