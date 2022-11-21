import axios from "axios";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginApiRequest } from "./authConfig"

export const GetTokenAcess = async function () {

    let responseTokenStorage = localStorage.getItem('Authorization_Token');
    //if (responseTokenStorage == null) {
    const msalInstance = new PublicClientApplication(msalConfig);

    const account = msalInstance.getAllAccounts()[0];
    const msalResponse = await msalInstance.acquireTokenSilent({
        ...loginApiRequest,
        account: account,
    });
    let responseToken = `Bearer ${msalResponse.accessToken}`;
    console.log("Recuperou o token do azure");

    axios.defaults.headers.common['Authorization'] = responseToken

    localStorage.setItem('Authorization_Token', responseToken);

    responseTokenStorage = responseToken;

    return responseTokenStorage;

    /*} else {
        console.log("uso o token do storage");
        let responseToken = responseTokenStorage;
        return responseToken;
    }
    */
};