"use client"
import React, { useState, useEffect } from 'react'
import "./contact_style.css"
import Nav from '../components/Nav'
const Contact = () => {
  
  const [Theme, set_theme] = useState("light")
  const [color, set_color] = useState("black")
  const [back_color, set_backcolor] = useState("light")

  const send = ()=>{
    alert("message sent")
  }


  useEffect(()=>{
    set_color(localStorage.getItem("text_color"))
    set_backcolor(localStorage.getItem("back_color"))
    console.log("bakcolor", back_color);

},[Theme])

  return (
    <div className='contactPage' style={{backgroundColor:back_color,color:color}}>
      <Nav/>
      <div className='contact_container' style={{borderColor:color}}> 
        <div className="image-section"> <img src="login.png" style={{height:"500px"}} alt="" /></div>

        <div className="form-section" style={{backgroundColor:back_color,color:color,borderLeftColor:color}}>
          <h1 className='form-section_heading'>Contact Us</h1>
          <p>If you have any questions, please fill out the form below to get in touch with us. We'll get back to you as soon as possible.</p>
          <div className="contact-form" >
            <input className='contact_inp' type="text" id="name" name="name" placeholder="Your Name" required />
            <input className='contact_inp' type="email" id="email" name="email" placeholder="Your Email" required />
            <textarea className='contact_inp' id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            <button className='contact_btn' onClick={send}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact