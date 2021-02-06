import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../Container/Main/Main";
import ContactContainer from "../Container/Contact/ContactContainer";
import Layout from "../Component/Layout/Layout";
const Routers = () => {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Contact" component={ContactContainer} />
      </Switch>
      </Layout>
    </Router>
  );
};
export default Routers;
