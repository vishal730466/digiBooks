'use client';

import React, { useEffect, useState } from 'react';
import './login_style.css';
import Nav from '../Nav';


import {  MdKeyboardBackspace } from "react-icons/md";
import  {setlogin} from '@/app/redux/loginSlice'
import { useDispatch, useSelector } from 'react-redux';
// import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';
import GitHub from '../login_page';

// ---------------------  Login -------------------------------------------------------
const Login = () => {
  const [active, setActive] = useState(false);
  const [name , set_name] = useState("")
  const [password , set_password] = useState("")
  const [C_password , set_C_password] = useState("")
  const [device_width,set_device_width]=useState(1000)

  
  const dispatch = useDispatch();
  const loginval=useSelector((state) => state.login.value);
  

  useEffect(()=>{
    if(window){
      set_device_width(window.innerWidth)
    }
  },[])

  const login=async()=>{
    // console.log("login fun running");
    let res=await fetch("/api/hello",{
      method:"POST",
      body:JSON.stringify({name ,password, login:true})
    })
    res=await res.json()
    console.log(res);

    if(res.success){
      alert("login")
      dispatch(setlogin(res.result.name))
    }
    else{
      alert("not login")
    }
  }
// ------------------ SIGN UP ---------------------------------------------
const signup =async()=>{
  // console.log(name,password)
  if (password == C_password) {
    let result= await fetch("/api/hello",{
      method:"POST",
      body:JSON.stringify({name,password,signup:true})
    })

    let fresult = await result.json();
    // let fresult = result
    console.log(fresult)
    
    if(fresult.success==true){
      alert("signup")
      // myval.setsignup(false)
    }
    else if(fresult.success=="exist"){
      alert("User name already exist")
    }
  } else {
    alert("password and confirm password not match")
  }

}
// ---------------------------------------------------------------------------
if(device_width==1000){
  return<h1>Loadig</h1>
}
if(device_width>450){
  return (
    <div className='mylogin_page'>
      
      <Link href="/" className='login_back_btn' ><MdKeyboardBackspace style={{fontSize:"80" }} /></Link>
      
    <div className={active ? 'container active' : 'container'} id="container">
      {/* Sign Up Form */} 
      <div className="form-container sign-up">
        <form className="con_form" onSubmit={(e) => e.preventDefault()}>
          <h1>Create Account</h1> 
          loginval {loginval} w{device_width}
          {/* <button onClick={() => dispatch(setlogin())}>Login</button> */}
          <div className="social-icons">
          
          <GitHub/>
          </div>
          {/* <span>or use name for registration</span> */}
          <input type="text" placeholder="Name" value={name} onChange={(e)=>set_name(e.target.value)}/>
          {/* <input type="email" placeholder="Email" /> */}
          <input type="password" placeholder="Password" value={password} onChange={(e)=>set_password(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={C_password} onChange={(e)=>set_C_password(e.target.value)} />
          <button type="submit" onClick={signup}>Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          <div className="social-icons">
            
         <GitHub/>
          </div>
          <span>or use your name and password</span>
          <input type="text" value={name} onChange={(e)=>set_name(e.target.value)} placeholder="Name" />
          <input type="password" value={password} onChange={(e)=>set_password(e.target.value)} placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button  onClick={login}>Sign In </button>
        </form>
      </div>

      {/* Toggle Panel */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button
              className="hidden"
              onClick={() => setActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button
              className="hidden"
              onClick={() => {setActive(true);}}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
} else{
  return (
    <div className='mylogin_page'>
      
      <Link href="/" className='mob_login_back_btn' ><MdKeyboardBackspace style={{fontSize:"80" }} /></Link>
      
    <div className={active ? 'mob_container active' : 'mob_container'} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form className="con_form" onSubmit={(e) => e.preventDefault()}>
          <h1>Create Account</h1> 
          {/* loginval {loginval} w{device_width} */}
          {/* <button onClick={() => dispatch(setlogin())}>Login</button> */}
          <div className="social-icons">
          
          <GitHub/>
          </div>
          {/* <span>or use name for registration</span> */}
          <input className='mob_container_input' type="text" placeholder="Name" value={name} onChange={(e)=>set_name(e.target.value)}/>
          {/* <input type="email" placeholder="Email" /> */}
          <input className='mob_container_input'  type="password" placeholder="Password" value={password} onChange={(e)=>set_password(e.target.value)} />
          <input className='mob_container_input' type="password" placeholder="Confirm Password" value={C_password} onChange={(e)=>set_C_password(e.target.value)} />
          <button className='signup_btn' type="submit" onClick={signup}>Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container mob_sign-in">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className='signin_heading'>Sign In</h1>
          <div className="social-icons">
            
         <GitHub/>
          </div>
          {/* <span>or use your name and password</span> */}
          <input className='mob_container_input' type="text" value={name} onChange={(e)=>set_name(e.target.value)} placeholder="Name" />
          <input className='mob_container_input' type="password" value={password} onChange={(e)=>set_password(e.target.value)} placeholder="Password" />
          <button className='login_btn'  onClick={login}>Sign In </button>
          <p className='forget_pass'>Forget Password?</p>
        </form>
      </div>

      {/* Toggle Panel */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
          <h1>Hello, Friend!</h1><br/>
            <p>Register with your personal details to use all of the site's features</p>OR
            <button
              className="hidden_btn"
              onClick={() => setActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1> <br/>
            <p>Enter your login details to log in  </p>OR
            <button
              className="hidden_btn"
              onClick={() => {setActive(true);}}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
  
};

export default Login;