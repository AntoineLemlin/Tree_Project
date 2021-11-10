import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";

const LoginScreen = () => {
    return (
        <div className={"login-screen"}>
            <Header />
            <main>
                <Login />
            </main>
        </div>
    );
};

export default LoginScreen;
