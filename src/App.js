import React, { Component } from 'react';
import Maps from "./Maps";
import footer from "./Footer";

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Maps
            containerElement={<div style={{ height: `900px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap"
loadingElement={<div style={{ height: `100%` }} />}
          />
        </div>

        <footer />
      </div>
    );
  }
}

export default App;
