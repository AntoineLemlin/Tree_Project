import React, {useState, useEffect} from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";
import axios from "axios";

const AppRouter = () => {
   const [session, setSession] = useState(null);
   const [username, setUsername] = useState("");
   useEffect(() => {
       const fetchId = () => {
            axios("/jwtid")
           .then((res) => {
               setSession(res.data.id);
               setUsername(res.data.username)
            })
            .catch((err) => 
                console.log("no token"))
            
       }
    fetchId()
    console.log(session)
    },[])
    return (
        <HashRouter>
            <div>
                    {session === null ? <LoginScreen/> : <MapScreen username={username}/>}
            </div>
        </HashRouter>
    );
};

export default AppRouter;
