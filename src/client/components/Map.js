import * as React from "react";
import {MapContainer, TileLayer} from "react-leaflet";
const Map = () => (
    <div className="map-liege">
        <MapContainer
            className="map-layout"
            center={[50.6385, 5.5811]}
            zoom={13}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    </div>
);

export default Map;
