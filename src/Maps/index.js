import React from "react"


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Maps = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 41.8789, lng: -87.6358 }}
  >
  </GoogleMap>
))


export default Maps;
