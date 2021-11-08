import * as React from "react";

const Register = () => {
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
        <form>
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

export default Register;
