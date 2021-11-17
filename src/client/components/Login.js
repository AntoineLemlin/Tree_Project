import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const Login = ({setLoginUser}) => {
        
    return (
        <div className="login-register">
           <div className="menu-login-register">
            <div className="login">
               <h2>login</h2>
               </div>
               <div className="register">
               <h2>register</h2>
               </div>
           </div>
        <div className="login-field">
        <form action="#">
        <label for="username"> username</label>
    
        <input type="text" id="username" name="username" ></input>
        <label for="password">Password </label>
        <input type="text" id="password" name="password" ></input>
        <button type="submit" onClick={login}>Login</button>
        </form>
      

        </div>
        </div>



    );
};

export default Login;
