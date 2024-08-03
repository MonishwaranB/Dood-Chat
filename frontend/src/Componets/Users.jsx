import React from 'react';
import './MyStyles.css';
import logo from '../Images/chat-i.png'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";

function Users() {

  const lightTheme = useSelector((state) => state.themeKey);

  return (
  <div className={'list-container'+(lightTheme? '' :' dark')}>
    <div className={"ug-header" + (lightTheme ? "" : " dark")}>
      <img src={logo} alt="Logo" style={{ height: '2rem', width: '2rem', marginLeft: '10px', marginBottom: '1px' }} />
      <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Users</p>
    </div>

    <div className={"sb-search" + (lightTheme ? "" : " dark")}>
      <IconButton className={"icon" + (lightTheme ? "" : " dark")}><SearchIcon /></IconButton>
      <input type="text" placeholder='Search' className={"search-box" + (lightTheme ? "" : " dark")}/>
    </div>

    <div className='ug-list'>
      <div className={'list-tem'+(lightTheme? '' :' dark')}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
        <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
      </div>

      
    </div>
  </div>
  )
}

export default Users