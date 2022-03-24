import React, { useState, createContext } from "react";

const logContext = createContext();

const Context = ({ children }) => {
    const [logState, setLogState] = useState("signup");

    const defaultContext = {
        logState,
        setLogState: (newState) => {
            setLogState(newState);
        },
    };

    return (
        <logContext.Provider value={defaultContext}>
            {children}
        </logContext.Provider>
    );
};

export { Context, logContext };
