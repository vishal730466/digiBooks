"use client"
import React from 'react'
import Link from 'next/link'
import './nav_style.css'
import Login from './login'
// import { createContext, useContext } from 'react'
 import Logcontext from './mycontext'
import { useRef, useEffect, useState } from 'react';
import SignUp from './signUp'
import LogOut from './logOut'


export const Nav = () => {
  const divRef = useRef(null);
  const mob_navRef = useRef("")
  const [width, setWidth] = useState(0);
  const [login, setlogin] = useState(false);
  const [signup, setsignup] = useState(false);
  const [loggedin, setloggedin] = useState(false);
  const [turn , setTurn] = useState("login")
  const [mob_nav_back, setmob_nav_back]=useState(false)


  const display_form = ()=>{
    if (turn == "login") {
      setlogin(true)
    } else if(turn== "loggedin"){
      setloggedin(true)
      
    }else{

    }
  }
 

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
      const X = Math.max(0,Math.min(touch.clientX - 50,150) );
      const Y = Math.max(70,Math.min(touch.clientY - 50,500))

      navelement.style.left= `${X}px`;
      navelement.style.top=  `${Y}px`
      
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
    setmob_nav_back(!mob_nav_back)
    var divs = document.getElementsByClassName("toggle");
    // for (var i = 0; i < divs.length; i++) {
    //   if (divs[i].style.display === "none" ) {
    //     divs[i].style.display = "block";
    //   }
    //   else {
    //     divs[i].style.display = "none";
    //   }
    // }
    
  }
  //move
  const handleClick = () => {
    console.log('hello');
  };

  if (width > 500) {

    return (

      <div id='mynav'>
            <Logcontext.Provider value={{setloggedin,setTurn,setlogin,setsignup}}> 

        <ul className='nav' > 
          <Link href="/"><li className="myul"> Home</li></Link>
          <Link href="/about"> <li className="myul">About</li></Link>
          <Link href="/setting"> <li className="myul">Setting</li></Link>
          <Link href="/" onClick={display_form}> <li className="myul">Login</li></Link>
        </ul>
        <div ref={divRef} style={{ width: "100%", color: "red" ,display:"none"}}>

        </div>
        
        {login ? <Login/> : null}
        {signup ? <SignUp/>: null}
          {loggedin? <LogOut/>:null}

        </Logcontext.Provider>
      </div>

    )
  }

  else {
    return (
      <div ref={divRef} style={{ width: "100%" }}>
        {mob_nav_back && <div id='mob_nav_background' ref={mob_navRef}></div>} 
        <div onClick={Toggle} >
        
        <ul id="myDiv" className='m_nav' onClick={handleClick} > 
        
        this is nav
       
        {/* <div className='toggle' >

          <Link href="/"><li className="ml1" style={{animation:"a2 1s 1 "}} > Home</li></Link>
          <Link href="/about"> <li className="ml2" style={{animation:"a2 1s 1 "}} >About</li></Link>
          <Link href="/"> <li className="ml3" style={{animation:"a1 1s 1 "}}>Contact</li></Link>
          <Link href="/"> <li className="ml4" style={{animation:"a1 1s 1"}}>Setting</li></Link> 
          <div className='navstyle' style={{animation:"a3 1s 1 "}}></div>
          </div> */}

        </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
