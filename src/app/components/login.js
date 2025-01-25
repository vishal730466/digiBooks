"use client"
import React, { useState, useContext, useRef, useEffect } from 'react'
import "./nav_style.css"
import Logcontext from './mycontext'

const Login = () => {
  // const formref=useRef()
  const mycontext=useContext(Logcontext)
  // const mystyle = useContext(StyleContext)

  const [name,setname]=useState("")
  const [password,setpassword]=useState("")

  useEffect(()=>{
    if (typeof window !== "undefined") {
      const text_color=localStorage.getItem("log_color")
  const background_color=localStorage.getItem("log_background_color")
  const inp_background_color=localStorage.getItem("inp_background_color")
  const inp_text_color =localStorage.getItem("inp_text_color")

    }
  },[])
  
  const printdata =async()=>{
    let result= await fetch("https://digi-books-seven.vercel.app/api/hello",{
      method:"POST",
      body:JSON.stringify({name,password,login:true})
    })
    // console.log("yourresult",result);
    let fresult = await result.json();
    // console.log("fresult" , fresult);
    if(fresult.success){
      mycontext.setTurn("loggedin")
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
    <div className='div_center' style={{backgroundColor:background_color,color:text_color}} > <div className='cancel_btn' onClick={()=>mycontext.setlogin(false)}>X</div> <h2 className='signup_heading'>Login</h2>  <div className='background '>cover</div>
        <div>
            <input className='form_input' style={{color:inp_text_color, backgroundColor:inp_background_color}} type='text' placeholder='Enter name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            
            <input className='form_input' style={{color:inp_text_color, backgroundColor:inp_background_color}}  type='text' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        
            <button className='submit_btn' onClick={printdata}>submit</button>

            don't you have acoount <span className='toggle_text' onClick={()=>{   mycontext.setlogin(false) , mycontext.setsignup(true)}}> SignUp </span>
        </div>
    </div>
    </>
  )
}

export default Login