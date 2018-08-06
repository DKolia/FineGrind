import React, { Component } from 'react';
import Maps from "./Maps";
import Footer from "./Footer";
import NewJob from './NewJob'


class App extends Component {
  constructor(){
    super();
    this.state = {
      userID: '',
      allJobs: []
    }
  }

  placeholderFunction = () => {

  }

  updateJobs = (job) => {

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

        <NewJob updateJobs={this.updateJobs} userID={this.state.userID}/>
        <Footer />
      </div>
    );
  }
}

export default App;
