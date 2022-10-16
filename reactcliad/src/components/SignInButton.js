import { useMsal } from "@azure/msal-react";
import { loginApiRequest } from "../configapp/authConfig";

export const SignInButton = function () {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginApiRequest)
      .then(response => {
        console.log(response.data);
      })
      .catch(function (e) {
        console.log(e);
      });
      console.log("aqui");    
  };
  return <button onClick={handleLogin}>Sign In</button>;
};