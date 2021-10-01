import GoogleMapReact from 'google-map-react';
import React from 'react';



const Map = ({center,zoom}) => {
    return (
        <div className='map' >
            <GoogleMapReact
            bootstrapURLKeys={{
      key:  'AIzaSyDOCOhOXr8OopEQNxUBNeJTLT4nhP92SBc'
   }}
   defaultCenter={center}
   defaultZoom={zoom}>
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
