"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./style.css"

const Admin = () => {
  const widthref=useRef(null)
    const [text , settext]=useState("")
    // const [width ,setwidth]=useState("")

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    };

  return (
    <div className='admin_page'>Admin

        {/* <input className='output_div' type='text' value={text} onChange={(e)=>settext(e.target.value)}></input> */}
        
          <textarea className='output_div' value={text} onChange={(e)=>settext(e.target.value)} rows="4" cols="50" placeholder="Enter text here..." ></textarea>
        <div className='output_div' ref={widthref}>

                {/* width is {width} */}
        <pre dangerouslySetInnerHTML={{__html: text}}/>
        </div>
        <button className='copy_btn' onClick={copyToClipboard}> COPY</button>
    </div>
  )
}

export default Admin