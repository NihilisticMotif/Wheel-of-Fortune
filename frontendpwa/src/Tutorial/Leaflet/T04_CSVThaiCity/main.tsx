import { CSVImporter } from "csv-import-react";

import { Icon } from 'leaflet';

import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';

import MarkerClusterGroup from 'react-leaflet-cluster'
import tilelayer from './tilelayer';
import 'leaflet/dist/leaflet.css'
import './main.css'
// import data from './data/thai_city.geojson'

// --- CODE --------------------------------------------------------------------------------------------

export default function LT04_CSVThaiCity(){
// --- HOOK --------------------------------------------------------------------------------------------
const [SSCenter, setSSCenter] = useState<[number, number]>([13.7, 100.5])
const [SSZoom, setSSZoom] = useState<number>(13)
const [SSData, setSSData] = useState<any[]>([])
const { fetchCsvData }  = useFetch();

useEffect(() => {
  fetchCsvData('/TutorialData/T02_ThaiCity.csv', setSSData)
}, [])

console.log(SSData);

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
    if([undefined, null].includes(city?.lat) || [undefined, null].includes(city?.lon)){
        return <></>
    }
    else{
        return <Marker 
        position={[city?.lat, city?.lon]} 
        icon={icon}
        >
        <Popup>
        <h3>ชื่อ {city?.name}</h3>
        <h3>Name {city?.name_en}</h3>
        </Popup>
        </Marker>
    }
}

// --- RETURN CODE --------------------------------------------------------------------------------------------

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