"use client"

import React, { useEffect, useRef, useState,Suspense } from 'react'
import "./style.css"


import { useParams, useSearchParams } from "next/navigation";

import { MdNavigateNext } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

  const Next_js = () => {
    const [left_page, setleft_page] = useState("")
    const [right_page, setright_page] = useState("")
    const [pageNo, setpageNO] = useState(1)
    const [animate, setanimate] = useState(false)
    const [back_animate, setback_animate] = useState(false)
    const [width, setwidth] = useState(1000)
    const [loading, setloading] = useState(true)


    const searchParams = useSearchParams();
    const param1 = searchParams.get("val1");
    const param2 = searchParams.get("val2");

    const {one , two }= useParams();


    const getdata = async () => {
        // const response = await fetch(`/api/hello/next_js/next_js${page.pageNo}`);   
        const response = await fetch(`/api/data?book_name=${encodeURIComponent(param1)}&pageNo=${encodeURIComponent(pageNo)}`);

        const res = await response.json();
        // console.log(res);
        if (res.book_data) {
            setleft_page(res.book_data)
        } else {
            setleft_page("no ")
        }
    }

    const getdata2 = async () => {
        const response = await fetch(`/api/data?book_name=${encodeURIComponent(param2)}&pageNo=${encodeURIComponent(pageNo + 1)}`);

        const res = await response.json();
        // console.log(res);
        if (res.book_data) {
            setright_page(res.book_data)
        } else {
            setright_page("no ")
        }
    }

    const next_page = () => {
        setTimeout(() => { setpageNO(pageNo + 2) }, 1500)
        animate_handle()
    }
    const previous_page = () => {
        setTimeout(() => { setpageNO(pageNo - 2) }, 1500)
        setback_animate(true)
    }
    const ani_end = () => { setanimate(false), setback_animate(false) }

    // useEffect(() => {
    //     setloading(false)
    // }, [])

    useEffect(()=>{
        if (window) {
            setwidth(window.innerWidth)
        }
        console.log("width",width);
    },[])
    useEffect(() => {

        getdata()
        getdata2()
    }, [pageNo, animate])

    const animate_handle = () => {
        setanimate(true)
    }
    if (width > 490) {
            
        return (
            <div className='con1'>
                
                    {/* {width} */}
                <div className='mybook'>
                    <div className='page1'>
                        {one}
                        <pre dangerouslySetInnerHTML={{ __html: left_page }} />
                    </div>

                    <div onAnimationEnd={ani_end} className={`page2 ${animate ? "animate" : ""} ${back_animate ? "priveous_page" : ""}`}>
                        {two}
                        <pre dangerouslySetInnerHTML={{ __html: right_page }} />
                    </div>
                    <div className='page3'>

                    </div>
                </div>
                <div className='buttons'>
                    <MdArrowBackIos onClick={previous_page} style={{ fontSize: "30px" }} />
                    <div>{pageNo}</div> <div>mark</div> <div>{pageNo + 1}</div>
                    <MdNavigateNext onClick={next_page} style={{ fontSize: "50px" }} />
                </div>
            </div>
        )
    } else {
        return(
              <div className='view_mob_con'>
                {/* {width} */}
              
                  <div  className='mob_mybook'>
                  <div className='mob_page1'> 
                  {param1}
                      <pre dangerouslySetInnerHTML={{__html: left_page}}/> 
                  </div>
          
                  <div onAnimationEnd={ani_end} className={`mob_page2 ${animate ? "animate":""} ${back_animate?"priveous_page":""}`}>
                      {param2}
                      <pre dangerouslySetInnerHTML={{__html: right_page}}/>
                  </div>

                  <div className='mob_page3'>
          
                  </div>

                  </div>
                      <div className='mob_buttons'>
                      <MdArrowBackIos onClick={previous_page} style={{fontSize:"20px"}} />
                      <div>{pageNo}</div> <div>mark</div> <div>{pageNo+1}</div> 
                      <MdNavigateNext onClick={next_page}  style={{fontSize:"40px" }}/>
                      </div>
              </div>
            )
    }
}

export default Next_js;