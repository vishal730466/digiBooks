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
  const navRef = useRef("")
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
    }
  }
  const navelement = navRef.current;

  const touchMoveHandler = (event) => {
    const touch = event.touches[0];

    navelement.style.position = 'absolute';
    const X = Math.max(0,Math.min(touch.clientX -50,150) );
    const Y = Math.max(70,Math.min(touch.clientY - 50,500))

    navelement.style.left= `${X}px`;
    navelement.style.top=  `${Y}px`
    
  };
 
  useEffect(() => {

    // const divElement = divRef.current;

    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }

    //move
    // const navelement = document.getElementById('nav_Div');
    //const navelement = navRef.current;

    // const touchMoveHandler = (event) => {
    //   const touch = event.touches[0];

    //   navelement.style.position = 'absolute';
    //   const X = Math.max(0,Math.min(touch.clientX -50,150) );
    //   const Y = Math.max(70,Math.min(touch.clientY - 50,500))

    //   navelement.style.left= `${X}px`;
    //   navelement.style.top=  `${Y}px`;
    // };
    
    // navelement.addEventListener('touchmove', touchMoveHandler);

    // Create a new element every second
    // const interval = setInterval(createNewElement, 1000);

    // return () => {
    //   navelement.removeEventListener('touchmove', touchMoveHandler);
    //   clearInterval(interval);
    // };


  }, []);

  function Toggle() {
    // const navelement = document.getElementsByClassName("ml1");
    if(mob_navRef.current.style.display=="none"){
      setmob_nav_back(true);
      mob_navRef.current.style.display="block"
    }
    else{
      setmob_nav_back(false)
      mob_navRef.current.style.display="none"
    }
  }

  if (width > 400) {
    return (

      <div id='mynav' >
            <Logcontext.Provider value={{setloggedin,setTurn,setlogin,setsignup}}> 

        <ul className='nav' >
          <Link href="/"><li className="myul"> Home</li></Link>
          <Link href="/about"> <li className="myul">About</li></Link>
          <Link href="/setting"> <li className="myul">Setting</li></Link>
          {/* <Link href="/" onClick={display_form}> <li className="myul">Login</li></Link> */}
          <div onClick={display_form}> <li className="myul"><b>Login</b></li></div>
        </ul>
       
        <div ref={divRef} style={{ width: "100%", color: "red" ,display:"none"}}></div>
        
        {login ? <Login/> : null}
        {signup ? <SignUp/>: null}
          {loggedin? <LogOut/>:null}

        </Logcontext.Provider>
      </div>
    )
  }

  else {
    return (
      <div ref={divRef}  style={{ width: "100%" }}>
        {mob_nav_back && <div id='mob_nav_background' ></div>} 
        <div  className='mob_con'>
        
        <div id="nav_Div" ref={navRef} onTouchMove={touchMoveHandler}>
        
        <div  className='m_nav' onClick={Toggle}>a</div>
        
        <div ref={mob_navRef}>
        <div className='ml1'><Link href="/">H</Link></div>
        <div className='ml2'><Link href="/about">A</Link></div>
        <div className='ml3'><Link href="setting">S</Link></div>
        <div className='ml4'>L</div >
        </div>
      
        </div>
        </div>

      </div>
    )
  }
}

export default Nav;
