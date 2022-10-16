import React from "react";
import { SignInButton } from "../components/SignInButton";

function Login() {
    return (
        //checa se esta logado e redireciona via push history
        //quando o azure eutenticar ai vamos chamar o back end e o retorno do backend vamos dar o push "que existe"
        //logia quando ja tiver logado pela azure
        <div className="Login">
            <h1 className="title is-4">
                Login page!
            </h1>
            <SignInButton />
        </div>
    );
}
export default Login;