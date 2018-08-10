import React, { Component } from "react";
import { Redirect } from 'react-router-dom'


class CreateAccount extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      submitted: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // call the register function that was passed in as props
    this.props.register(this.state);
  }

  exit = (e) => {
    this.setState({
      submitted: true
    })
  }


  render(){
    if(this.props.loggedIn || this.state.submitted){
      return <Redirect to={'/'} />
    } else{
      return (
        <div>
          <a onClick={this.exit}><img alt='X' class="svg svgSize3" src="../Images/times-circle-regular.svg"></img></a>
          <h1>Begin posting FindGrind jobs.</h1>
          <p>By signing up for our free service, you will be able to post jobs in your area. Please fill out the below to begin.</p>
          <p>Please enter your email address, a unique password, and confirm the password.</p>
          <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="enter email" />
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="enter password" />
            <input type="password" name="confirmpassword" onChange={this.handleChange} value={this.state.confirmpassword}  placeholder="confirm password" />
            <input type="submit" name="submit" />
          </form>
          {this.props.registerFail ? <small>Registration Error. Please try another username and confirm passwords match.</small>: null}
        </div>
      )
    }
  }

}

export default CreateAccount;
