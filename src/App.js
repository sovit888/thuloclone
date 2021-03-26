import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./route/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((value, index) => {
            return (
              <Route
                exact
                path={value.path}
                component={value.component}
                key={index}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
