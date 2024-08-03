import React  from 'react';
import { useState } from 'react';
import './MyStyles.css';
import Sidebar from './Sidebar.jsx';
import ChatArea from './ChatArea.jsx';
import Welcome from './Welcome.jsx';
import CreateGroups from './CreateGroups.jsx';
import Users_Groups from './Users_Groups.jsx';

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
      <Users_Groups/>
      {/*<ChatArea props={conversations[0]}/> */}
      {/* <CreateGroups/> */}
      {/*<Welcome/>*/}
    </div>
  )
}
