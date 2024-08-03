import React, {useState} from 'react';
import './MyStyles.css';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import { IconButton } from '@mui/material';
import Conversationsitem from './Conversationsitem.jsx';
import ChatArea from './ChatArea.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice.jsx';

function Sidebar() {
  const navigate =useNavigate();
  const dispatch=useDispatch();
  const lightTheme=  useSelector((state) =>state.themeKey);
  const [conversations,setConversations]=useState([
    {
      name:'Test1',
      lastMessage:'Last Message 1',
      timeStamp:'Today'
    },

    {
      name:'Test2',
      lastMessage:'Last Message 2',
      timeStamp:'Today'
    },

    {
      name:'Test3',
      lastMessage:'Last Message3',
      timeStamp:'Today'
    }
  ])

  console.log(lightTheme);
 
  return (
    <div className='sidebar-container'>
      <div className={'sb-header'+(lightTheme? '' :' dark')}>
        
        <div>
        <IconButton >
          <AccountCircleTwoToneIcon className={'icon'+((lightTheme)?'':' dark')}/></IconButton>   
      </div>
      <div>
        <IconButton onClick={()=>{navigate('users')}}>
          <PersonAddRoundedIcon className={'icon'+((lightTheme)?'':' dark')}/>
        </IconButton>
        <IconButton onClick={()=>{navigate('groups')}}>
          <GroupAddRoundedIcon className={'icon'+((lightTheme)?'':' dark')}/>
        </IconButton>
        <IconButton onClick={()=>{navigate('create-groups')}}>
          <ControlPointTwoToneIcon className={'icon'+((lightTheme)?'':' dark')}/>
        </IconButton>
        <IconButton onClick={()=>{dispatch(toggleTheme())}}>
          {lightTheme && <NightlightRoundOutlinedIcon className={'icon'+((lightTheme)?'':' dark')}/>}
          {!lightTheme && <LightModeRoundedIcon className={'icon'+((lightTheme)?'':' dark')}/>}
        </IconButton> 
      </div>
      </div>

      <div className={'sb-search'+(lightTheme? '' :' dark')}>
        <IconButton><SearchIcon/></IconButton> <input type="text" placeholder='Search' className={'search-box'+(lightTheme? '' :' dark')}/> 
     
    </div>
      <div className={'sb-conversations'+(lightTheme? '' :' dark')}>
        {
        conversations.map((conversation) => (
        <div key={conversation.name}> 
              <Conversationsitem props= {conversation} 
               />
        </div>
        ))}
       
      </div>
    </div>
  );
}

export default Sidebar;