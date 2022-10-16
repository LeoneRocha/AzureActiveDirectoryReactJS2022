import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {

  auth: {
    clientId: "c2d2f042-3038-4d85-b0e1-a39ebc83e70a", // Client ID 
    authority: 'https://login.microsoftonline.com/e054ddc0-6326-41a4-b944-7bff0fd9cf07', // Tenant ID of the React.JS App Registration
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: function (level, message, containsPii) {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            console.error(message);
            return;
        }
      },
    },
  },
};

// Can be found in the API Permissions of the ASP.NET Web API
export const loginApiRequest = {
  scopes: ["api://c2d2f042-3038-4d85-b0e1-a39ebc83e70a/api.scope"],//RESTCLIENT
}; 