import React, { useEffect } from "react";

const Statbar = ({username}) => {
    
    return (
        <div className="stats-container">
            <div className="trees">
                <svg width="52" height="62" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C22.5787 40.5344 17.2282 55.372 11 60.2587V62H26V20Z" fill="#5E4D3E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C29.4213 40.5344 34.7718 55.372 41 60.2587V62H26V20Z" fill="#5E4D3E"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1523 10.8477C39.0078 4.53895 33.034 0 26 0C18.966 0 12.9922 4.53895 10.8477 10.8477C4.53895 12.9922 0 18.966 0 26C0 34.8366 7.16344 42 16 42C19.7838 42 23.2608 40.6866 26 38.4907C28.7392 40.6866 32.2162 42 36 42C44.8366 42 52 34.8366 52 26C52 18.966 47.4611 12.9922 41.1523 10.8477Z" fill="#A43B3B"/>
                </svg>
                <p className="trees-number" onClick={() => console.log(username)}>30</p>
            </div>
            <div className="leaves">
                <svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.32882 35.0956L1.58555 42L0 40.781L7.86317 33.7697C4.92394 24.6873 6.04196 6.44316 26.6298 5.46C44.3631 4.61316 50.2066 1.33551 51.6218 0.309119C49.9205 1.7592 43.0412 8.28428 42.5968 19.32C42.3507 25.4329 28.9538 44.96 9.32882 35.0956ZM52 0C52 0 51.8911 0.113795 51.6218 0.309119C51.8629 0.103575 52 0 52 0Z" fill="#A43B3B"/>
                </svg>
                <p className="leaves-number">400000</p>
            </div>
            <div className="player">
                <a href="#" className="player-name">{username}</a>
            </div>
        </div>
    );
}
 
export default Statbar;