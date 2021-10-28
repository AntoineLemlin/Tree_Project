import * as React from "react";

const Header = () => {
    return (
        <header>
            <h1>{"Treedle"}</h1>
            <div class="hamburger-menu">
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="5" rx="2.5" fill="white" />
                    <rect y="15" width="50" height="5" rx="2.5" fill="white" />
                    <rect y="30" width="50" height="5" rx="2.5" fill="white" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
