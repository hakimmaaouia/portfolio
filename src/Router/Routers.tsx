import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Layout = React.lazy(() => import("../Component/Layout/Layout"));
const Main = React.lazy(() => import("../Container/Main/Main"));
const ContactContainer = React.lazy(() => import("../Container/Contact/ContactContainer"));
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
