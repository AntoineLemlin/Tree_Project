import * as React from "react";
import { Map, TileLayer,Marker,Popup} from "react-leaflet";
import L ,{iconSize} from "leaflet"
import tree1 from "../img/tree-svgrepo-com.svg"
import PixiOverlay from 'react-leaflet-pixi-overlay'
function test(_iconSize){
    return L.icon({
        iconUrl:tree1,
        iconSize: [_iconSize]
    })
}



const Carte = (props) => {
    const markers = [] 
    Object.values(props.listTrees).map((tree, i) => {if(tree.geoloc != null) {
        markers.push(
            {
                position: [tree.geoloc.lat, tree.geoloc.lon],
                onClick: () => alert('marker clicked'),
                tooltip: 'Hey!',
                id: i,
                iconId: i*Math.random(),
                customIcon:
      '<svg style="-webkit-filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .4));filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .4));" xmlns="http://www.w3.org/2000/svg" fill="red" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',
            }
        )
        }})
        console.log(typeof(markers))
    console.log(markers)
    return (
   
    <div className="map-liege">
        <Map
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
            <PixiOverlay markers={markers}/>
        </Map>
    </div>
)};

export default Carte;
