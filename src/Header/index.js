import React, { Component } from "react";

function Header() {
  return (

      <header>
        <img src="Images/bullhorn-solid.svg"></img>
        <h2>FineGrind</h2>
        <h3><a href="/register">Create</a></h3>
        <h3><a href="/login">Login</a></h3>
        <h3><a href="#">Contact</a></h3>
      </header>

  )
}

export default Header;
