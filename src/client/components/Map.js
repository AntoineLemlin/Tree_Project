import * as React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L, {iconSize} from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import tree1 from "../img/tree-svgrepo-com.svg";

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

    const treeRadius = (tree) => {
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
                    treeB,
                );
            }
        });
        console.log(number.length);
        setNumber([]);
    };

    return (
        <div className="map-liege">
            <MapContainer
                preferCanvas={true}
                className="map-layout"
                center={[50.6385, 5.5811]}
                maxZoom={18}
                zoom={13}
                minZoom={3}
                scrollWheelZoom={true}
                zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup>
                    {Object.values(props.listTrees).map((tree, i) => {
                        if (tree.geoloc != null && tree.hauteur_totale != null && tree.diametre_cime != null) {
                            return (
                                <Marker
                                    position={[
                                        tree.geoloc.lat,
                                        tree.geoloc.lon,
                                    ]}
                                    icon={L.divIcon({
                                        html: `<svg width="26" height="31" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C22.5787 40.5344 17.2282 55.372 11 60.2587V62H26V20Z" fill="#5E4D3E"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26 20C29.4213 40.5344 34.7718 55.372 41 60.2587V62H26V20Z" fill="#5E4D3E"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1523 10.8477C39.0078 4.53895 33.034 0 26 0C18.966 0 12.9922 4.53895 10.8477 10.8477C4.53895 12.9922 0 18.966 0 26C0 34.8366 7.16344 42 16 42C19.7838 42 23.2608 40.6866 26 38.4907C28.7392 40.6866 32.2162 42 36 42C44.8366 42 52 34.8366 52 26C52 18.966 47.4611 12.9922 41.1523 10.8477Z" fill="#008000"/>
                                            </svg>
                                            `,
                                        iconAnchor: null,
                                        popupAnchor: [6, 0],
                                        className: "tree-icon",
                                    })}
                                    // onClick= {() => {
                                    //     treeRadius(tree);
                                    //     console.log(number)
                                    // }
                                    // }
                                >
                                    <Popup className="popup">
                                        <h2>
                                            {"Nom: "}
                                            {tree.nom_complet !==
                                            "en cours de détermination" ? (
                                                <a
                                                    className={"tree-link"}
                                                    href={`http://wikipedia.org/wiki/${
                                                        tree.nom_complet
                                                            .replace(/ /g, "_")
                                                            .split("'")[0]
                                                    }`}
                                                    target="_blank">
                                                    {tree.nom_complet}
                                                </a>
                                            ) : (
                                                tree.nom_complet
                                            )}
                                        </h2>
                                        <h2>
                                            {"Price: "}
                                            {Math.ceil(
                                                tree.hauteur_totale *
                                                    tree.diametre_cime,
                                            )}
                                            <svg
                                                width="13"
                                                height="11"
                                                viewBox="0 0 52 42"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M9.32882 35.0956L1.58555 42L0 40.781L7.86317 33.7697C4.92394 24.6873 6.04196 6.44316 26.6298 5.46C44.3631 4.61316 50.2066 1.33551 51.6218 0.309119C49.9205 1.7592 43.0412 8.28428 42.5968 19.32C42.3507 25.4329 28.9538 44.96 9.32882 35.0956ZM52 0C52 0 51.8911 0.113795 51.6218 0.309119C51.8629 0.103575 52 0 52 0Z"
                                                    fill="#A43B3B"
                                                />
                                            </svg>
                                        </h2>
                                        <h2>
                                            {tree.hauteur_totale
                                                ? `Hauteur: ${tree.hauteur_totale}m`
                                                : ""}
                                        </h2>
                                    </Popup>
                                </Marker>
                            );
                        }
                    })}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
};

export default Carte;
