import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./MyProjects.css";
import MyProjectsItem from "./MyProjectsItem/MyProjectsItem";

const myProjects = () => {
  const projects = [
    {
      projectImg: "portfolioProject",
      projectHeader: "Portfolio",
      projectDescription: "Personal portfolio to show off my skills.",
      projectLinks: { github: "/", demo: "/" },
      techStack: ["react"]
    },
    {
      projectImg: "YPSProject",
      projectHeader: "YPS",
      projectDescription:
        "Your personal schedule: application that allows you to schedule your week efficiently.",
      projectLinks: {
        github: "https://github.com/Tarasuz/YPS",
        demo: "https://your-personal-schedule.firebaseapp.com/"
      },
      techStack: ["react", "typescript", "redux"]
    },
    {
      projectImg: "marioPlanProject",
      projectHeader: "Mario Plan",
      projectDescription: "Share your ideas with the world.",
      projectLinks: {
        github: "https://github.com/Tarasuz/Mario-Plan",
        demo: "https://net-ninja-marioplan-4b1ad.firebaseapp.com/"
      },
      techStack: ["react", "redux"]
    },
    {
      projectImg: "burgerBuilder",
      projectHeader: "Burger Builder",
      projectDescription: "Order burger that you build yourself.",
      projectLinks: {
        github: "https://github.com/Tarasuz/Burger-Builder/",
        demo: "https://burger-builder-d6b3b.firebaseapp.com/"
      },
      techStack: ["react", "redux"]
    }
  ];

  const projectsList = projects.map((project, i) => {
    return (
      <MyProjectsItem key={project.projectImg} project={`Projects${i + 1}`}>
        <div className={classes[project.projectImg]} />
        <div className={classes.projectContent}>
          <h2 className={classes.projectHeader}>{project.projectHeader}</h2>
          <p className={classes.projectDescription}>
            {project.projectDescription}
          </p>
          <div className={classes.projectCollaterals}>
            <ul className={classes.projectLinks}>
              <li>
                <a
                  className={classes.projectLink}
                  href={project.projectLinks.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </a>
              </li>
              <li>
                <a
                  className={classes.projectLink}
                  href={project.projectLinks.demo}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon="globe" size="2x" />
                </a>
              </li>
            </ul>
            <ul className={classes.projectsTechStack}>
              {project.techStack.map(tech => (
                <li className={classes.projectsTechStackItem}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </MyProjectsItem>
    );
  });
  return (
    <div className={`${classes.MyProjects} page`}>
      <div className={classes.MyProjectsList}>{projectsList}</div>
    </div>
  );
};

export default myProjects;
