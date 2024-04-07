import React from 'react'

const contact = () => {
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

export default contact
