import React, { Component } from "react";

function Login() {
  return (
    <div>
      <img src="./Images/times-circle-regular.svg"></img>
      <h1>Please Login to post a FineGrind</h1>
      <p>Login below to begin posting a FineGrind opportunity. If you don't have an account yet, please click <a href="#">here</a> to create one for free.</p>
      <form>
        <input type="text" id="email" placeholder="enter email" />
        <input type="password" id="password" placeholder="enter password" />
        <button type="subtmit">Submit</button>
      </form>
    </div>
  )
}

export default Login;
