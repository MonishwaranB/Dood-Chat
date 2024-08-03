import React from 'react';
import './MyStyles.css';
import logo from '../Images/chat-i.png'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Users() {
  return (
  <div className='list-container'>
    <div className='ug-header'>
      <img src={logo} alt="Logo" style={{ height: '2rem', width: '2rem', marginLeft: '10px', marginBottom: '1px' }} />
      <p className='ug-title'>Online Users</p>
    </div>

    <div className='sb-search'>
      <IconButton><SearchIcon /></IconButton>
      <input type="text" placeholder='Search' className='search-box' />
    </div>

    <div className='ug-list'>
      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>

      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>

      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>

      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>

      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>

      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>

      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>

      <div className='list-tem'>
        <p className='con-icon'>T</p>
        <p className='con-title'>Test User</p>
      </div>
    </div>
  </div>
  )
}

export default Users