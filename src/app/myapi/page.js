"use client"
import React, { useEffect, useState } from 'react'

const myapi = () => {
    const [data , setdata] = useState([])
    const [user , setUser] = useState("")

    const mydata=async()=>{
       const Data=await fetch("http://localhost:3000/api/free_api")
       const jsonData = await Data.json()  
       setdata(jsonData.result)
    }

    let check=(i)=>{
        if(i.userName=="w"){
            return i;
        }
    }

    useEffect(()=>{
      console.log("user is ", user);
    },[user])

    useEffect(()=>{
        mydata()
        setUser(localStorage.getItem( "user_name"))
    },[])

  return (
    <div>
         {/* {data.map((i , index)=>(<p key={index}>{i.userName}</p>))} */}
         
         {data.filter(i => i.userName === user).map((i, index) => (
  <div key={index}>{i.userName} 
  {i.data.map((item, idx) => (
            typeof item === "string" ? (
              <p key={idx}>{item}</p>
            ) : ( 
              <div key={idx}> {item.map((i,ind)=>(<div key={i}>{i}</div>))}</div>
            )
          ))}
          </div>
))}

              {/* <iframe style={{height:"95vh" , width:"100vw"}} src='/rich-dad-poor-dad.pdf' height="100vh" width="100vw"> </iframe> */}
         </div>
  )
}

export default myapi