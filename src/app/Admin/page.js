"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./style.css"

const Admin = () => {
  const widthref=useRef(null)
    const [text , settext]=useState("")
    const[book,setbook]=useState("")
    const[page_No,setpage_No]=useState("")
    const[id, setid]=useState("")
    const [device_width, setdevicewidth] = useState("1000")
    const [photo , set_photo]= useState("")
    // const [width ,setwidth]=useState("")
    
    const[admin, setadmin]=useState("")
    
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

  const create_page= async()=>{
    if(!page_No){
      alert("enter page no")
      return;
    }
    let res = await fetch("/api/create_page",{
      method:"POST",
      body:JSON.stringify({book:book,pageno:page_No,data:text})
    })
    res=await res.json()
    if(res.message=="book create"){
      alert("page created")
    }
    console.log(res);
  }
  const create_book= async()=>{
    if(!page_No){
      alert("enter page no")
      return;
    }
    let res = await fetch("/api/create_book",{
      method:"POST",
      body:JSON.stringify({book:book,totalPages: page_No})
    })
    console.log("create book ",book, page_No);
    res=await res.json()
    if(res.message=="book create"){
      alert("book created")
    }
    console.log(res);
  }

    const updateData=async()=>{
      let update_data ={
        book_data:text,
        book_name:book,
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

    useEffect(()=>{
      if (window) {
        setdevicewidth(window.innerWidth)
    }
    },[])

    const send_photo=async(e)=>{
        // e.priventDefault()
        console.log("img fun is running");
        console.log(photo);

        const myphoto=new FormData();
        myphoto.set("file",photo)

        let res=await fetch("api/photo",{
          method:"POST",
          body:myphoto
        })

        res=await res.json()
        
        console.log(res);
    }

    if(device_width=="1000"){
      return<h1>Loding</h1>
    }
    else if(device_width>450){
      return (
        <div >
    
            {/* <input className='output_div' type='text' value={text} onChange={(e)=>settext(e.target.value)}></input> */}
            <div className={admin =="Iam"?'none':'Admin_pass'}> <input type='text' value={admin} onChange={(e)=>setadmin(e.target.value)}></input></div>
            <div className='box'> 
    
              <textarea className='output_div' value={text} onChange={(e)=>settext(e.target.value)} rows="4" cols="50" placeholder="Enter text here..." ></textarea>
            <div className='output_div' ref={widthref}>
    
                    {/* id is {id} */}
            <pre dangerouslySetInnerHTML={{__html: text}}/> 
            </div>
            </div>
            <button className='copy_btn' onClick={copyToClipboard}> COPY</button>
            <button className='copy_btn' onClick={updateData}>Update</button>
            <button className='copy_btn' onClick={create_page}>create_page</button>
            <button className='copy_btn' onClick={create_book}>create_book</button>
    
    
          <div className='getbook'>
            <br/>Enter book name <input value={book} onChange={(e)=>setbook(e.target.value)}></input>
            <br/>Enter page no <input value={page_No} onChange={(e)=>setpage_No(e.target.value)}></input>
          
           <br/><br/> <button className='fetch_btn' onClick={fetch_book}>fetch_book</button>

           <input type='file' onChange={(e)=> set_photo(e.target.files?.[0])}/>
           <button onClick={send_photo}> submit image</button>
          </div>
       
        </div>
      )
    }
    else{
      return(<div>
            <div className='mob_box'> 
    
    <textarea className='mob_output_div' value={text} onChange={(e)=>settext(e.target.value)} rows="4" cols="50" placeholder="Enter text here..." ></textarea>
  <div className='mob_output_div' ref={widthref}>

          {/* id is {id} */}
  <pre dangerouslySetInnerHTML={{__html: text}}/> 
  </div>

  <button className='copy_btn' onClick={copyToClipboard}> COPY</button>
  <button className='copy_btn' onClick={updateData}>Update</button>
  <button className='copy_btn' onClick={create_page}>create_page</button>
  <button className='copy_btn' onClick={create_book}>create_book</button>

  <br/>Enter book name <input className='admin_mob_inp' value={book} onChange={(e)=>setbook(e.target.value)}></input>
            <br/>Enter page no <input className='admin_mob_inp_page' value={page_No} onChange={(e)=>setpage_No(e.target.value)}></input>
           <br/><br/> <button className='mob_fetch_btn' onClick={fetch_book}>fetch_book</button>
          
           <div className='file_con'>
  <input className='mob_file_btn' type='file' onChange={(e)=> set_photo(e.target.files?.[0])}/>
           <button className='mob_file_btn' onClick={send_photo}> submit image</button>
           </div>
  </div>
      </div>)
    }
  
}

export default Admin