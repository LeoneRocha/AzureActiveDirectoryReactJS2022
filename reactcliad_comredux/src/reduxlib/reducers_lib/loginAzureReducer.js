import * as types from '../actions/actionTypes';
import initialState from './initialState';


// Reducers
export function loginAzureReducer(prevState = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...prevState,
        tokenAAD: localStorage.getItem('Authorization_Token'),
        responseData: action.payload,
        isLogged: true,
      }
    case types.LOGOUT:
      return {
        ...prevState,
        tokenAAD: '' ,
        responseData: null,
        isLogged: false
      }
    default:
      return prevState
  }
}
/*
export default function loginAzureReducer(state = initialState.login, action) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, { tokenAAD: '' });
    case types.LOGOUT:
      return Object.assign({}, state, { tokenAAD: '' , isLogged : false } );
    case types.LOGIN_ERROR:
      return Object.assign({}, state, { tokenAAD: '' , isLogged : false});
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { tokenAAD: localStorage.getItem('Authorization_Token') , isLogged : true });
    default:
      return state;
  }
}*/