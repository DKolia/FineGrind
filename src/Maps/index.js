import React from "react"

// eslint-disable-next-line
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Maps = withScriptjs(withGoogleMap((props) =>
  		<GoogleMap
    		defaultZoom={9}
    		defaultCenter={props.userLocation.data}
  		>
  		</GoogleMap>

))

export default Maps;
