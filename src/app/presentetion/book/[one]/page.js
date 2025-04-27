"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const myapi = () => {
    const [data , setdata] = useState([])

    const {one} = useParams()
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
        mydata()
    },[])

  return (
    <div>
         {/* {data.map((i , index)=>(<p key={index}>{i.userName}</p>))} */}
         
         {/* {data.filter(i => i.userName === "w").map((i, index) => (
  <div key={index}>{i.userName} 
  {i.data.map((item, idx) => (
            typeof item === "string" ? (
              <p key={idx}>{item}</p>
            ) : (
              <p key={idx}>Name: {item.name}, Course: {item.course}</p>
            )
          ))}
          </div>
))} */}
                data is {one}
              <iframe style={{height:"95vh" , width:"100vw"}} src={`/${one}.pdf`} height="100vh" width="100vw"> </iframe>
         </div>
  )
}

export default myapi