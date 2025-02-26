"use client"
import React, { useState,useEffect } from 'react'
import "./skeleton.css"

const Skeleton = () => {
    const [mydata,setmydata]=useState([{name:"myname"},{name:"second"}])
    const [item, setitem]=useState([])

    const get= async()=>{
        console.log("get data");
        let data =await fetch("/api/hello")
        console.log(data)
        data=await data.json()
        setmydata(data.result)
        console.log(data.result);
    }
    useEffect(() => {
          if (mydata) {
            // console.log("data ");
            setitem([...mydata]);
          }
        
        console.log(item)
      }, []);
      useEffect(() => {
        // console.log("Updated item array:", item);
      }, [item]);
    
  return (
    <div>
    {/* <header>
      <br/>
      <div className="navbar">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </header> */}
    <main className="skeleton-grid">
      <div className="skeleton-box"></div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
  
    </main>
    {mydata.map((item, index) => (
          <li key={index}>{item.book_name}{item.pageNo}</li>
        ))}

    <button onClick={get}>get</button>
    </div>
  )
}

export default Skeleton