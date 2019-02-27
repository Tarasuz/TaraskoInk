import React from "react";

import MySkillsItem from "./MySkillsItem/MySkillsItem";
import classes from "./MySkills.css";

const skills = () => (
  <div className={`${classes.MySkills} page`}>
    <div className={classes.MySkillsItems}>
      <MySkillsItem
        skillHeading="JavaScript"
        skillSubHeading="OLOO, functional programming"
        FAPrefix="fab"
        skillIcon="js"
      >
        javascript
      </MySkillsItem>
      <MySkillsItem skillHeading="HTML5" skillSubHeading="Semantic HTML" FAPrefix="fab" skillIcon="html5">
        html
      </MySkillsItem>
      <MySkillsItem skillHeading="CSS3" skillSubHeading="Responsive design" FAPrefix="fab" skillIcon="css3">
        css
      </MySkillsItem>
      <MySkillsItem skillHeading="React" skillSubHeading="redux" FAPrefix="fab" skillIcon="react">
        React
      </MySkillsItem>
      <MySkillsItem
        skillHeading="Git, GitHub"
        skillSubHeading="Version control"
        FAPrefix="fa"
        skillIcon="code-branch"
      >
        git
      </MySkillsItem>
      <MySkillsItem
        skillHeading="English"
        skillSubHeading="Intermediate level"
        FAPrefix="fa"
        skillIcon="language"
      >
        english
      </MySkillsItem>
    </div>
  </div>
);

export default skills;
