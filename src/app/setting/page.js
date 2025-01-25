"use client"
import React, { useState } from 'react'
import Nav from '../components/Nav'
// import { StyleContext } from '../components/mycontext'
// import Login from '../components/login'


const Setting = () => {
  const [log_color, setLogColor] = useState("");
  const [log_background_color, setLogBackgroundColor] = useState("");
  const [inp_background_color, setInpBackgroundColor] = useState("");
  const [inp_text_color, setInpTextColor] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLogColor(localStorage.getItem("log_color") || "");
      setLogBackgroundColor(localStorage.getItem("log_background_color") || "");
      setInpBackgroundColor(localStorage.getItem("inp_background_color") || "");
      setInpTextColor(localStorage.getItem("inp_text_color") || "");
    }
  }, []);

    const update=()=>{
      if (typeof window !== "undefined") {
        localStorage.setItem("log_color",log_color)
      localStorage.setItem("log_background_color",log_background_color)
      localStorage.setItem("inp_background_color",inp_background_color)
      localStorage.setItem("inp_text_color",inp_text_color)
      }
      

    }
  return (
    <>
      <div className='setting_top'>
      {/* <Nav /> */}
      </div>
    <div className='setting_con'>

        <p> login page text color</p>
      <input type='color' value={log_color} onChange={(e)=>{setlog_color(e.target.value)}}/>
      <br/><br/>
      <p> login page background_color color</p>
      <input type='color' value={log_background_color} onChange={(e)=>{setlog_background_color(e.target.value)}}/>
      <br/><br/>
      <p> color input</p>
      <input type="reset"  onChange={update}/>
      <br/><br/>
      <p> input background_color </p>
      <input type='color' value={inp_background_color} onChange={(e)=>{setinp_background_color(e.target.value)}}/>
      <br/><br/>
      <p> input text color </p>
      <input type='color' value={inp_text_color} onChange={(e)=>{setinp_text_color(e.target.value)}}/>
      <br/><br/>
      <button onClick={update}>  update </button>
        Setting
    </div></>
  )
}

export default Setting