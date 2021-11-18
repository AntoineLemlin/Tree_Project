import axios from "axios";
import * as React from "react";

const Register = ({setLogin}) => {
    const [registerData, setRegisterData] = React.useState({username: "", email: "", password: ""})
    const newRegister = (registerData) => {
        if(registerData.email != "" && registerData.username != "" && registerData.password != "") {
         axios.post("/api/user/register", registerData)
        } else {
            prompt("mec t'as oublié un truc")
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
        console.log(value);
    };

    return (
        <div className="login-register">
           <div className="menu-login-register">
            <div className="login" onClick={()=>setLogin(true)}>
               <h2>Login</h2>
               </div>
               <div className="register" onClick={()=>setLogin(false)}>
               <h2>Register</h2>
               </div>
           </div>
        <div className="login-field">
        <form>
            <label for="email"> Email </label>
            <input onChange={handleChange} value={registerData.email} type="email" id="email" name="email"/>
            <label for="username">Username</label>
            <input onChange={handleChange} value={registerData.username} type="text" id="username" name="username" ></input>
            <label for="password">Password </label>
            <input onChange={handleChange} value={registerData.password} type="text"id="password" name="password"></input>
            <button  onClick={()=>newRegister(registerData)}>Register</button>
        </form>
      

        </div>
        </div>



    );
};

export default Register;
