import * as types from './actionTypes';

// Actions  
//import { authenticate } from '../api/mockApi';
import { azure_authenticate } from "../../api/azureadlib";

export function loginAzure_Success(retorno) { 
  return { 
    type: types.LOGIN_SUCCESS, 
    info: "Loged user",
    payload: retorno 
   };
}

export function logoutAzure() {
  return {
    type: types.LOGOUT,
    info: "Logout the current user",
  }
}

export function loginAzure_Fail(retorno) {
  return { 
    type: types.LOGIN_FAIL
   };
}
 
export function loginazure({ instanciaMsal }) {
  
  return function (dispatch) {
    return azure_authenticate(instanciaMsal).then(response => {
      dispatch(loginAzure_Success(response.data));
    });
  };
}
 