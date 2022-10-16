import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./configapp/authConfig"; 
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router } from "react-router-dom";
const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(

  <Router>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </Router>,
  document.getElementById("root")
); 