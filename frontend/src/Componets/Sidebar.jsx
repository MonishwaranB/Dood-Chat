import React, {useState} from 'react';
import './MyStyles.css';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import { IconButton } from '@mui/material';
import Conversationsitem from './Conversationsitem.jsx';
import ChatArea from './ChatArea.jsx';

function Sidebar() {
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
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
        <IconButton><AccountCircleTwoToneIcon/></IconButton>   
      </div>
      <div>
        <IconButton><PersonAddRoundedIcon/></IconButton>
        <IconButton><GroupAddRoundedIcon/></IconButton>
        <IconButton><ControlPointTwoToneIcon/></IconButton>
        <IconButton><NightlightRoundOutlinedIcon/></IconButton> 
      </div>
      </div>

      <div className='sb-search'>
        <IconButton><SearchIcon/></IconButton> <input type="text" placeholder='Search' className='search-box'/> 
     
    </div>
      <div className='sb-conversations'>
        {
        conversations.map((conversation) => (
        <div key={conversation.name}> 
              <Conversationsitem props= {conversation}/>
        </div>
        ))}
       
      </div>
    </div>
  );
}

export default Sidebar;