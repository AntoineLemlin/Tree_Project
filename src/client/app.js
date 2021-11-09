import React, {useEffect,useState} from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Map from "./components/Map";
import Login from "./components/login";
import Statbar from "./components/Statbar";
import axios from "axios";

const App = () => {
    
const [trees, setTrees] = useState({})
const [fetch, setFetch] = useState(false)

const getTrees = () => {
    axios.get("/api/tree")
    .then(res => {
        const trees = res.data;
        setTrees(trees);
        setFetch(true);
    })
}

useEffect(()=>{
    getTrees()
}, [])

    return (
        <div className={"app"}>
            <Login />
            <Header />
            <main>
                <Map listTrees={trees}/>
                <Sidebar />
                <Statbar />
            </main>
        </div>
    );
};

export default App;
