import * as React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="leaderboards sidebar-element">
                <a href="#">
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="120" rx="60" fill="#FFFAFA" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M59.9169 59.9936C46.2668 59.6898 35.2627 48.6601 35 35H85.9905C85.7279 48.6569 74.7287 59.6847 61.0831 59.9934C61.7884 72.6608 66.9421 84.1411 75.0078 92.8976L75.6554 94.5H45.3446L45.9922 92.8976C54.0579 84.1412 59.2116 72.6609 59.9169 59.9936Z"
                            fill="#1B365C"
                        />
                    </svg>
                </a>
            </div>
            <div className="gamelog sidebar-element">
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="120" rx="60" fill="#FFFAFA" />
                    <rect
                        x="37"
                        y="36"
                        width="60"
                        height="10"
                        rx="5"
                        fill="#1B365C"
                    />
                    <rect
                        x="37"
                        y="55"
                        width="50"
                        height="10"
                        rx="5"
                        fill="#1B365C"
                    />
                    <rect
                        x="37"
                        y="74"
                        width="40"
                        height="10"
                        rx="5"
                        fill="#1B365C"
                    />
                    <circle cx="28" cy="41" r="5" fill="#1B365C" />
                    <circle cx="28" cy="60" r="5" fill="#1B365C" />
                    <circle cx="28" cy="79" r="5" fill="#1B365C" />
                </svg>
            </div>
        </div>
    );
};

export default Sidebar;
