import React,{useContext} from 'react'
import './nav_style.css'
import Logcontext from './mycontext'

const LogOut = () => {
 const mycontext=useContext(Logcontext)
  return (
    <div className='div_center'> <div className='cancel_btn' onClick={()=>mycontext.setloggedin(false)}>X</div>
    <h1> LogOut </h1>
      <button className='submit_btn' onClick={()=>{mycontext.setloggedin(false) , mycontext.setlogin(true)}}>Logout</button>
      <div className='background '>cover</div>
    </div>
  )
}

export default LogOut