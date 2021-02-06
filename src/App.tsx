import React from "react";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import Router from "./Router/Router";
function App() {
  return (
    <div className="App">
      <Layout>
      <Router/>
      </Layout>
    </div>
  );
}

export default App;
