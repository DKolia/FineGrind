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
      loginFail: false,
      registerFail: false,
      createJobView: false,
      loginView: false,
      createAccountView: false,
      viewAccountView: false,
      filterView: true,
      errorMsg: ''
    }
  }
  //used to get color of all subsequent methods correct
  placeholderFunction = () => {

  }


  loginSubmit = async (userLogin) => {
    const loggedUser = {
      username: userLogin.emaillogin,
      password: userLogin.passwordlogin,
    }

  try {
    const foundUserData = await fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(loggedUser),
      headers: {
        "Content-Type": "application/json"

      }
    })
      const foundUser = await foundUserData.json()
      if(foundUser.status === 200) {
        this.setState({
          username: foundUser.data.username,
          userID: foundUser.data._id,
          loggedIn: true, 
          registerFail: false,
          loginFail: false
        })
      } else {
        this.setState({
          loginFail: true
        })
      }

    } catch (err){
      console.error(err, ' error with login in App.js')
    }
  }





  register = async (registrationFormDataObj) => {

    if(registrationFormDataObj.password === registrationFormDataObj.confirmpassword) {
      // build a new object that matches User schema to send to '/register'
      const userPass = {
        username: registrationFormDataObj.email,
        password: registrationFormDataObj.password,
      }

      try {
        const registerData = await fetch("http://localhost:5000/api/v1/users/register", {
          method: "POST",
          credentials: 'include',
          body: JSON.stringify(userPass), // object that was in state in CreateAccount
          headers: {
            "Content-Type": "application/json"
          }
        })
        const registration = await registerData.json();
        if(registration.status === 200) {
          this.setState({
            username: registration.data.username,
            userID: registration.data._id,
            loggedIn: true,
            registerFail: false,
            loginFail: false
          })
        } else {
          this.setState({
            registerFail: true
          })
        }
      } catch (err) {
        console.error(err, ' error with register() in App.js')
      }
    } else {
      this.setState({
        registerFail: true
      })
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
    return (
      <div className="app">
        <Header loggedIn={this.state.loggedIn}/>
      {
        this.state.errorMsg
        ?
        <p>{this.state.errorMsg}</p>
        :
        null
      }

        <div className='MainContainer'>

          <div className="mapContainer">

            <Maps
              containerElement={<div style={{ height: `80vh` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg&callback=initMap" loadingElement={<div style={{ height: `100%` }} />}
            />

          </div>

          <div className='sidebar'>

            <Switch>

              <Route exact path='/' component={ FilterContainer }/>
              <Route 
                exact path='/login' 
                render={()=><Login loginSubmit={this.loginSubmit} loggedIn={this.state.loggedIn} loginFail={this.state.loginFail} />}
              />
              <Route exact path='/register' 
                render={() => <CreateAccount register={this.register} loggedIn={this.state.loggedIn} registerFail={this.state.registerFail}/>}
              />
              <Route exact path='/account' 
                render={() => <ViewAccount userID={this.state.userID} updateUserInfo={this.updateUserInfo} username={this.state.username} allJobs={this.state.allJobs} loggedIn={this.state.loggedIn}/>}
              />
              <Route exact path='/addgrind'
                render={() => <NewJob updateJobs={this.updateJobs} userID={this.state.userID}  />}
              />

            </Switch>

          </div>

        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
