import React from 'react';
import { IconButton } from '@mui/material';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { useDispatch, useSelector } from "react-redux";

function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className='createGroups-container'>
      <input type="text" className='search-box' placeholder='Enter Group Name' />
      <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <DoneOutlineRoundedIcon/> 
      </IconButton>
    </div>
  )
}

export default CreateGroups