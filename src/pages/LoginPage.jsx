import React, { useState, useContext } from "react";

import { logContext } from "../stateManager";
import Login from "../components/Login";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const { logState, setLogState } = useContext(logContext);

    let url;
    if (logState === "signup") {
        url = "users/create";
    }
    if (logState === "login") {
        url = "auth/login";
    }

    const submitForm = async (e) => {
        const formdata = new FormData(e.target);
        const options = {
            method: "POST",
            body: formdata,
            credentials: "include",
        };
        try {
            const res = await fetch(
                `https://readingme.onrender.com/api/${url}`,
                options
            );
            if (logState === "signup") {
                await fetch(
                    "https://readingme.onrender.com/api/auth/login",
                    options
                );
            }
            if (!res.ok) {
                alert("Incorrect password or username");
            } else {
                setLogState("logged");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Login submitForm={submitForm} />
            {logState === "logged" ? (
                <Navigate to="/" state={{ logState }} replace></Navigate>
            ) : null}
        </div>
    );
};

export default LoginPage;
