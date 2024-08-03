import React  from 'react';
import { useState } from 'react';
import './MyStyles.css';
import Sidebar from './Sidebar.jsx';
import ChatArea from './ChatArea.jsx';
import Welcome from './Welcome.jsx';
import CreateGroups from './CreateGroups.jsx';
import Users_Groups from './Users_Groups.jsx';
import { Outlet } from 'react-router-dom';

export default function MainContainer() {
 
  return (
    <div className='Main-Container'>
      <Sidebar/>
      <Outlet/>
      {/*<Users_Groups/>*/}
      {/*<ChatArea props={conversations[0]}/> */}
      {/* <CreateGroups/> */}
      {/*<Welcome/>*/}
    </div>
  )
}
