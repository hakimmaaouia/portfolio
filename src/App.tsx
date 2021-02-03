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
function App() {
  return (
    <div className="App">
      <Layout>
        <Certif />
      </Layout>
    </div>
  );
}

export default App;
