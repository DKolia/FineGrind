import React, { Component } from "react";

class CreateAccount extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
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
    this.props.login(this.state.email);
  }


  render(){
    return (
      <div>
        <img src="./Images/times-circle-regular.svg"></img>
        <h1>Begin posting FindGrind jobs.</h1>
        <p>By signing up for our free service, you will be able to post jobs in your area. Please fill out the below to begin.</p>
        <p>Please enter your email address, a unique password, and confirm the password.</p>
        <form>
          <input type="text" id="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="enter email" />
          <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="enter password" />
          <input type="password" id="confirm password" name="confirmpassword" onChange={this.handleChange} value={this.state.confirmpassword}  placeholder="confirm password" />
          <input type="submit" name="submit" />
        </form>
      </div>
    )
  }

}

export default CreateAccount;
