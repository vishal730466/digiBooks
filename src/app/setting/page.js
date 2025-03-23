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
  const [Theme, set_theme] = useState("");
  const [width, set_width] = useState(1000);
  const [color, set_color] = useState("white");
  const [back_color, set_backcolor] = useState("white");
  
  
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

    const light=()=>{
      if(window){
        console.log("set theme light");
        localStorage.setItem("Theme","light")
        set_theme("light")
      }
    }
    const black=()=>{
      if(window){
        console.log("set theme black"); 
        localStorage.setItem("Theme","black")
        set_theme("black")
      }
    }

    useEffect(()=>{
      if(window){
      const theme = localStorage.getItem("Theme")
      set_theme(theme)
        set_width(window.innerWidth)
      }
    },[])

    useEffect(()=>{
      if(Theme=="light"){
        set_color("black")
        set_backcolor("white")
      }
      else if(Theme=="black"){
        set_color("white")
        set_backcolor("black")
      }
    },[Theme])

    if(width==1000){
      return<h1>loading</h1>
    }
    if(width>450){
      
  return (
    <>
      <div className='setting_top'>
      <Nav />
      </div>
      <div className="setting" style={{color:color, backgroundColor:back_color}}>
        <div className='setting_con'>
          <h2> Themes </h2>
        <div className='theme_con'>
          <div className={Theme=="light"?"active_theme theme":"theme"} onClick={light}>Light</div>
          <div className={Theme=="dark"?"active_theme theme":"theme"} >Dark</div>
          <div className={Theme=="black"?"active_theme theme":"theme"} onClick={black}>Black</div>
        </div>
        <div className='other_setting'>
          <hr/>
          <p>Account setting</p>
          <p>Give Feedback</p>
          <p>Font size</p>
        </div>

       </div>
    </div>
    </>
  )
    } else{
      return (
        <div className='setting_mob' style={{color:color, backgroundColor:back_color}}>
          {/* <div className='setting_top'> */}
          <Nav />
          {/* </div> */}
          <div className="mob_setting">
            <div className='setting_con_mob'>
              <h2> Themes </h2>
            <div className='mob_theme_con'>
              <div className={Theme=="light"?"active_theme theme":"theme"} onClick={light}>Light</div>
              <div className={Theme=="dark"?"active_theme theme":"theme"} >Dark</div>
              <div className={Theme=="black"?"active_theme theme":"theme"} onClick={black}>Black</div>
            </div> 
            <div className='other_setting'>
            <hr/>
              <p>Account setting</p>
              <p>Give Feedback</p>
              <p>Font size</p>
            </div>
    
           </div>
        </div>
        </div>
      )
    }
    
}

export default Setting