import * as React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Map from "./components/Map";
import Statbar from "./components/Statbar";

const App = () => {
    return (
        <div className={"app"}>
            <Header />
            <main>
                <Map />
                <Sidebar />
                <Statbar />
            </main>
        </div>
    );
};

export default App;
