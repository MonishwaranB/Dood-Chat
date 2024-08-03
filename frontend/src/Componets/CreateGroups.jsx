import React from 'react';
import { IconButton } from '@mui/material';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

function CreateGroups() {
  return (
    <div className='createGroups-container'>
      <input type="text" className='search-box' placeholder='Enter Group Name' />
      <IconButton>
          <DoneOutlineRoundedIcon/> 
      </IconButton>
    </div>
  )
}

export default CreateGroups