import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Log In</h1>
       <form>
          <input type='text' placeholder='Email'></input>
          <br></br>
          <input type='text' placeholder='Password'></input>
          <br></br>

          <button type='submit'>Submit</button>
       </form>
    </div>
  )
}
