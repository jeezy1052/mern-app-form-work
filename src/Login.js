import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('') 
  const [password, setPassword = useState('') 

  return (
    <div>
      <form onSubmit={registerUser}>
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
