"use client"
import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import "./setting_style.css"
// import { StyleContext } from '../components/mycontext'
// import Login from '../components/login'


const Setting = () => {
  const [log_color, setLogColor] = useState("");
  const [log_background_color, setLogBackgroundColor] = useState("");
  const [inp_background_color, setInpBackgroundColor] = useState("");
  const [inp_text_color, setInpTextColor] = useState("");
 
  
  useEffect(() => {
    if (window ) {
      setLogColor(localStorage.getItem("log_color") || "");
      setLogBackgroundColor(localStorage.getItem("log_background_color") || "");
      setInpBackgroundColor(localStorage.getItem("inp_background_color") || "");
      setInpTextColor(localStorage.getItem("inp_text_color") || "");
    }
  }, []);

    const update=()=>{
      if (window ) {
        localStorage.setItem("log_color",log_color)
      localStorage.setItem("log_background_color",log_background_color)
      localStorage.setItem("inp_background_color",inp_background_color)
      localStorage.setItem("inp_text_color",inp_text_color)
      }
      

    }
    const theme=()=>{
      localStorage.setItem("Theme","light")
    }
    const dark=()=>{
      localStorage.setItem("Theme","dark")
    }

  return (
    <>
      <div className='setting_top'>
      <Nav />
      </div>
      <div className="menu">
        <div className="menu-header">
            <h2 className="menu-header-title">Themes</h2>
            <div className="theme-switcher">
                <input type="radio" name="themes" id="light-theme"/>
                <label htmlFor="light-theme">
                    <span>
                        <ion-icon name="sunny"></ion-icon>
                        Light
                    </span>
                </label>
                <input type="radio" name="themes" id="dark-theme"/>
                <label htmlFor="dark-theme">
                    <span>
                        <ion-icon name="moon"></ion-icon>
                        Dark
                    </span>
                </label>
                <input type="radio" name="themes" id="black-theme"/>
                <label htmlFor="black-theme">
                    <span>
                        <ion-icon name="contrast"></ion-icon>
                        Black
                    </span>
                </label>
                <span className="slider"></span>
            </div>
        </div>
        <div className="menu-body">
            <a href="index.html"><ion-icon name="settings-outline"></ion-icon>Account Setting</a>
            <a href="feedback.html"><ion-icon name="chatbox-ellipses-outline"></ion-icon>Give FeedBack</a>
            <a href="font.html"><ion-icon name="information-circle-outline"></ion-icon>Font Size</a>
            {/* <!-- <a href="books.html"><ion-icon name="book-outline"></ion-icon>Books Section</a> --> */}
        </div>
    </div>
    {/* <div className='setting_con'>

        <p> login page text color : {log_color}</p> 
      <input type='color' value={log_color} onChange={(e)=>{setLogColor(e.target.value)}}/>
      <br/><br/>
      <p> login page background_color color : {log_background_color}</p>
      <input type='color' value={log_background_color} onChange={(e)=>{setLogBackgroundColor(e.target.value)}}/>
      <br/><br/>
      <p> color input</p>
      <input type="reset"  onChange={update}/>
      <br/><br/>
      <p> input background_color :  {inp_background_color}</p>
      <input type='color' value={inp_background_color} onChange={(e)=>{setInpBackgroundColor(e.target.value)}}/>
      <br/><br/>
      <p> input text color : {inp_text_color}</p>
      <input type='color' value={inp_text_color} onChange={(e)=>{setInpTextColor(e.target.value)}}/>
      <br/><br/>
      <button onClick={update}>  update </button>
        <button onClick={theme}>Theme</button>
        <button onClick={dark}>dark</button>
    </div> */}


    </>
  )
}

export default Setting