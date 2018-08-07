import React from "react"

// eslint-disable-next-line
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Maps = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 41.8, lng: -88 }}
  >
  </GoogleMap>
))


export default Maps;
