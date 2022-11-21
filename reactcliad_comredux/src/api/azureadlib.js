
import { loginApiRequest } from "../configapp/authConfig";

export function azure_authenticate (instanciaMsal) {
    console.log("azure_authenticate - inicio");  
    instanciaMsal.loginRedirect(loginApiRequest)
      .then(response => {
        console.log(response.data);
      })
      .catch(function (e) {
        console.log(e);
      });
      console.log("azure_authenticate - fim"); 
};