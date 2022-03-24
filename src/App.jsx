import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/enter" element={<LoginPage />}></Route>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
