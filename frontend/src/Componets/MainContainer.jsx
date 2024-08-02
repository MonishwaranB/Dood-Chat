import React  from 'react';
import { useState } from 'react';
import './MyStyles.css';
import Sidebar from './Sidebar.jsx';
import ChatArea from './ChatArea.jsx';

export default function MainContainer() {
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
    <div className='Main-Container'>
      <Sidebar/>
      <ChatArea props={conversations[0]}/>
    </div>
  )
}
