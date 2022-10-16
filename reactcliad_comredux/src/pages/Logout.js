import React from "react";
import { SignOutButton } from "../components/SignOutButton";

function Logout() {
    return (

        <div className="Logout">

            <h1 className="title is-4">
                Logout page!
            </h1>
            <SignOutButton />
        </div>

    );
} export default Logout;