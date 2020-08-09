import React from "react";

// Native
import { Route, Switch, BrowserRouter } from "react-router-dom";

// Pages
import Home from "pages/Home";
import NewVideo from "pages/NewVideo";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={NewVideo} path="/cadastro/video" exact />
        <Route component={() => <div>Página 404</div>} path="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
