import React from 'react';
import './MyStyles.css';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { IconButton } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <IconButton><AccountCircleTwoToneIcon/></IconButton>   
      </div>
      <div className='sb-search'>search</div>
      <div className='sb-conversations'>conver</div>
    </div>
  )
}

export default Sidebar