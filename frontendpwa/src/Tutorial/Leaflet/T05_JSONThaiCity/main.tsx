import { CSVImporter } from "csv-import-react";

import { Icon } from 'leaflet';

import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from 'react';

import MarkerClusterGroup from 'react-leaflet-cluster'
import tilelayer from './tilelayer';
import 'leaflet/dist/leaflet.css'
import './main.css'
// import data from './data/thai_city.geojson'

// --- CODE --------------------------------------------------------------------------------------------

export default function LT05_JSONThaiCity(){
// --- HOOK --------------------------------------------------------------------------------------------
const [SSCenter, setSSCenter] = useState<[number, number]>([13.7, 100.5])
const [SSZoom, setSSZoom] = useState<number>(13)
const [SSData, setSSData] = useState<any[]>([])

useEffect(() => {
  console.log('navigator')
  console.log(navigator)
  fetch('/TutorialData/T01_ThaiCity.geojson')
    .then(response => response.json())
    .then((data: any) => {
      // console.log(data.features); // Debugging to ensure the data is loaded
      setSSData(data.features);
    })
    .catch(error => console.error("Failed to load GeoJSON:", error));
}, [])

useEffect(() => {
  if (SSData.length === 0) return;
  const bangkok = SSData.find((auto) => auto.properties?.["int_name"]?.includes("Bangkok"));
  const get_position = bangkok?.geometry?.coordinates;
  if (Array.isArray(get_position) && get_position.length >= 2) {
    const city_position: [number, number] = [get_position[1], get_position[0]];
    setSSCenter(city_position);
  }
}, [SSData]);


// https://stackoverflow.com/questions/4925760/selecting-a-json-object-with-a-colon-in-the-key

// --- VARIABLE --------------------------------------------------------------------------------------------
const icon = new Icon({
    iconUrl:require("./img/placeholder.png"),
    iconSize:[32,32]
})

const thai_city:JSX.Element[] = SSData.map(city => (
    GetThaiCity(city)
))

// https://stackoverflow.com/questions/52428879/objects-are-not-valid-as-a-react-child-if-you-meant-to-render-a-collection-of-c

// --- FUNCTION --------------------------------------------------------------------------------------------

function GetThaiCity(city:any):JSX.Element{
    if([undefined, null].includes(city)){
        return <></>
    }
    else{
        let get_position = city?.geometry?.coordinates
        let city_position:[number,number] = [get_position[1],get_position[0]]
        return <Marker 
        position={city_position} 
        icon={icon}
        >
        <Popup>
        <h3>ชื่อ {city?.properties['name']}</h3>
        <h3>Name {city?.properties['name:en']}</h3>
        </Popup>
        </Marker>
    }
}

// --- RETURN CODE --------------------------------------------------------------------------------------------

/*
return (<>
{SSData.map((city, index) => (<h1>{city.properties["name:en"]}</h1>))}
</>)

*/
return (
<>

<MapContainer center={SSCenter} zoom={SSZoom} >
<TileLayer
url={tilelayer.url}
attribution={tilelayer.attribution}
/>
{
thai_city
}
</MapContainer>

</>
)

}

// --- REFERENCE --------------------------------------------------------------------------------------------
// 1. How to integrate open street maps in react using leaflet and maptiler | React Leaflet | Part 1
// * https://youtu.be/i9oX1upSKjI?si=q5S35x6L8im2oz2I