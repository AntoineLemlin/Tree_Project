import * as React from "react";
import {MapContainer, TileLayer,Marker,Popup} from "react-leaflet";
import L ,{iconSize} from "leaflet"
import tree1 from "../img/tree-svgrepo-com.svg"
function test(_iconSize){
    return L.icon({
        iconUrl:tree1,
        iconSize: [_iconSize]
    })
}

 
const Map = () => (
   
    <div className="map-liege">
        <MapContainer
            className="map-layout"
            center={[50.6385, 5.5811]}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}>
            <Marker  icon={test(80)} position={[50.6385, 5.5811]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>


            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    </div>
);

export default Map;
