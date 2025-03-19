'use client';

import React, { useState } from 'react';
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

  
  const dispatch = useDispatch();
  const loginval=useSelector((state) => state.login.value);

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

  return (
    <div className='mylogin_page'>
      
      <Link href="/" className='login_back_btn' ><MdKeyboardBackspace style={{fontSize:"80" }} /></Link>
      
    <div className={active ? 'container active' : 'container'} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form className="con_form" onSubmit={(e) => e.preventDefault()}>
          <h1>Create Account</h1> 
          loginval {loginval}
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
};

export default Login;
