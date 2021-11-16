import React, {useEffect, useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Carte from "../components/Map";
import Statbar from "../components/Statbar";
import axios from "axios";

const MapScreen = () => {
    const [trees, setTrees] = useState({});
    const [loading, setLoading] = useState(true);

    const getTrees = () => {
        axios.get("/api/tree").then((res) => {
            const trees = res.data;
            setTrees(trees);
            setLoading(false);
        });
    };

    useEffect(() => {
        {
            getTrees();
        }
    }, []);

    return (
        <div className={"app"}>
            <Header />
            <main className={loading ? "centered" : ""}>
                {loading ? (
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                ) : (
                    <>
                        <Carte listTrees={trees} />
                        <Sidebar />
                        <Statbar />
                    </>
                )}
            </main>
        </div>
    );
};

export default MapScreen;
