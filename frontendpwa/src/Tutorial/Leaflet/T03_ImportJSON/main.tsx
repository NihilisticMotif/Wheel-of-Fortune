// --- CODE --------------------------------------------------------------------------------------------
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './main.css';

// GeoJSON Type Definition (Optional)
interface CityFeature {
  type: string;
  properties: {
    name: string;
    "name:en"?: string;
    "name:th"?: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];  // [longitude, latitude]
  };
}

// Main Component
export default function LT03_ImportJSON() {
  // --- HOOK --------------------------------------------------------------------------------------------
  const [SSCenter, setSSCenter] = useState<[number, number]>([13.7, 100.5]);
  const [SSZoom, setSSZoom] = useState<number>(13);
  const [cityData, setCityData] = useState<CityFeature[]>([]);

  // --- Load and Set GeoJSON Data -----------------------------------------------------------------------
useEffect(() => {
  fetch('/TutorialData/T01_ThaiCity.geojson')
    .then(response => response.json())
    .then((data: any) => {
      console.log("Loaded GeoJSON:", data.features); // Debugging to ensure the data is loaded
      setCityData(data.features);
    })
    .catch(error => console.error("Failed to load GeoJSON:", error));
}, []);

return (<>
{cityData.map((city, index) => (<h1>{city.properties["name:th"]}</h1>))}
</>)

}