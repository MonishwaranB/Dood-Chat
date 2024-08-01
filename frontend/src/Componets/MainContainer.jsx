import React from 'react';
import './MyStyles.css';
import Sidebar from './Sidebar.jsx';
import WorkArea from './WorkArea.jsx';

export default function MainContainer() {
  return (
    <div className='Main-Container'>
      <Sidebar/>
      <WorkArea/>
    </div>
  )
}
