import './main.css'
import { ls_marker, I_Marker } from './marker'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { divIcon, DivIcon, point, Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
import "leaflet.markercluster";

// import type { MarkerCluster } from 'leaflet.markercluster'; 
// import cluster from 'cluster'
// import * as L from "leaflet";

// --- CODE --------------------------------------------------------------------------------------------

export default function LT01_DisplayMarker() {

// --- VARIABLE --------------------------------------------------------------------------------------------

const custom_icon = new Icon({
    iconUrl:require("./img/placeholder.png"),
    iconSize:[32,32]
})

const jsx_marker:JSX.Element[] = ls_marker.map((marker:I_Marker)=>(
    <Marker 
        position={marker.geocode} 
        icon={custom_icon}
    >
    <Popup>My name is {marker.pop_up}.</Popup>
    </Marker>
));

// --- RETURN CODE --------------------------------------------------------------------------------------------

return <>

<MapContainer center={[13.736717, 100.523186]} zoom={13}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
/>

{/* WATERCOLOR CUSTOM TILES */}
{/* <TileLayer
    attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
/> */}
<MarkerClusterGroup
    chunkedLoading
>
{jsx_marker}
</MarkerClusterGroup>
</MapContainer>    
</>

}
