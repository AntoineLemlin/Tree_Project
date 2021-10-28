import * as React from "react";
import logo from "../img/logo.png";
import menu from "../img/menu_hamburger.png";

const Header = () => {
    const navbar = React.useRef();
    const isMenu = () => {
        navbar.current.style.visibility === "visible"
            ? (navbar.current.style.visibility = "hidden")
            : (navbar.current.style.visibility = "visible");

        console.log(navbar.current.style.visibility);
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <h1>{"Treedle.io"}</h1>

            <div className="links">
                <nav style={{visibility: "visible"}} ref={navbar}>
                    <ul>
                        <li>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </nav>

                <div className="menu">
                    <a href="#" onClick={isMenu}>
                        <img src={menu} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
