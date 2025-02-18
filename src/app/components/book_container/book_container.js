"use client"
import React, { useRef , useState, createContext, useEffect } from 'react';
import Python from '../books/python';
import "./book_container.css"
import { PageContext } from '../mycontext';
import Next_js from '../books/next_Js';
import { useRouter } from "next/navigation";

const BookContainer = () => {
    const router = useRouter();
    const [device , setdevice]=useState("")
    const books = ["Next_js"];
    const [pageNo , setpageNo] = useState("cover_page")
    const [background, setbackground] = useState(false)
    const [device_width, setdevicewidth]=useState("1000")
    const [activeIndex, setActiveIndex] = useState(null)
    const [font_size , setfont_size]=useState("1")
    // const [key,setkey] = useState(1)
    const refs = useRef([])

    const deviceRef = useRef("")
    const main_bookRef = useRef("")
  
    const handleNext = () => {
        if(pageNo=="cover_page"){
            setpageNo(0)
        }
        else  if (pageNo == 0) {
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

    const redirect=(index)=>{
        router.push(`/components/mybooks/${index}`)
    }
    useEffect(()=>{
        
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1050){
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
       if(window){
        setdevicewidth(window.innerWidth)
       }
           
       
    },[])

            if (device_width > 400) {
                return (<div className='books_container'> <PageContext.Provider value={{pageNo,setpageNo,setActiveIndex,device}}>
                        {books.map((book,index)=>(
                            <div key={index} className='box' 
                            onClick={()=>redirect(books[index])}
                            > 
                            {/* {background && <div className='background2'></div>} */}
                              {activeIndex ==null && book}     </div>
                        ))}

                        {activeIndex !== null && <div id='main_book'> {books[activeIndex] }
                        
                         </div>}
                        </PageContext.Provider>
                </div>)
            } else {
                return  <div className='mob_books_con' ref={deviceRef} > 
                <PageContext.Provider value={{pageNo,setpageNo,setActiveIndex,device}}>

                    {/* this is mobile */}
                    {books.map((book, index) => (
                <div
                    key={index}
                    className="mob_box"
                    ref={(el) => {(refs.current[index] = el)}}
                    onClick={()=>{setActiveIndex(index),setpageNo(0)}}
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
                        <button>mark</button> 
                        <button onClick={()=>{setActiveIndex(null),setpageNo("cover_page")}}>close</button>
                    </div>
                    </div>
               }
           

            </PageContext.Provider>
                </div>
            }
    };

export default BookContainer;
