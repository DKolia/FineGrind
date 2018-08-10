import React, { Component } from "react";


function Contact () {
  render(){
      return (
        <div>
          <h1>Contact info</h1>
          <div>
            <p>fineGrind is built using the latest web technologies by Badal Moradia and David Kolia in Chicago. We would be happy to answer any questions and you can view our LinkedIn profiles below. We'd be happy to answer any qestions.</p>
            <a href="https://www.linkedin.com/in/davidkolia/">
              <img className="svg svgSize3" src="../Images/profile.svg"></img>
              <p>David Kolia</p>
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/badal-moradia/">
              <img className="svg svgSize3" src="../Images/profile.svg"></img>
              <p>Badal Moradia</p>
            </a>
          </div>

        </div>
      )
  }
}


export default Contact;
