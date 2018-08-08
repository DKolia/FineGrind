import React, { Component } from 'react';
import Maps from "./Maps";
import Footer from "./Footer";
import NewJob from './NewJob'
import ViewAccount from './ViewAccount'
import Header from "./Header";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import FilterContainer from './FilterContainer'
import { Route, Switch } from 'react-router-dom';


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
      viewAccountView: false,
      filterView: true

    }
  }
  //used to get color of all subsequent methods correct
  placeholderFunction = () => {

  }


  loginSubmit = async (userLogin) => {

    console.log(userLogin);
    const loggedUser = {
      username: userLogin.emaillogin,
      password: userLogin.passwordlogin,
    }
    console.log(loggedUser)

  try {
    console.log(loggedUser);
    const foundUserData = await fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify(loggedUser),
      headers: {
        "Content-Type": "application/json"

      }
    })
      const foundUser = await foundUserData.json()
      console.log(foundUser);
    } catch (err){
      console.error(err, ' error with login in App.js')
    }
  }





  register = async (registrationFormDataObj) => {
    console.log(registrationFormDataObj, " this is registrationFormDataObj in register() in  App.js");

    // build a new object that matches User schema to send to '/register'
    const userPass = {
      username: registrationFormDataObj.email,
      password: registrationFormDataObj.password,
    }

    try {
      console.log("Register function was called");
      const registerData = await fetch("http://localhost:5000/api/v1/users/register", {
        method: "POST",
        body: JSON.stringify(userPass), // object that was in state in CreateAccount
        headers: {
          "Content-Type": "application/json"

        }
      })
      const registration = await registerData.json();
      console.log(registration);


      if (registration.status == 200) {
        console.log("Registration success!");
        this.setState({
          loggedIn: true,
          loginView: false,
          filterView: true
        })
      } else {
        console.log("Registration failure!");
        <p>Unable to login, check username or password.</p>
        this.LoginView == true;
      }
    }
    catch (err) {
      console.error(err, ' error with register() in App.js')
    }
  }


  componentDidMount() {
    //this is where you want to fetch data when you want to it exist at thes beginning of your app
    this.getJobs().then((jobs) => {
      this.setState({
        allJobs: jobs.data,
        filteredJobs: jobs.data
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
        // <Header />
        // <Login />
    return (
      <div className="app">
        <Header />
        

        <div className='MainContainer'>

          <div className="mapContainer">

            <Maps
              containerElement={<div style={{ height: `80vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap" loadingElement={<div style={{ height: `100%` }} />}
            />
          </div>

          <div className='sidebar'>

            

              {this.state.loggedIn === false && this.state.loginView ? <Login loginSubmit={this.loginSubmit}/> : null}

              {this.state.filterView ? <FilterContainer allJobs={this.state.allJobs}/> : null }

              {(this.state.loggedIn === false && this.state.createAccountView) ? <CreateAccount register={this.register}/> : null}
              {(this.state.loggedIn && this.state.viewAccountView) ? <ViewAccount userID={this.state.userID} updateUserInfo={this.updateUserInfo} username={this.state.username} allJobs={this.state.allJobs}/> : null}

              {(this.state.loggedIn && this.state.createJobView ) ? <NewJob updateJobs={this.updateJobs} userID={this.state.userID}/> : null }

            

          </div>

        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
