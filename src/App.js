import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLanguage, faCodeBranch, faGlobe } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import Layout from "./view/components/Layout/Layout";

library.add(fab, faLanguage, faCodeBranch, faGlobe);

const supportsHistory = "pushState" in window.history;

class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
