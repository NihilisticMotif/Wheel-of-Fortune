import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";

export interface UserLocation{
    loaded:boolean,
    location:[number,number]
}

const useUserLocation = () => {
const [SSUserLocation, setSSUserLocation] = useState<UserLocation>({
    loaded: false,
    location:[0,0]
});

const error_location:UserLocation = {
    loaded:false,
    location:[0,0]
}

// function GetUserLocation(){
//     return new Promise((pos,err)=>{navigator.geolocation.getCurrentPosition((pos) =>{
//     SSUserLocation({
//         loaded:true,
//         location:[
//             pos.coords.latitude,
//             pos.coords.longitude,
//         ]})
// }, (err) => {
//     SSUserLocation(error_location)
// });})
// }

useEffect(() => {
navigator.geolocation.getCurrentPosition((pos:any) =>{
    const newUserPos:UserLocation = {
        loaded:true,
        location:[
            pos.coords.latitude,
            pos.coords.longitude,
        ]}
    //console.log(newUserPos)
    setSSUserLocation(newUserPos) 
}, (err:any) => {
});
console.log(SSUserLocation)
}, [])

return SSUserLocation;
};

export default useUserLocation;
