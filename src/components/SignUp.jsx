import React from 'react'

export default function SignUp() {
  return (
    <div>
         <div>
        <h1>Sign up</h1>
       <form>
          <input type='text' placeholder='Name'></input>
          <br></br>
          <input type='text' placeholder='Email'></input>
          <br></br>
          <input type='text' placeholder='Password'></input>
          <br></br>

          <button type='submit'>Submit</button>
       </form>
      </div>
    </div>
  )
}
