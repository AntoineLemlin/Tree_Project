import * as React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
    return (
        <div className={"app"}>
            <Header />
            <Sidebar />
        </div>
    );
};

export default App;
