import * as React from "react";
import {useRef} from "react"
const Login = () => {
    const div = useRef(0)
    const div1 = useRef(0)
    function test(){
        div.current.style.display = "flex"
        div1.current.style.display = "none"
        console.log(0)

    }
    function test1(){
        div.current.style.display = "none"
        div1.current.style.display = "flex"
        console.log(1) 

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
        <div ref={div} className="login-field">
        <form>
        <label for="username"> username</label>
    
        <input type="text" id="username" name="username" ></input>
        <label for="password">Password </label>
        <input type="text"id="password" name="password"></input>
        <button>Login</button>
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
