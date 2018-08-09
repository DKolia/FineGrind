import React from "react"

// eslint-disable-next-line
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMap = (props) => {
  const markers = props.jobs.map((job, i)=>{
    return(
      <Marker key={i}
        position={{
          lat: job.location.lat,
          lng: job.location.lng
        }}
     />
    )
  })
  
  return(
    <GoogleMap
      defaultZoom={9}
      defaultCenter={props.userLocation.data}
    >
      {markers}
    </GoogleMap>
  )
}


export default withScriptjs(withGoogleMap(MyMap));
