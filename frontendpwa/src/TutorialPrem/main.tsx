import { CSVImporter } from "csv-import-react";

import { Icon } from 'leaflet';

import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

import MarkerClusterGroup from 'react-leaflet-cluster'
import tilelayer from './tilelayer';
import 'leaflet/dist/leaflet.css'
import './main.css'
// import data from './data/thai_city.geojson'

// --- CODE --------------------------------------------------------------------------------------------

export default function TutorialPrem(){
// --- HOOK --------------------------------------------------------------------------------------------
const [SSCenter, setSSCenter] = useState<[number, number]>([13.7, 100.5])
const [SSZoom, setSSZoom] = useState<number>(13)
const [SSCSV, setSSCSV] = useState<any[]>([])
const [data, setData] = useState<any[]>([])

const { fetchCsvData }  = useFetch();
useEffect(() => {
  fetchCsvData('/tutorialdata_02.csv', setData)
  console.log(data)
}, [])

// --- VARIABLE --------------------------------------------------------------------------------------------
const icon = new Icon({
    iconUrl:require("./img/placeholder.png"),
    iconSize:[32,32]
})

//const thai_city = data.map(recipe => (
//        <p>{recipe.name_en}</p>
//      ))

const thai_city:JSX.Element[] = SSCSV.map(city => (
    <Marker 
        position={[city.lon, city.lat]} 
        icon={icon}
    >
    <Popup>
<h1>ชื่อ {city.name}</h1>
<h1>Name {city.name_en}</h1>
</Popup>
    </Marker>
))
// https://stackoverflow.com/questions/52428879/objects-are-not-valid-as-a-react-child-if-you-meant-to-render-a-collection-of-c


// const jsx_marker:JSX.Element[] = data.features.map((key:any, i:number) => (<>{key}</>));

// --- RETURN CODE --------------------------------------------------------------------------------------------

return (
<>
<MapContainer center={SSCenter} zoom={SSZoom} >
<TileLayer
url={tilelayer.url}
attribution={tilelayer.attribution}
/>
{thai_city}
</MapContainer>

</>
)

}

// --- REFERENCE --------------------------------------------------------------------------------------------
// 1. How to integrate open street maps in react using leaflet and maptiler | React Leaflet | Part 1
// * https://youtu.be/i9oX1upSKjI?si=q5S35x6L8im2oz2I