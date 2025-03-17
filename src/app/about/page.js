import React from 'react'
import Nav from '../components/Nav'
import "./about_style.css"

const About = () => {
  return (
    <div className='about'> 
        <Nav/> 
      <div className='about_con'> 
      <div className='about_left_side'>
      <h1 className='h1'>About Us</h1>
        <p>Welcome to <strong> E-books-haven</strong>, your ultimate solution for managing, organizing, and accessing E-Books effortlessly. Our platform is designed to help readers, authors, and institutions streamline their digital book collections with ease and efficiency.</p>
        
        {/* <h2>Who We Are</h2>
        <p>At <strong> E-books-haven</strong>, we are passionate about digital reading and technology. Our team consists of book enthusiasts, tech experts, and software developers dedicated to creating a seamless experience for managing eBooks.</p> */}
        
        <h2>What We Do</h2>
        <ul>
            <li>Store and organize eBooks in PDF formats </li>
            <li>Search, Categorize for easy access</li>
            <li>Sync across multiple devices for a seamless reading experience</li>
            <li>Manage digital libraries for individuals, educational institutions</li>
            {/* <!-- <li>Securely back up and protect valuable digital collections</li> --> */}
        </ul>
        
        <h2>Our Mission</h2>
        <p>Our mission is to revolutionize the way people handle digital books by offering a smart, intuitive, and efficient platform. Whether you're a casual reader or a professional managing a large library, <strong> E-books-haven</strong> is here to simplify your eBook experience.</p>
        
        {/* <h2>Why Choose Us?</h2>
        <ul>
            <li><strong>User-Friendly Interface</strong> – A clean and intuitive design for effortless navigation</li>
            <li><strong>Cloud-Based Access</strong> – Your library is accessible anytime, anywhere</li>
            <li><strong>Multi-Device Syncing</strong> – Access your collection from any device</li>
        </ul> */}
        
        <p>Join us on our journey to make digital reading more convenient and organized. Experience the future of eBook management with <strong>E-books-haven</strong> today!</p>
        
      </div>

      
              </div>
    </div>
  )
}

export default About