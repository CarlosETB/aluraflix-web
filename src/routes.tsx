import React from "react";

// Native
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Pages
import Home from "pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={() => <div>Página 404</div>} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
