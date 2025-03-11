import React from 'react'
import Nav from '../components/Nav'
import "./about_style.css"

const About = () => {
  return (
    <div className='about'> 
        <Nav/> 
      <div className='about_con'> 
      <div className='about_left_side'></div>

      <div className='about_right_side'>
      <h1>Contact Us</h1>
      <p>If you have any questions, please fill out the form below to get in touch with us. We'll get back to you as soon as possible.</p>

            <div>
            <input type="text" id="name" name="name" placeholder="Your Name" required/>
            <input type="email" id="email" name="email" placeholder="Your Email" required/>
                <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
           
              
              </div>    

              </div>
              </div>
    </div>
  )
}

export default About