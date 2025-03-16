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

import { IoMdHome } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Skeleton from './skeleton/page'

export const Nav = () => {
  const divRef = useRef(null);
  const navRef = useRef("")
  const mob_navRef = useRef("")
  const [width, setWidth] = useState(1000);
  const [login, setlogin] = useState(false);
  const [signup, setsignup] = useState(false);
  const [loggedin, setloggedin] = useState(false);
  const [turn , setTurn] = useState(true)
  const [mob_nav_back, setmob_nav_back]=useState(false)
  const [navelement , set_navelement] = useState(navRef.current)


  const display_form = ()=>{
    if (turn) {
      setlogin(true)
    } else{
      setloggedin(true)  
    }
  }
  // const navelement = navRef.current;

  const touchMoveHandler = (event) => {
    const touch = event.touches[0];
    // if(navelement){
    navelement.style.position = 'absolute';
    const X = Math.max(0,Math.min(touch.clientX -50,150) );
    const Y = Math.max(0,Math.min(touch.clientY - 50,500))

    navelement.style.left= `${X}px`;
    navelement.style.top=  `${Y}px`
    // }
  };
 
  useEffect(() => {

    if(window){
        setWidth(window.innerWidth)
    }
    set_navelement(navRef.current)

  }, [width,navelement]);

  function Toggle() {
    if(mob_navRef.current.style.display=="none"){
      setmob_nav_back(true);
      mob_navRef.current.style.display="block"
    }
    else{
      setmob_nav_back(false)
      mob_navRef.current.style.display="none"
    }
  }

  if(width==1000){
    return(<div></div>)
  }
  if (width > 400) {
    return (

      <nav id='mynavbar' >
          <Logcontext.Provider value={{setloggedin,setTurn,setlogin,setsignup}}> 
            
        <div className="navbar_logo">
            <img src="logo2.png"  alt="Logo" /> 
        </div>

          <Link href="/"><li > Home</li></Link>
          <Link href="/about"> <li >About</li></Link>
          <Link href="/setting"> <li >Setting</li></Link>
          <div onClick={display_form}> <li style={{cursor:"pointer"}}><b>Login</b></li></div>
       
        {/* <div ref={divRef} style={{ width: "100%", color: "red" ,display:"none"}}></div> */}
        
        {login ? <Login/> : null}
        {signup ? <SignUp/>: null}
          {loggedin? <LogOut/>:null}

        </Logcontext.Provider>
      </nav>
    )
  }

  else {
    return (
      <div ref={divRef}  style={{ width: "100%" }}>
        <div  className='mob_con'>
        
        <div id="nav_Div" ref={navRef} onTouchMove={touchMoveHandler}>
        
        <div  className='m_nav' onClick={Toggle}>
          {mob_nav_back?<ImCross style={{fontSize:"25px"}}/>: <IoMdHome  style={{fontSize:"40px"}}/>  }
          </div>
        
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
