import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

import { logContext } from "../stateManager";

import "./styles/Navbar.css";

const Navbar = () => {
    const stateManager = useContext(logContext);
    const { setLogState, logState } = stateManager;
    let buttonText;
    if (logState === "signup") {
        buttonText = "log in";
    }
    if (logState === "login") {
        buttonText = "sign up";
    }
    if (logState === "logged") {
        buttonText = "sign out";
    }

    const setState = () => {
        let newState;
        if (logState === "login") {
            newState = "signup";
        }
        if (logState === "signup") {
            newState = "login";
        }
        if (logState === "logged") {
            Cookie.remove("userToken");
            location.replace("/");
        }
        setLogState(newState);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://pngimg.com/uploads/letter_r/letter_r_PNG93907.png"
                        alt="image logo"
                        width="30"
                        height="24"
                    />
                    eadingme
                </Link>
                <Link className="navbar-brand btn" to="/docs">
                    Docs
                </Link>
                <div className="me-auto">
                    <Link
                        to={logState === "logged" ? "/" : "/enter"}
                        onClick={setState}
                        className="btn navbar-brand"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
