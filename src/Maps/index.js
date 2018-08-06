import React from "react"
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//
// const Maps = withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={14}
//     defaultCenter={{lat: 41.8789, lng: -87.6358}}
//   >
//   </GoogleMap>
// )



///////////////////////


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Maps = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
))

///////////////////////



export default Maps;
