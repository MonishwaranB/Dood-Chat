import React from 'react';
import logo from '../Images/chat-i.png'
import { Button, TextField } from '@mui/material';

function Login() {
  return (
    <div className='login-container'>
      <div className='image-container'>
          <img src={logo} alt="Logo"  className='welcome-logo'/>
      </div>
      <div className='login-box'>
        <p style={{paddingBottom:"20px", fontSize:'2vw'}}>Login to your Account</p>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" type="password" autoComplete="current-password" variant="outlined" />
        <Button variant="outlined" style={{color:'rgb(56, 200, 248)'}}>Login</Button>

      </div>
    </div>
  )
}

export default Login