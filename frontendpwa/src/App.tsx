import React from 'react';
import logo from './logo.svg';
import './App.css';
import RT01_Basic             from './Tutorial/React/T01_Basic/main';
import RT02_Basic             from './Tutorial/React/T02_Basic/main';
import LT01_DisplayMarker     from './Tutorial/Leaflet/T01_DisplayMarker/main'
import LT02_ImportCSV         from './Tutorial/Leaflet/T02_ImportCSV/main';
import LT03_ImportJSON        from './Tutorial/Leaflet/T03_ImportJSON/main';
import LT04_CSVThaiCity       from './Tutorial/Leaflet/T04_CSVThaiCity/main';
import LT05_JSONThaiCity      from './Tutorial/Leaflet/T05_JSONThaiCity/main';

function App() {
  return (
  <>
    <LT05_JSONThaiCity/>
  </>
  );
}

export default App;