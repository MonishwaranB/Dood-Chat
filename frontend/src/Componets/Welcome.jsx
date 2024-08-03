import React from 'react';
import logo from '../Images/chat-i.png';
import { useSelector } from "react-redux";

function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
        <img src={logo} alt="logo"  className='welcome-logo' />
        <p>View and text directly to people presesnt in the chat rooms.</p>
    </div>
  )
}

export default Welcome;