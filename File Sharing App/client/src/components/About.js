import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
      <form action="">
        <p>Name: </p>
        <input type="text" name="name"/><br/>
        <p>Email:</p>
        <input type="email" name="email"/><br/>
        <input type="number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default About
