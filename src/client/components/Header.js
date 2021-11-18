import axios from "axios";
import * as React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [widthMenu, setWidthMenu] = React.useState(85);

    const fadeOut = {
        transitionDelay: "0s",
    };

    const fadeIn = {
        transitionDelay: "0.5s",
    };

    const hamburgerMenu = () => {
        if (widthMenu === 85) {
            setWidthMenu(215);
        } else {
            setWidthMenu(85);
        }
    };
    return (
        <header>
            <h1>{"Treedle"}</h1>
            <div style={{width: widthMenu + "px"}} class="hamburger-menu">
                <nav
                    style={widthMenu == 85 ? fadeOut : fadeIn}
                    className={widthMenu == 85 ? "hidden-nav" : ""}>
                    <ul>
                        <li>
                            <Link to="/">
                                <svg
                                    width="40"
                                    height="48"
                                    viewBox="0 0 48 57"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M39.5 18C39.5 26.4963 32.4016 33.5 23.5 33.5C14.5984 33.5 7.5 26.4963 7.5 18C7.5 9.50371 14.5984 2.5 23.5 2.5C32.4016 2.5 39.5 9.50371 39.5 18Z"
                                        stroke="white"
                                        stroke-width="5"
                                    />
                                    <path
                                        d="M20 38.5H28C37.1597 38.5 44.6758 45.5372 45.4366 54.5H2.56339C3.32423 45.5372 10.8403 38.5 20 38.5Z"
                                        stroke="white"
                                        stroke-width="5"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li onClick={() =>{
                            axios.post("api/user/logout")
                            .then(()=>{
                                window.location = "/"
                            })
                        }}>
                                <svg
                                    className="profile-btn"
                                    width="40"
                                    height="48"
                                    viewBox="0 0 50 58"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        x="22"
                                        width="5"
                                        height="20"
                                        rx="2.5"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17 9.30738C7.11634 12.6435 0 21.9907 0 33C0 46.8071 11.1929 58 25 58C38.8071 58 50 46.8071 50 33C50 21.6228 42.4001 12.0206 32 8.99323V14.2592C39.5933 17.0967 45 24.4169 45 33C45 44.0457 36.0457 53 25 53C13.9543 53 5 44.0457 5 33C5 24.7987 9.93638 17.7504 17 14.6642V9.30738Z"
                                        fill="white"
                                    />
                                </svg>
                        </li>
                    </ul>
                </nav>
                <svg
                    onClick={hamburgerMenu}
                    width="40"
                    height="48"
                    viewBox="0 0 50 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect
                        className={widthMenu == 215 ? "path" : ""}
                        width="50"
                        height="5"
                        rx="2.5"
                        fill="white"
                    />
                    <rect
                        className={widthMenu == 215 ? "path" : ""}
                        y="15"
                        width="50"
                        height="5"
                        rx="2.5"
                        fill="white"
                    />
                    <rect
                        className={widthMenu == 215 ? "path" : ""}
                        y="30"
                        width="50"
                        height="5"
                        rx="2.5"
                        fill="white"
                    />
                </svg>
            </div>
        </header>
    );
};

export default Header;
