import React from "react";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Router from "./Router/Router";
import Herobody from "./Component/Hero-body/Herobody";
import Description from "./Component/Description/Description";
import Skills from "./Component/skills/Skills";
import Work from "./Component/Works/Work";
import Callout from "./Component/Callout/Callout";
import Certif from "./Component/Certif/Certif";
import Contact from "./Component/Contact/Contact"
function App() {
  return (
    <div className="App">
      <Layout>
      <Contact/>
      </Layout>
    </div>
  );
}

export default App;
