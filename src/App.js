import React from "react";
import "./App.css";
import Login from "./components/login";
import { HashRouter, Switch, Route } from "react-router-dom";
import RegisterUser from "./components/register";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
