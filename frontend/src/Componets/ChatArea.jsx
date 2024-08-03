import React from 'react';
import { useState } from 'react';
import './MyStyles.css';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { IconButton } from '@mui/material';
import Messageothers from './Messageothers.jsx';
import Messageself from './Messageself.jsx';

function ChatArea() {
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
  
  var props=conversations[0];
  return (
    <div className='chatArea-container'>
          <div className='chatArea-header'>
            <p className='con-icon'>{props.name[0]}</p>
              <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timeStamp'>{props.timeStamp}</p>
              </div>
              <IconButton><DeleteTwoToneIcon/></IconButton>
          </div>


          <div className='messages-container'>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
          </div>

          
          <div className='text-input-area'>
            <input type="text" placeholder='Type a message' className='search-box' />
            <IconButton><SendTwoToneIcon/></IconButton>
          </div>
    </div>
  )
}

export default ChatArea;