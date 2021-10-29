import * as React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Map from "./components/Map";
import Login from "./components/login";
const App = () => {
    return (
        <div className={"app"}>
            <Login />
            <Header />
            <main>
                <Map />
                <Sidebar />
            </main>
        </div>
    );
};

export default App;
