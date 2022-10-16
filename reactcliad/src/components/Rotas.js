import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Employee } from "../components/Employee"; 
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Board from "../pages/Board";

export function Rotas() {

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <UnauthenticatedTemplate>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <li>
            <Link to="/Board">Board</Link>
          </li>

          <li>
            <Link to="/Logout">Logout</Link>
          </li>
        </AuthenticatedTemplate>
      </ul>
      <Switch>
        <Route exact path="/">

          <Home />
        </Route>
        <Route path="/Login">
          <UnauthenticatedTemplate>
            <Login />
          </UnauthenticatedTemplate>
        </Route>
        <Route path="/Logout">
          <AuthenticatedTemplate>
            <Logout />
          </AuthenticatedTemplate>
        </Route>
        <Route path="/Board">
          <AuthenticatedTemplate>
            <Board />
            <Employee />
          </AuthenticatedTemplate>
        </Route>
      </Switch>
    </div>
  );
}