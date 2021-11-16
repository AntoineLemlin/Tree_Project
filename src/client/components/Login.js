import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const Login = ({setLoginUser}) => {
        const history = useNavigate()
        const [user, setUser] = React.useState({
            name: "",
            password: ""
        })
        const handleChange = e => {
            const {name,value} = e.target
            setUser({
                ...user,
                [name]:value
            })
            console.log(value)
        }
        const login = () => {
            axios.post("/login", user)
            .then(res=>{alert(res.data.message)
            setLoginUser(res.data.user)
        })
        console.log(user)
        }

    return (
        <div className="login-register"> 
           <div className="menu-login-register">
            <div onClick={test}className="login">
               <h2>login</h2>
               </div>
               <div onClick={test1} className="register">
               <h2>register</h2>
               </div>
           </div>
        <div className="login-field">
        <form action="#">
        <label for="username"> username</label>
    
        <input type="text" id="username" name="username" value={user.email} onChange={handleChange}></input>
        <label for="password">Password </label>
        <input type="text" id="password" name="password" value={user.password} onChange={handleChange}></input>
        <button type="submit" onClick={login}>Login</button>
        </form>
      

        </div>
        <div ref={div1} className="register-field">
        <form>
        <label for="email">email </label>
        <input type="text"id="email" name="email"></input>
        <label for="username"> username</label>
        <input type="text" id="username" name="username" ></input>
        <label for="password">Password </label>
        <input type="text"id="password" name="password"></input>
        
        <button>Login</button>
        </form>
        

        </div>
        </div>



    );
};

export default Login;
