import React from "react";
import {Icon} from 'leaflet';
import { MapContainer, TileLayer} from 'react-leaflet';
import SetMarker from "./SetMarker.js";
import 'leaflet/dist/leaflet.css';
import icon from "../images/icon-location.svg";

const newMarker = new Icon({
    iconUrl: icon,
    iconSize: [30,40]
});

function Map(props){
    return(
        <MapContainer center={props.location?props.location:[51.505, -0.09]} zoom={8} scrollWheelZoom={true} > 
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SetMarker location={props.location?props.location:[51.505, -0.09]} newMarker={newMarker}/>
        </MapContainer>
    );
}
export default Map;