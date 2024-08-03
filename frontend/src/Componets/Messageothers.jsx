import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function Messageothers() {
  const lightTheme = useSelector((state) => state.themeKey);
  var props1 = {
    name:"Random user", message:"This is sample message"
  };
  return (
    <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
        <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
            <p className={"con-icon" + (lightTheme ? "" : " dark")}>{props1.name[0]}</p>
              <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>{props1.name}</p>
                <p className={"con-lastMessage" + (lightTheme ? "" : " dark")}>{props1.message}</p>
                <p className='self-timeStamp'>12:00am</p>
              </div>  
        </div>
    </div>
  )
}

export default Messageothers