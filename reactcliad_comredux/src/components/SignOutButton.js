import { useMsal } from "@azure/msal-react";

export const SignOutButton = function ()  {
  const { instance } = useMsal();

  const handleLogout = function ()  {

    localStorage.removeItem('Authorization_Token');
    // remove all
    localStorage.clear();

    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };
  return <button onClick={handleLogout}>Sign Out</button>;
};