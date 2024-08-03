import React from 'react';
import { useState } from 'react';
import './MyStyles.css';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import { IconButton } from '@mui/material';
import Messageothers from './Messageothers.jsx';
import Messageself from './Messageself.jsx';
import { useSelector } from 'react-redux';

function ChatArea() {
  const lightTheme = useSelector((state) => state.themeKey);

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
    <div className={"chatArea-container" + (lightTheme ? "" : " dark")}>
          <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
            <p className={"con-icon" + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
              <div className={"header-text" + (lightTheme ? "" : " dark")}>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>{props.name}</p>
                <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>{props.timeStamp}</p>
              </div>
              <IconButton className={"icon" + (lightTheme ? "" : " dark")}><DeleteTwoToneIcon/></IconButton>
          </div>


          <div className={"messages-container" + (lightTheme ? "" : " dark")}>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
          </div>

          
          <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
            <input type="text" placeholder='Type a message' className={"search-box" + (lightTheme ? "" : " dark")} />
            <IconButton  className={"icon" + (lightTheme ? "" : " dark")}><SendTwoToneIcon/></IconButton>
          </div>
    </div>
  )
}

export default ChatArea;