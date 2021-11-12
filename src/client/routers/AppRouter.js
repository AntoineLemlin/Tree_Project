import React, { useState } from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Login from "../components/Login";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";

const AppRouter = () => {
    const [user, setLoginUser] = useState({})
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                    <Route path="/login" element={<LoginScreen setLoginUser={setLoginUser}/>} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default AppRouter;
