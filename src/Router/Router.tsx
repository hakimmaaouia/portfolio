import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../Container/Main/Main";
import ContactContainer from "../Container/Contact/ContactContainer";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Contact" component={ContactContainer} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
