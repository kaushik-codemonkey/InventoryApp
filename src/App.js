import React from "react";
import "./App.css";
import Login from "./components/login";
import { HashRouter, Switch, Route } from "react-router-dom";
import RegisterUser from "./components/register";
import InventoryHome from "./components/homepage";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>
        <Route path="/home">
          <InventoryHome />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
