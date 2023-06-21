import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import SideBar from "./components/SideBar";
import Login from "./components/Login";

function App() {

    return (
        <div className="App">
            <SideBar />
            <div className="cont">
                <div className="main-top">
                    <h2 className="sub-logo">CRYPTO BBOLLACK</h2>
                    <Login />
                </div>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
