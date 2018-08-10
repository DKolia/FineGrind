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
      defaultZoom={13}
      defaultCenter={props.userLocation.data}
      defaultOptions={{ styles: [
  {
    "stylers": [
      {
        "color": "#fc5424"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "color": "#efefef"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#405764"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#405764"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "stylers": [
      {
        "color": "#2b3a42"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "color": "#405764"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#405764"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#bed4dd"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#efefef"
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "color": "#bed4dd"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#405764"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "color": "#405764"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#2b3a42"
      }
    ]
  }
]

 }}
    >
      {
        // Map Styles End.
        // see: https://tomchentw.github.io/react-google-maps/ under "Styled Map with an info box"
        // and: https://mapstyle.withgoogle.com/
      }
      {markers}
    </GoogleMap>
  )
}


export default withScriptjs(withGoogleMap(MyMap));
