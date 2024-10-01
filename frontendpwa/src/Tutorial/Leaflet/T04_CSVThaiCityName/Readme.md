# Purpose

This code shows how to display city and its position in Thailand.

# Process 

1. Open https://overpass-turbo.eu/
2. Use Overpass Command
3. Export Data in Public Folder
4. Apply code from this video https://youtu.be/435HHLfR-c0?si=BNL-GZYdCLSdhsGy
6. Display Map using `MapContainer`
7. Creating `{thai_city}`

# Overpass Command

This Overpass command fetch all city in Thailand in CSV format.

```
[out:csv(::id,"name","name:en",::lat,::lon)][timeout:25];
{{geocodeArea:Thailand}}->.searchArea;
(
  nwr[place="city"](area.searchArea);
);
out body;

// Reference
// 1. https://stackoverflow.com/questions/23501075/getting-all-cities-in-a-specific-country-using-openstreetmap
// 2. https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL#CSV_output_mode
// 3. https://overpass-turbo.eu/
```

This Overpass command fetch all city in Thailand in JSON format.

```
[out:json][timeout:25];
{{geocodeArea:Thailand}}->.searchArea;
(
  nwr[place="city"](area.searchArea);
);
out body;

// Reference
// 1. https://stackoverflow.com/questions/23501075/getting-all-cities-in-a-specific-country-using-openstreetmap
// 2. https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL#CSV_output_mode
// 3. https://overpass-turbo.eu/
```

# Reference 
1. How to integrate open street maps in react using leaflet and maptiler | React Leaflet | Part 1
* https://youtu.be/i9oX1upSKjI?si=q5S35x6L8im2oz2I
2. How to get all of the city in the Country ?
* https://stackoverflow.com/questions/23501075/getting-all-cities-in-a-specific-country-using-openstreetmap
3. How to get data from OSM as CSV ?
* https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL#CSV_output_mode
4. Official OSM Database.
* https://overpass-turbo.eu/
5. How To Parse CSV Files - React & TypeScript
* https://youtu.be/435HHLfR-c0?si=BNL-GZYdCLSdhsGy