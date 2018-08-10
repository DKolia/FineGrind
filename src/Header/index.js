import React from "react";
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (

      <header>
        <img alt='' className="svg svgSize1" src="/Images/fg_logo.svg"></img>
            {
              (props.loggedIn === false)
              ?
              <div className="links">
                <Link to="/register" >Create Account</Link>
                <Link to="/login" >Login</Link>
              </div>
              :
              <div className="links">
                <Link to="/account" >Account</Link>
                <Link to="/addgrind" >New Grind</Link>
              </div>
            }
      </header>
  )
}

export default Header;
