import React, { useState } from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Login from "../components/Login";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";

const AppRouter = () => {
   
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default AppRouter;
