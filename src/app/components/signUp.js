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
    let result= await fetch("http://localhost:3000/api/hello",{
      method:"POST",
      body:JSON.stringify({name,password,signup:true})
    })
    let fresult = await result.json();
    // console.log(fresult)
    if(fresult.success){
      alert("signup")
    }
  }

  return (
    <div className='div_center'>   <h1 className='signup_heading'> SignUp </h1>
        <div>
          <div>
            <input className='form_input'  type='text' placeholder='Enter name' value={name} onChange={(e)=>{setname(e.target.value)}} />
          </div>
          <div >
            <input className='form_input' type='text' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
          </div>
          <div >
            <input className='form_input' type='text' placeholder='confirm password' value={c_password} onChange={(e)=>{setc_password(e.target.value)}} />
          </div>
            <button className='submit_btn' onClick={printdata}>Submit</button> {myval.loggedin}
            do you have account<span className='toggle_text' onClick={()=>{myval.setlogin(true),myval.setsignup(false)}}>Login</span> 
            <div className='background '>cover</div>
        </div>
    </div>
  )
}

export default SignUp