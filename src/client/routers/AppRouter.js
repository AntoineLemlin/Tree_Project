import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";

const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={MapScreen} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;