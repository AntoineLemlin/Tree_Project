import * as React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Map from "./components/Map";

const App = () => {
    return (
        <div className={"app"}>
            <Header />
            <main>
                <Map />
                <Sidebar />
            </main>
        </div>
    );
};

export default App;
