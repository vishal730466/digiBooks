"use client"

import React, { useEffect, useRef, useState } from 'react'
import "./style.css"

import { MdNavigateNext } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const Next_js = () => {
    const [left_page , setleft_page]=useState("")
    const [right_page ,setright_page]=useState("")
    const [pageNo , setpageNO ]=useState(1)
    const [animate , setanimate]=useState(false)
    const pageRef = useRef("") 

    const getdata=async()=>{
        // const response = await fetch(`/api/hello/next_js/next_js${page.pageNo}`);   
const response = await fetch(`/api/data?book_name=${encodeURIComponent("nextJs")}&pageNo=${encodeURIComponent(pageNo)}`);

        const res = await response.json();
        // console.log(res);
        if(res.book_data){
            setleft_page(res.book_data)
        }else{
            setleft_page("no ")
        }
    }
    
    const getdata2=async()=>{
const response = await fetch(`/api/data?book_name=${encodeURIComponent("nextJs")}&pageNo=${encodeURIComponent(pageNo+1)}`);

        const res = await response.json();
        // console.log(res);
        if(res.book_data){
            setright_page(res.book_data)
        }else{
            setright_page("no ")
        }
    }

    const next_page=()=>{
        setTimeout(()=>{setpageNO(pageNo+2)},1500)
        // setpageNO(pageNo+2)
        animate_handle()
        // if (pageRef.current) {
        //     pageRef.current.style.transform = "rotateY(-360deg)";
        //     pageRef.current.style.transform = "rotateY(360deg)";
        // }
        // ani_end()
        
    }

    const ani_end=()=>{setanimate(false)}
  
    useEffect(()=>{
        getdata()
        getdata2()
        console.log("page",pageNo);
    },[pageNo , animate])

    const animate_handle=()=>{
        setanimate(true)
    }

  return (
    <div className='con'>
    
        <div className='book'>
        <div className='page1'> 
            <pre dangerouslySetInnerHTML={{__html: left_page}}/> 
        </div>

        <div onAnimationEnd={ani_end} className={`page2 ${animate ? "animate":""}`}>
            <pre dangerouslySetInnerHTML={{__html: right_page}}/>
        </div>
        <div className='page3'>

        </div>
        </div>
            <div className='buttons'>
            <MdArrowBackIos style={{fontSize:"30px"}} /> <MdNavigateNext onClick={next_page}  style={{fontSize:"50px" , color:"blue"}}/>
            </div>
    </div>
  )
}

export default Next_js