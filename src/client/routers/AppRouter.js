import React, {useState} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Login from "../components/Login";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";

const AppRouter = () => {
   const [session, setSession] = useState("")
    return (
        <HashRouter>
            <div>
                    {session === "" ? <LoginScreen setSession={setSession}/> : <MapScreen/>}
            </div>
        </HashRouter>
    );
};

export default AppRouter;
