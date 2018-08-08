import React, { Component } from "react";
import { Redirect } from 'react-router-dom'


class CreateAccount extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      confirmpassword: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle Submit was called");
    // this.props.login(this.state.email);

    // call the register function that was passed in as props
    this.props.register(this.state);
  }


  render(){
    if(this.props.loggedIn){
      return <Redirect to={'/'} />
    } else{
      return (
        <div>
          <a href='/'><img alt='X' src="../Images/times-circle-regular.svg"></img></a>
          <h1>Begin posting FindGrind jobs.</h1>
          <p>By signing up for our free service, you will be able to post jobs in your area. Please fill out the below to begin.</p>
          <p>Please enter your email address, a unique password, and confirm the password.</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="enter email" />
            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="enter password" />
            <input type="password" name="confirmpassword" onChange={this.handleChange} value={this.state.confirmpassword}  placeholder="confirm password" />
            <input type="submit" name="submit" />
          </form>
        </div>
      )
    }
  }

}

export default CreateAccount;
