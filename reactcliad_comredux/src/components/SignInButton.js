import { useMsal } from "@azure/msal-react";
//import { loginApiRequest } from "../configapp/authConfig";
//import { azure_authenticate } from "../api/azureadlib";
//import {loginAzureStore} from "../reduxlib/stores_lib"
import {loginAzureReducer  } from  "../reduxlib/reducers_lib/loginAzureReducer"
import { loginAzureActions }  from  "../reduxlib/actions_lib/loginAzureActions"
import {redux} from 'redux';


export const loginAzureStore = redux.createStore

const lastore = loginAzureStore(loginAzureReducer)


export const SignInButton = function () {
  const { instance } = useMsal();

  const handleLogin = () => {  
      //azure_authenticate(instance);
      lastore.dispatch(loginAzureActions.loginazure(instance));
  };
  return <button onClick={handleLogin}>Sign In</button>;
};