"use client"
import React, { useRef , useState, createContext, useEffect } from 'react';
import Python from '../books/python';
import "./book_container.css"
import { PageContext } from '../mycontext';
import Next_js from '../books/next_Js';

const BookContainer = () => {
    const [device , setdevice]=useState("")
    const books = [<Python/>,<Python/>,<Python/>,<Python/>,<Python/>,<Python/>,<Next_js/>];
    const [pageNo , setpageNo] = useState(1)
    // const [isAnimating, setIsAnimating] = useState(false);
    const [device_width, setdevicewidth]=useState("1000")
    const [activeIndex, setActiveIndex] = useState(6);
    const [font_size , setfont_size]=useState("1")
    const refs = useRef([]);
    const deviceRef = useRef("")
    const main_bookRef = useRef("")
  
    const handleNext = () => {
        if (pageNo == 0) {
            setpageNo(1)
        } else {
            setpageNo(pageNo+2)
        }
        // if (!isAnimating) {
            // console.log("animation ",pageNo);
            // setIsAnimating(true); 
            // setTimeout(() => setIsAnimating(false), 2000); 
            // setTimeout(()=>{setpageNo(pageNo+1)},500)
        // }
    };

    const previous_page=()=>{
        if (pageNo==0) {
            setActiveIndex(null)
        } else if(pageNo==1){
            setpageNo(0)
        }else{
            setpageNo(pageNo-2)
        }
        
    }

    
    useEffect(()=>{
        
    if (typeof window !== "undefined") {
        if(window.innerWidth < 400){
            setfont_size("1.6vw")
        }else if (window.innerWidth < 600){
            setfont_size("1.7vw")
        }else if (window.innerWidth < 700){
            setfont_size("1.7vw")
        }else if (window.innerWidth < 820){
            setfont_size("1.7vw")
        }else if (window.innerWidth < 850){
            setfont_size("1.7vw")
        }else if (window.innerWidth < 965){
            setfont_size("1.7vw")
        }else if (window.innerWidth < 1050){
            setfont_size("1.7vw")
        }else {
            setfont_size("1.7vw")
        }
    }
        if (device_width > 400) {
            setdevice("computer")
        } else {
            setdevice("mob")
        }
        if(deviceRef.current){
            setdevicewidth(deviceRef.current.offsetWidth)
        }
       
    },[])

            if (device_width > 400) {
                return (
        
        <div className="books_container" ref={deviceRef}> <PageContext.Provider value={{pageNo,setpageNo,setActiveIndex}}>
            {books.map((book, index) => (
                <div
                    key={index}
                    className="box"
                    ref={(el) => {(refs.current[index] = el)}}
                    onClick={()=>setActiveIndex(index)}
                >
                
                   {activeIndex == null && book}
           
                </div>
            ))}
            {activeIndex !== null &&
             <div id='main_book'  ref={main_bookRef} style={{fontSize:font_size}}
            //  className={ `background2 ${isAnimating ? "animate" : ""}`}
             >
            {books[activeIndex]} 
            {/* <div className='background2' onClick={()=>{setActiveIndex(null),setpageNo(0)}}>this is background</div> */}
            
            <div className='btn_container'>
            <button className='next_btn'>book_mark</button>
            <button className='next_btn' onClick={handleNext}>next</button>
            <button className='next_btn' >back</button>
            <button className='next_btn'>download</button> 
            </div>
            {/* width{device_width} {font_size} */}
            </div>

}
               
            </PageContext.Provider>

        </div>
        
    );
            
        } else {
                return  <div className='mob_books_con' ref={deviceRef} > 
                <PageContext.Provider value={{pageNo,setpageNo,setActiveIndex,device}}>

                    {/* this is mobile */}
                    {books.map((book, index) => (
                <div
                    key={index}
                    className="mob_box"
                    ref={(el) => {(refs.current[index] = el)}}
                    onClick={()=>setActiveIndex(index)}
                    >
                   {activeIndex == null && book}
                </div>
            ))}

               {activeIndex !== null && <div className='mob_main_book'>
                    <div className='mob_page'>
                        {books[activeIndex] }
                    </div>
                    <div className='mob_btn_con'>
                        <button onClick={handleNext}>next</button>
                        <button onClick={previous_page}>back</button>
                        <button>download </button>
                        <button>mark</button> {pageNo}
                        <button onClick={()=>{setActiveIndex(null),setpageNo(0)}}>close</button>
                    </div>
                    </div>
               }
           

            </PageContext.Provider>
                </div>
            }
    };

export default BookContainer;
