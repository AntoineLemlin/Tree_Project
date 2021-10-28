import * as React from "react";


const Sidebar = () => {
    return ( 
        <div className="sidebar">
           
            <div className="leaderboards sidebar-element">
                <h2 className="sidebar-section">Leaderboards</h2>
                <p className="leaderboards sidebar-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non in, quidem veniam eaque, aliquid hic repellat voluptatum vitae laboriosam ipsam sed ex! Fuga labore nam ipsa impedit cupiditate illum repudiandae.</p>
            </div>
            <div className="gamelog sidebar-element">
                <h2 className="sidebar-section">Gamelog</h2>
                <p className="gamelog sidebar-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam dicta, porro corrupti consequuntur temporibus voluptas sed eveniet, rem aperiam voluptate distinctio in. Eveniet, veritatis ratione. Quisquam tenetur mollitia adipisci!</p>
            </div>
            <div className="playerinfo">
                <div className="trees">
                    <div className="tree">
                        <svg className="" width="52" height="62" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="18" y="22" width="16" height="40" fill="#5E4D3E"/>
                            <path fill-rule="evenodd" fill="#ab7c94" clip-rule="evenodd" d="M41.1523 10.8477C39.0078 4.53895 33.034 0 26 0C18.966 0 12.9922 4.53895 10.8477 10.8477C4.53895 12.9922 0 18.966 0 26C0 34.8366 7.16344 42 16 42C19.7838 42 23.2608 40.6866 26 38.4907C28.7392 40.6866 32.2162 42 36 42C44.8366 42 52 34.8366 52 26C52 18.966 47.4611 12.9922 41.1523 10.8477Z"/>
                        </svg>
                    </div>
                        <p className="trees-number">350</p>
                    </div>
                    <div className="leaf">
                        <svg width="53" height="42" viewBox="0 0 53 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2318 35.0956L2.48851 42L0.902954 40.781L8.76613 33.7697C5.8269 24.6873 6.94491 6.44316 27.5328 5.46C45.2661 4.61316 51.1095 1.33551 52.5247 0.309119C50.8235 1.7592 43.9442 8.28428 43.4998 19.32C43.2536 25.4329 29.8567 44.96 10.2318 35.0956ZM52.903 0C52.903 0 52.794 0.113795 52.5247 0.309119C52.7659 0.103575 52.903 0 52.903 0Z" fill="#A43B3B"/>
                        </svg>
                        <p className="leaves-number">200000</p>
                    </div>
                <p className="player-name">Player</p>
            </div>
        </div>
     );
}
 
export default Sidebar;