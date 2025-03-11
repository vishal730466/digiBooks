"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./style.css"

const Admin = () => {
  const widthref=useRef(null)
    const [text , settext]=useState("")
    const[book,setbook]=useState("nextJs")
    const[page_No,setpage_No]=useState("")
    const[id, setid]=useState("")

    // const [width ,setwidth]=useState("")
    
    const fetch_book=async()=>{
      let response= await fetch(`/api/admin?Book_name=${encodeURIComponent(book)}&PageNo=${encodeURIComponent(page_No)}`)
      let final_response= await response.json()
      
      if(final_response.result){
        settext(final_response.result.book_data)
        setid(final_response.result._id)
      }
      else{
        settext("no book found")
        setid(0)
      }
      console.log(final_response)
  }

    const updateData=async()=>{
      let update_data ={
        book_data:text,
        book_name:"nextJs",
        pageNo:page_No
    }
      
      let res = await fetch(`/api/admin`,{
        method:"PUT",  
          headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({id,update_data})
      })
       res =await res.json()
       if (res.success) {
        alert("page updated")

        setid("0")
       } else {
        alert("page NOT updated")
       }
    
      console.log("put res is " ,res);
    }

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }

  return (
    <div >Admin

        {/* <input className='output_div' type='text' value={text} onChange={(e)=>settext(e.target.value)}></input> */}
        <div className='box'> 

          <textarea className='output_div' value={text} onChange={(e)=>settext(e.target.value)} rows="4" cols="50" placeholder="Enter text here..." ></textarea>
        <div className='output_div' ref={widthref}>

                {/* id is {id} */}
        <pre dangerouslySetInnerHTML={{__html: text}}/> 
        </div>
        <button className='copy_btn' onClick={copyToClipboard}> COPY</button>
        <button className='copy_btn' onClick={updateData}>Update</button>
        </div>


      <div className='getbook'>
        <br/>Enter book name <input value={book} onChange={(e)=>setbook(e.target.value)}></input>
        <br/>Enter page no <input value={page_No} onChange={(e)=>setpage_No(e.target.value)}></input>
      
       <br/><br/> <button className='fetch_btn' onClick={fetch_book}>fetch_book</button>
      </div>
   
    </div>
  )
}

export default Admin