import React, { Component } from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (

      <header>
        <img src="Images/bullhorn-solid.svg"></img>
        <h2>FineGrind</h2>

        <Link to="/register">Create Account</Link>
        <Link to="/login">Login</Link>
        <h3><a href="#">Contact</a></h3>
      </header>

  )
}

export default Header;
