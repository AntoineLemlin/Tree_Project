import * as React from "react";
import axios from "axios";
import {useNavigate} from "react-router";

const Login = ({setLogin, setSession}) => {
    const [loginData, setLoginData] = React.useState({email: "", password: ""})
    const newLogin = (e) => {
        e.preventDefault();
        if(loginData.email != "" && loginData.password != "") {
         axios.post("/api/user/login", loginData).then((res)=>{
            setSession(res.data)
         })
        } else {
            prompt("mec t'as oublié un truc")
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
        console.log(value);
    };
    return (
        <div className="login-register">
           <div className="menu-login-register">
            <div className="login" onClick={() => setLogin(true)}>
               <h2>Login</h2>
               </div>
               <div className="register" onClick={() => setLogin(false)}>
               <h2>Register</h2>
               </div>
           </div>
        <div className="login-field">
        <form action="#" onSubmit={newLogin}>
        <label for="email">Email</label>
    
        <input onChange={handleChange} value={loginData.email} type="text" id="email" name="email" ></input>
        <label for="password">Password </label>
        <input onChange={handleChange} value={loginData.password} type="text" id="password" name="password" ></input>
        <input type="submit" value="Login"/>
        </form>
      

        </div>
        </div>

    );
};

export default Login;
