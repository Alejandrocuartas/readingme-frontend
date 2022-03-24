import React, { useContext, useState } from "react";

import { logContext } from "../stateManager";

const PassConfirmInput = ({ setConfirmPass }) => {
    return (
        <div>
            <div className="form-outline mb-4">
                <input
                    type="password"
                    id="typePasswordX-3"
                    className="form-control form-control-lg"
                    placeholder="Confirm password"
                    name="confirm"
                    autoComplete="true"
                    onChange={(e) => setConfirmPass(e.target.value)}
                />
                <label className="form-label" htmlFor="typePasswordX-2"></label>
            </div>
        </div>
    );
};

const Login = ({ submitForm }) => {
    const [confirmPass, setConfirmPass] = useState(undefined);
    const [pass, setPass] = useState("");
    const logStateManager = useContext(logContext);
    const { logState } = logStateManager;

    let formText;
    if (logState === "login") {
        formText = "Login";
    }
    if (logState === "signup") {
        formText = "Sign up";
    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div
                            className="card shadow-2-strong"
                            style={{ borderRadius: "1rem" }}
                        >
                            <div className="card-body p-5 text-center">
                                <form
                                    className="form-group"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        console.log;
                                        if (logState === "login") {
                                            setConfirmPass(undefined);
                                        }
                                        if (!confirmPass) {
                                            submitForm(e);
                                        } else if (
                                            pass === confirmPass &&
                                            logState === "signup"
                                        ) {
                                            submitForm(e);
                                        } else {
                                            alert("Password does not match");
                                        }
                                    }}
                                >
                                    <h3 className="mb-5">{formText}</h3>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="username"
                                            id="typeEmailX-2"
                                            className="form-control form-control-lg"
                                            placeholder="Username"
                                            name="username"
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="typeEmailX-2"
                                        ></label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="typePasswordX-2"
                                            className="form-control form-control-lg"
                                            placeholder="Password"
                                            name="password"
                                            autoComplete="true"
                                            onChange={(e) =>
                                                setPass(e.target.value)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="typePasswordX-2"
                                        ></label>
                                        {logState === "signup" ? (
                                            <PassConfirmInput
                                                setConfirmPass={setConfirmPass}
                                            />
                                        ) : null}
                                    </div>

                                    <button
                                        className="btn btn-primary btn-lg btn-block"
                                        type="submit"
                                    >
                                        {formText}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
