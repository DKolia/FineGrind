import React from "react"

// eslint-disable-next-line
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMap = (props) => {
  console.log(props.jobs, "this is props.jobs in the maps jcompo")

  const markers = props.jobs.map(job=>{
    return(
      <Marker
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
