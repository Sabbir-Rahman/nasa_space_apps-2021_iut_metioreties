import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import LocationMarkerFire from '../components/LocationMarkerFire';


const Map = ({center,zoom}) => {

    const [data,setdata]=useState([])
    const[fire,setFire]=useState([])
    const[loading,setloading]=useState(false)

    useEffect(()=>{
        setloading(true)
        fetch(`https://eonet.sci.gsfc.nasa.gov/api/v3/events`)
        .then(res=>res.json())
        .then(data=>setdata(data.events))
        setloading(true)

    },[])
    return (
        <div className='map' >
            <GoogleMapReact
            bootstrapURLKeys={{
      key:  'AIzaSyDOCOhOXr8OopEQNxUBNeJTLT4nhP92SBc'
   }}
   defaultCenter={center}
   defaultZoom={zoom}>
       <LocationMarkerFire lat={center.lat} lng = {center.lng} />
            </GoogleMapReact>
        
            
        </div>
    )
}

Map.defaultProps = {
    center:{
        lat: 23.777176,
        lng:90.399452
    },
zoom:6
    
}

export default Map
