import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      emaillogin: "",
      passwordlogin: "",
      submitted: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginSubmit(this.state);
  }

  exit = (e) => {
    this.setState({
      submitted: true
    })
  }

  render(){
    if(this.props.loggedIn || this.state.submitted) {
      return(
        <Redirect to={'/'} />
      )
    } else {
      return (
        <div>
          <a onClick={this.exit}><img alt='X' className="svg svgSize3" src="../Images/times-circle-regular.svg"></img></a>
          <h1>Please Login to post a FineGrind</h1>
          <p>Login below to begin posting a FineGrind opportunity. If you don't have an account yet, please click <a href="/register">here</a> to create one for free.</p>
          <form onSubmit={this.handleSubmit}>
            <input type="email" name="emaillogin"onChange={this.handleChange} value={this.state.email} placeholder="enter email" />
            <input type="password" name="passwordlogin"onChange={this.handleChange} value={this.state.password} placeholder="enter password" />
            <input type="submit" name="submit" />
          </form>
          {this.props.loginFail ? <small>Incorrect Username or Password</small> : null}
      </div>
      )
    }
  }
}

export default Login;
