import React, {useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginScreen = () => {
    const [login, setLogin] = useState(true)
    return (
        <div className={"login-screen"}>
            <Header />
            <main>
                {login ? <Login setLogin={setLogin}/> : <Register setLogin={setLogin}/> }
            </main>
        </div>
    );
};

export default LoginScreen;
