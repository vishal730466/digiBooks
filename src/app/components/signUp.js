"use client"
import React, { useState, useContext } from 'react'
import './nav_style.css'
import Logcontext from './mycontext'


const SignUp = () => {
  const myval = useContext(Logcontext)
  console.log("myval",myval)
  const [name,setname]=useState("")
  const [password,setpassword]=useState("")
  const [c_password,setc_password]=useState("")

    

  const printdata =async()=>{
    // console.log(name,password,c_password)
    if (password === c_password) {
      let result= await fetch("api/hello",{
        method:"POST",
        body:JSON.stringify({name,password,signup:true})
      })
      let fresult = await result.json();
      // console.log(fresult)
      if(fresult.success){
        alert("signup")
        myval.setsignup(false)
      }
    } else {
      alert("password and confirm password not match")
    }
  
  }

  return (
    <div className='div_center'> <button className='cancel_btn' onClick={()=>myval.setsignup(false)}>X</button>  <h1 className='signup_heading'> SignUp </h1> 

            <input className='form_input'  type='text' placeholder='Enter name' value={name} onChange={(e)=>{setname(e.target.value)}} />

            <input className='form_input' type='text' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />

            <input className='form_input' type='text' placeholder='confirm password' value={c_password} onChange={(e)=>{setc_password(e.target.value)}} />
    
            <button className='submit_btn' onClick={printdata}>Submit</button> {myval.loggedin} <p>do you have account <span className='toggle_text' onClick={()=>{myval.setlogin(true),myval.setsignup(false)}}> Login</span> </p> 
            <div className='background '>cover</div>
    
    </div>
  )
}

export default SignUp