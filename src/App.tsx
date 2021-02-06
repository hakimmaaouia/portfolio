import React from "react";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Router from "./Router/Router";
import Main from "./Container/Main/Main";
function App() {
  return (
    <div className="App">
      <Layout>
      <Main/>
      </Layout>
    </div>
  );
}

export default App;
