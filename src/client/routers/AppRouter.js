import React, {useState, useEffect} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";
import axios from "axios";

const AppRouter = () => {
   const [session, setSession] = useState(null);
   useEffect(() => {
       const fetchId = () => {
            axios("/jwtid")
           .then((res) => {
               setSession(res.data);
            })
            .catch((err) => 
                console.log("no token biatch"))
            
       }
    fetchId()
    console.log(session)
    },[])
    return (
        <HashRouter>
            <div>
                    {session === null ? <LoginScreen setSession={setSession}/> : <MapScreen/>}
            </div>
        </HashRouter>
    );
};

export default AppRouter;
