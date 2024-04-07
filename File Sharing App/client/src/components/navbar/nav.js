import React from "react";
import  "./nav.css"

const nav = () => {
    return (
        <>
           <div className="nav">
        <ul>
          
          <li>
            <a href="./components/About.js" target='blank' >About</a>
          </li>
          <li>
            <a href="">ContactUs</a>
          </li>
          <li>
            <a href="">Premium</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
      </div>
        </>
    )
}

export default nav
