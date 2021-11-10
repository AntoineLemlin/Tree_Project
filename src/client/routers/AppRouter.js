import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";

const AppRouter = () => {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<MapScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </div>
        </HashRouter>
    );
};

export default AppRouter;
