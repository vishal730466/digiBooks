"use client"
import React from 'react'
import Link from 'next/link'
import './nav_style.css'

import { useRef, useEffect, useState } from 'react';

export const Nav = () => {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);


 

  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      const elementWidth = divElement.offsetWidth;
      setWidth(elementWidth);
    }

    //move
    const navelement = document.getElementById('myDiv');

    const touchMoveHandler = (event) => {
      const touch = event.touches[0];

      navelement.style.position = 'absolute';
      navelement.style.left = touch.clientX - 50 + 'px';
      navelement.style.top = touch.clientY - 50 + 'px';

    //set top and bottom
      let topval = navelement.style.top ;
      let top_intval= parseInt(topval)
      if (top_intval < 100 ) {
        navelement.style.top = '100px'
      }
      else if(top_intval > 500){
        navelement.style.top = '500px'
      }
      
   //   console.log(top_intval)
      
      //set left and right
      let leftval = navelement.style.left ;
      let left_intval= parseInt(leftval)
      if (left_intval < 0 ) {
        navelement.style.left = '0px'
      }
      else if(left_intval > 150){
        navelement.style.left = '150px'
      }
      
     // console.log(left_intval)
    };
    

    const createNewElement = () => {
      const newDiv = document.createElement('div');
      newDiv.textContent = '';
      newDiv.style.position = 'absolute';
      navelement.appendChild(newDiv);
    };

    navelement.addEventListener('touchmove', touchMoveHandler);

    // Create a new element every second
    const interval = setInterval(createNewElement, 1000);

    return () => {
      navelement.removeEventListener('touchmove', touchMoveHandler);
      clearInterval(interval);
    };


  }, []);

  function Toggle() {
    var divs = document.getElementsByClassName("toggle");
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].style.display === "none" ) {
        divs[i].style.display = "block";
      }/*
      else if( divs[i].style.display === ""){
        divs[i].style.display = "none";
      } */
      else {
        divs[i].style.display = "none";
      }
    }
    
  }
  //move
  const handleClick = () => {
    console.log('hello');
  };

  if (width > 500) {

    return (

      <div id='mynav'>

        <ul className='nav' > 
          <Link href="/"><li className="myul"> Home</li></Link>
          <Link href="/about"> <li className="myul">About</li></Link>
          <Link href="/cart"> <li className="myul">Contact</li></Link>
          <Link href="/Move"> <li className="myul">Setting</li></Link> 
        </ul>
        <div ref={divRef} style={{ width: "100%", color: "red" ,display:"none"}}>

        </div>
      </div>

    )
  }

  else {
    return (
      <div ref={divRef} style={{ width: "100%" }}>
        <div onClick={Toggle} > 
        <ul id="myDiv" className='m_nav' onClick={handleClick} > <div className='toggle' >

          <Link href="/"><li className="ml1" style={{animation:"a2 1s 1 "}} > Home</li></Link>
          <Link href="/about"> <li className="ml2" style={{animation:"a2 1s 1 "}} >About</li></Link>
          <Link href="/"> <li className="ml3" style={{animation:"a1 1s 1 "}}>Contact</li></Link>
          <Link href="/"> <li className="ml4" style={{animation:"a1 1s 1"}}>Setting</li></Link> 
          <div className='navstyle' style={{animation:"a3 1s 1 "}}></div>
          </div>
        </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
