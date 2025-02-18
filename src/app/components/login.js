"use client"
import React, { useState, useContext, useRef, useEffect } from 'react'
import "./nav_style.css"
import Logcontext from './mycontext'
import Home from './login_page'

const Login = () => {
  // const formref=useRef()
  const mycontext=useContext(Logcontext)
  // const mystyle = useContext(StyleContext)

  const [name,setname]=useState("")
  const [password,setpassword]=useState("")

  const [text_color,set_text_color]=useState("")
  const [background_color,set_background_color]=useState("")
  const [inp_background_color,set_inp_background_color]=useState("")
  const [inp_text_color,set_inp_text_color]=useState("")

  
  useEffect(()=>{
    if (typeof window !== "undefined") {
      set_text_color(localStorage.getItem("log_color"))
      set_background_color(localStorage.getItem("log_background_color"))
      set_inp_background_color(localStorage.getItem("inp_background_color"))
      set_inp_text_color(localStorage.getItem("inp_text_color"))
    }
  },[])
  
  const printdata =async()=>{
    let result= await fetch("/api/hello",{
    // let result= await fetch("https://digi-books-seven.vercel.app/api/hello",{
      method:"POST",
      body:JSON.stringify({name,password,login:true})
    })
    // console.log("result",result);
    let fresult = await result.json();
    // console.log("f login page " , fresult);
    if(fresult.success){
      mycontext.setTurn(false)
      mycontext.setloggedin(false)
      mycontext.setlogin(false)
      mycontext.setsignup(false)
      
      alert("login")
    }
    else{
      alert("login fail")
    }
  }
  return (
    <>
    <div className='div_center' style={{backgroundColor:background_color,color:text_color}} > <div className='cancel_btn' onClick={()=>mycontext.setlogin(false)}>X</div> <h2 className='signup_heading'>Login</h2> 
     <div className='background '>cover</div>
        {/* <div> */}
            <input className='form_input' style={{color:inp_text_color, backgroundColor:inp_background_color}} type='text' placeholder='Enter name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            
            <input className='form_input' style={{color:inp_text_color, backgroundColor:inp_background_color}}  type='text' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        
            <button className='submit_btn' onClick={printdata}>submit</button>

          <p>  don't you have acoount  ? <span className='toggle_text' onClick={()=>{   mycontext.setlogin(false) , mycontext.setsignup(true)}}> SignUp </span> </p>
          <Home/>
        {/* </div> */}
    </div>
    </>
  )
}

export default Login