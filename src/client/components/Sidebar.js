import * as React from "react";

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="leaderboards">
                <h2 className="sidebar-section">Leaderboards</h2>
                <p className="leaderboards sidebar-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non in, quidem veniam eaque, aliquid hic repellat voluptatum vitae laboriosam ipsam sed ex! Fuga labore nam ipsa impedit cupiditate illum repudiandae.</p>
            </div>
            <div className="gamelog">
                <h2 className="sidebar-section">Gamelog</h2>
                <p className="gamelog sidebar-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam dicta, porro corrupti consequuntur temporibus voluptas sed eveniet, rem aperiam voluptate distinctio in. Eveniet, veritatis ratione. Quisquam tenetur mollitia adipisci!</p>
            </div>
            <div className="playerinfo">
                <p className="trees-number">350</p>
                <p className="leaves-number">200000</p>
                <p className="player-name">Player</p>
            </div>
        </div>
     );
}
 
export default Sidebar;