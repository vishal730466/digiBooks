"use client"
import React, { useState, useContext, useRef } from 'react'
import "./nav_style.css"
import Logcontext from './mycontext'

const Login = () => {
  const formref=useRef()
  const mycontext=useContext(Logcontext)

  const [name,setname]=useState("")
  const [password,setpassword]=useState("")
  const [c_password,setc_password]=useState("")
  const [islogin,setislogin]=useState(false)

  const printdata =async()=>{
    // console.log(name,password,c_password)
    let result= await fetch("https://digi-books-seven.vercel.app/api/hello",{
      method:"POST",
      body:JSON.stringify({name,password,login:true})
    })
    let fresult = await result.json();
    console.log(fresult)
    if(fresult.result){
      mycontext.setTurn("loggedin")
      mycontext.setloggedin(false)
      mycontext.setlogin(false)
      mycontext.setsignup(false)
      // formref.current.reset()
      
      alert("login")
    }
  }

  return (
    <>
    <div className='div_center'> <div className='cancel_btn' onClick={()=>mycontext.setlogin(false)}>X</div> <h2 className='signup_heading'>Login</h2>  <div className='background '>cover</div>
        <div>
            <input className='form_input' type='text' placeholder='Enter name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            
            <input className='form_input' type='text' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        
            <button className='submit_btn' onClick={printdata}>submit</button>

            don't you have acoount <span className='toggle_text' onClick={()=>{   mycontext.setlogin(false) , mycontext.setsignup(true)}}> SignUp </span>
        </div>
    </div>
    </>
  )
}

export default Login