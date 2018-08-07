import React, { Component } from "react";

class Login extends Component {
  constructor(){
    super();
    this.state = {
      emaillogin: "",
      passwordlogin: ""
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
        <h1>Please Login to post a FineGrind</h1>
        <p>Login below to begin posting a FineGrind opportunity. If you don't have an account yet, please click <a href="#">here</a> to create one for free.</p>
        <form>
          <input type="text" id="email" name="emaillogin"onChange={this.handleChange} value={this.state.email} placeholder="enter email" />
          <input type="password" id="password" name="passwordlogin"onChange={this.handleChange} value={this.state.password} placeholder="enter password" />
          <input type="submit" name="submit" />
        </form>
    </div>
    )
  }
}

export default Login;
