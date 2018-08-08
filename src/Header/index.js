import React from "react";
import { Link } from 'react-router-dom'

const Header = (props) => {
  console.log(props.loggedIn, "is props.loggedIn in Header")
  return (

      <header>
        <img alt='X' src="Images/bullhorn-solid.svg"></img>
        <h1>FineGrind</h1>

            {
              (props.loggedIn === false)
              ?
              <div>
                <Link to="/register" >Create Account</Link>
                <Link to="/login" >Login</Link>
              </div>
              :
              <div>
                <Link to="/account" >Account</Link>
                <Link to="/addgrind" >New Grind</Link>
              </div>
            }
      </header>
  )
}

export default Header;
