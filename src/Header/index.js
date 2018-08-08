import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (

      <header>
        <img alt='X' src="Images/bullhorn-solid.svg"></img>
        <h2>FineGrind</h2>

        <Link to="/register">Create Account</Link>
        <Link to="/login">Login</Link>
      </header>

  )
}

export default Header;
