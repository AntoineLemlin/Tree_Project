import * as React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L, {iconSize} from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import tree1 from "../img/tree-svgrepo-com.svg";
function test(_iconSize) {
    return L.icon({
        iconUrl: tree1,
        iconSize: [_iconSize],
    });
}

const Carte = (props) => {
    const markers = [];
    const [number, setNumber] = React.useState([]);

    const calculateDistance = (latA, latB, tree) => {
        if (latA != null || latB != null) {
            let dis = latA.distanceTo(latB);
            let distanceKm = (dis / 1000).toFixed(2);
            if (distanceKm <= 0.1) {
                setNumber(number.push(tree));
            }
        }
    };

    const treeRadius = (tree) => 
        {
            Object.values(props.listTrees).map((treeB, i) => {
        if (
            treeB.geoloc != null &&
            tree.geoloc != null &&
            treeB.geoloc !== tree.geoloc
        ) {
            calculateDistance(
                L.latLng({
                    lat: tree.geoloc.lat,
                    lng: tree.geoloc.lon,
                }),
                L.latLng({
                    lat: treeB.geoloc.lat,
                    lng: treeB.geoloc.lon,
                }),
                treeB
            );
        }
    }
    )
    console.log(number.length)
    setNumber([])}

    // const drawMarkers = () => {
    //     Object.values(props.listTrees).map((tree, i) => {
    //         if (tree.geoloc != null) {
    //             markers.push({
    //                 position: [tree.geoloc.lat, tree.geoloc.lon],
    //                 onClick: () => {
    //                     treeRadius(tree);
    //                     console.log(number)
    //                 }
    //                 ,
    //                 tooltip: `${tree.nom_complet}`,
    //                 id: `${i}`,
    //                 iconId: `icon-${i}`,
    //                 customIcon: `<svg width="26" height="31" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C22.5787 40.5344 17.2282 55.372 11 60.2587V62H26V20Z" fill="#5E4D3E"/>
    //                 <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C29.4213 40.5344 34.7718 55.372 41 60.2587V62H26V20Z" fill="#5E4D3E"/>
    //                 <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1523 10.8477C39.0078 4.53895 33.034 0 26 0C18.966 0 12.9922 4.53895 10.8477 10.8477C4.53895 12.9922 0 18.966 0 26C0 34.8366 7.16344 42 16 42C19.7838 42 23.2608 40.6866 26 38.4907C28.7392 40.6866 32.2162 42 36 42C44.8366 42 52 34.8366 52 26C52 18.966 47.4611 12.9922 41.1523 10.8477Z" fill="#A43B3B"/>
    //             </svg>`,
    //             });
    //         }
    //     });
    // };

    // drawMarkers();

    const drawMarkers = () => {
        Object.values(props.listTrees).map((tree, i) => {
            if (tree.geoloc != null) {

            console.log("test")
                return (<Marker position={[50.6385, 5.5811]}
                    // onClick= {() => {
                    //     treeRadius(tree);
                    //     console.log(number)
                    // }
                    // }
                    >
                        
                    </Marker>)
            }})
    }


    return (
        <div className="map-liege">
            <MapContainer
                preferCanvas={true}
                className="map-layout"
                center={[50.6385, 5.5811]}
                maxZoom={19}
                zoom={13}
                minZoom={3}
                scrollWheelZoom={true}
                zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup>
                    { 
                            Object.values(props.listTrees).map((tree, i) => {
                                if (tree.geoloc != null) {
                                    return (<Marker position={[50.6385, 5.5811]}
                                        // onClick= {() => {
                                        //     treeRadius(tree);
                                        //     console.log(number)
                                        // }
                                        // }
                                        >
                                            
                                        </Marker>)
                                }})
                                }
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
};

export default Carte;
