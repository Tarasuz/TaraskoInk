import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import classes from "./Layout.css";
import Header from "../Header/Header";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import MySkills from "../../Pages/MySkills/MySkills";
import MyProjects from "../../Pages/MyProjects/MyProjects";
import Contacts from "../../Pages/Contacts/Contacts";

const layout = () => (
  <div className={classes.Layout}>
    <Header />
    <main>
      <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames="page"
                timeout={{
                  enter: 400,
                  exit: 400
                }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={AboutMe} />
                      <Route path="/MySkills" component={MySkills} />
                      <Route path="/MyProjects" component={MyProjects} />
                      <Route path="/ContactMe" component={Contacts} />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    </main>
  </div>
);

export default layout;
