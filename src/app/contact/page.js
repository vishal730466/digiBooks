"use client"
import React from 'react'
import "./contact_style.css"
import Nav from '../components/Nav'

const Contact = () => {
  return (
    <div className='contactPage'>
      <Nav/>
      <div className='container'>
        <div className="image-section"> <img src="login.png" style={{height:"500px"}} alt="" /></div>

        <div className="form-section">
          <h1 className='form-section_heading'>Contact Us</h1>
          <p>If you have any questions, please fill out the form below to get in touch with us. We'll get back to you as soon as possible.</p>
          <div className="contact-form">
            <input className='contact_inp' type="text" id="name" name="name" placeholder="Your Name" required />
            <input className='contact_inp' type="email" id="email" name="email" placeholder="Your Email" required />
            <textarea className='contact_inp' id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            <button className='contact_btn'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact