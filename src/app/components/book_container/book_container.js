"use client"
import React, { useRef, useState, createContext, useEffect } from 'react';
// import Python from '../books/python';
import "./book_container.css"
import { PageContext } from '../mycontext';
// import Next_js from '../books/next_Js';
import { useRouter } from "next/navigation";
import Skeleton from '../skeleton/page';

const BookContainer = () => {
    const router = useRouter();
    const [device, setdevice] = useState("")
    const books = ["nextJs", "python"];
    const [pageNo, setpageNo] = useState("cover_page")
    const [background, setbackground] = useState(false)
    const [device_width, setdevicewidth] = useState("1000")
    const [activeIndex, setActiveIndex] = useState(null)
    const [font_size, setfont_size] = useState("1")
    const [mydata, setmydata] = useState([])
    const refs = useRef([])

    const deviceRef = useRef("")
    const main_bookRef = useRef("")

    const get = async () => {
        // console.log("get data");
        let data = await fetch("/api/hello")
        console.log(data)
        data = await data.json()
        setmydata(data.result)
        console.log("final", data);
    }

    // const handleNext = () => {
    //     if (pageNo == "cover_page") {
    //         setpageNo(0)
    //     }
    //     else if (pageNo == 0) {
    //         setpageNo(1)
    //     } else {
    //         setpageNo(pageNo + 2)
    //     }

    //     if (!isAnimating) {
    //     console.log("animation ",pageNo);
    //     setIsAnimating(true); 
    //     setTimeout(() => setIsAnimating(false), 2000); 
    //     setTimeout(()=>{setpageNo(pageNo+1)},500)
    //     }
    // };



    // const previous_page = () => {

    //     if (pageNo == 0) {
    //         setActiveIndex(null)
    //     } else if (pageNo == 1) {
    //         setpageNo(0)
    //     } else {
    //         setpageNo(pageNo - 2)
    //     }
    // }

    const redirect = (a, b) => {
        // router.push(`/components/view_book?val1=${a}&val2=${b}`)
        router.push(`/components/view_book/${a}/${b}`)
    }
    useEffect(() => {
        get()
        if (typeof window !== "undefined") {
            if (window.innerWidth < 1050) {
                setfont_size("1.7vw")
            } else {
                setfont_size("1.7vw")
            }
        }
        if (device_width > 400) {
            setdevice("computer")
        } else {
            setdevice("mob")
        }
        if (window) {
            setdevicewidth(window.innerWidth)
        }


    }, [])

    if (device_width == 1000) {
        return (<Skeleton />)
    }

    if (device_width > 400) {
        return (<div className='books_container'>
                
            {mydata.map((item, index) => (
                <div key={index} className='box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                    {item.book_name}{item.pageNo}
                </div>
            ))}

        </div>)
    } else {
        return <div className='mob_books_con' ref={deviceRef} >
            {device_width}
            {mydata.map((item, index) => (
                <div key={index} className='box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                    {item.book_name}{item.pageNo}
                </div>
            ))}
        </div>
    }
};

export default BookContainer;
