import React, { useState, createContext } from "react";
import io from "socket.io-client";

const logContext = createContext();

const Context = ({ children }) => {
    const [logState, setLogState] = useState("signup");

    const defaultContext = {
        logState,
        setLogState: (newState) => {
            setLogState(newState);
        },
        socket: io("https://readingme-ale31jo.herokuapp.com"),
    };

    return (
        <logContext.Provider value={defaultContext}>
            {children}
        </logContext.Provider>
    );
};

export { Context, logContext };
