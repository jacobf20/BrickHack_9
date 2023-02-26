import React, { useState, setState } from 'react';
import logo from '.././RunningThoughts.PNG';
import coach from ".././coach.pdf"


export default function Home(props) {
  const user = props.user

  return(
    <>
      Hello {user}, we've been expecting you for some time now
      {/* <div className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
      {/* </div> */}
      {/* <img src={coach} className={"Coach-Warth"} alt="warth" style={{
        "position": "fixed",
        "bottom": 0,
        "right": 0
      }} /> */}
    </>
  )
}