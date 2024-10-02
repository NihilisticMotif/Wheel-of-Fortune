import './main.css'
import { useState, useEffect, useRef } from "react";
import {UserLocation} from './UserLocation'
import useUserLocation from "../../../hooks/useUserLocation";

import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { divIcon, DivIcon, point, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'

/*
// --- CODE --------------------------------------------------------------------------------------------

export default function T06_AccessUserLocation(){
// --- HOOK --------------------------------------------------------------------------------------------
// const [SSUserLocation, setSSUserLocation] = useState<UserLocation>({
//     loaded:false,
//     location:[0,0]
// })

const [SSZoom, setSSZoom] = useState<number>(13)
const user_location = useUserLocation()
const [SSCenter, setSSCenter] = useState<[number,number]>(user_location.location)
const mapRef = useRef();

useEffect(() => {
    if (user_location.loaded) {
      setSSCenter(user_location.location); // Update SSCenter with new location
    }
  }, [user_location]);


// --- VARIABLE --------------------------------------------------------------------------------------------
const custom_icon = new Icon({
    iconUrl:require("./img/placeholder.png"),
    iconSize:[32,32]
})

const jsx_user_location:JSX.Element = <></>

// --- FUNCTION --------------------------------------------------------------------------------------------

// --- RETURN CODE --------------------------------------------------------------------------------------------

return (<>
<MapContainer center={SSCenter} zoom={SSZoom}>
<TileLayer
attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
/>

</MapContainer>    
</>)
}
*/

// CHATGPT SOLUTION ALSO DOES NOT WORKS.
// --- CODE --------------------------------------------------------------------------------------------

export default function T06_AccessUserLocation() {
  // --- HOOK --------------------------------------------------------------------------------------------
  const user_location = useUserLocation();
  const [SSCenter, setSSCenter] = useState<[number, number]>([0, 0]); // Initialize to default value
  const [SSZoom, setSSZoom] = useState<number>(13);
  const mapRef = useRef();

  // --- EFFECT --------------------------------------------------------------------------------------------
  // Update SSCenter whenever the user location is updated in the hook
  useEffect(() => {
    if (user_location.loaded) {
      setSSCenter(user_location.location); // Update SSCenter with new location
    }
    console.log(SSCenter)
  }, [user_location]);

  // --- VARIABLE --------------------------------------------------------------------------------------------
  const custom_icon = new Icon({
    iconUrl: require("./img/placeholder.png"),
    iconSize: [32, 32]
  });

  // --- RETURN CODE --------------------------------------------------------------------------------------------
  return (
    <>
      <MapContainer center={SSCenter} zoom={SSZoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {user_location.loaded && (
          <Marker position={user_location.location} icon={custom_icon}>
            <Popup>
              You are here!
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
}