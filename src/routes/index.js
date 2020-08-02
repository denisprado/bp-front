import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import Page from "../pages/Page";
import history from '../history';

const Routes = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Page}></Route>
        <Route path="/:path" component={Page}></Route>
      </Switch >
    </Router >
  )
};

export default Routes;
