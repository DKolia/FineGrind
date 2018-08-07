import React, { Component } from 'react';
import Maps from "./Maps";
import Footer from "./Footer";
import NewJob from './NewJob'
import ViewAccount from './ViewAccount'

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      userID: '',
      allJobs: [],
      loggedIn: false,
      createJobView: false,
      loginView: false,
      createAccountView: false,
      viewAccountView: false
    }
  }
  //used to get color of all subsequent methods correct
  placeholderFunction = () => {

  }

  componentDidMount() {
    //this is where you want to fetch data when you want to it exist at thes beginning of your app
    this.getJobs().then((jobs) => {
      this.setState({
        allJobs: jobs.data
      })
    }).catch((err) => {
      console.log(err, 'error with componenent did mount')
    })
  }

  updateUserInfo = (userInfo) => {
    this.setState({
      username: userInfo
    })
  }

  getJobs = async () => {
    try {
      //make fetch request to server to get all jobs data
      const jobs = await fetch('http://localhost:5000/api/v1/jobs', {
        credentials: 'include'
      })
      //convert response from json
      const jobsJSON = jobs.json();

      //return the converted data
      return jobsJSON

    } catch (err) {
      console.log('Error with getJobs in App.js', err) 
      return err
    }
  }

  //used to add new job to local dataset if user creates a new job posting
  updateJobs = (job) => {
    const jobsArray = this.state.allJobs;
    this.setState({
      allJobs: jobsArray.push(job)
    })
  }

  render() {
    return (
      <div className="app">
        <div className='MainContainer'>
          <div className="mapContainer">
            <Maps
              containerElement={<div style={{ height: `80vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap"
  loadingElement={<div style={{ height: `100%` }} />}
            />
          </div>


          {(this.state.loggedIn && this.state.viewAccountView) ? <ViewAccount userID={this.state.userID} updateUserInfo={this.updateUserInfo} username={this.state.username} allJobs={this.state.allJobs}/> : null}
          {(this.state.loggedIn && this.state.createJobView ) ? <NewJob updateJobs={this.updateJobs} userID={this.state.userID}/> : null }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
