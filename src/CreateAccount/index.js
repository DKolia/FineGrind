import React, { Component } from "react";

function CreateAccount() {
  return (
    <div>
      <img src="./Images/times-circle-regular.svg"></img>
      <h1>Begin posting FindGrind jobs.</h1>
      <p>By signing up for our free service, you will be able to post jobs in your area. Please fill out the below to begin.</p>
      <p>Please enter your email address, a unique password, and confirm the password.</p>
      <form>
        <input type="text" id="email" placeholder="enter email" />
        <input type="password" id="password" placeholder="enter password" />
        <input type="password" id="confirm password" placeholder="confirm password" />
        <button type="subtmit">Submit</button>
      </form>
    </div>
  )
}

export default CreateAccount;
