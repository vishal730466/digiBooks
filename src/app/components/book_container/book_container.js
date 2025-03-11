"use client"
import React, { useRef, useState, createContext, useEffect } from 'react';
import "./book_container.css"
import { useRouter } from "next/navigation";
import Skeleton from '../skeleton/page';

const BookContainer = () => {
    const router = useRouter();
    // const [device, setdevice] = useState("")
    // const books = ["nextJs", "python"];
    // const [pageNo, setpageNo] = useState("cover_page")
    // const [background, setbackground] = useState(false)
    const [device_width, setdevicewidth] = useState("1000")
    const [loading, setLoding] = useState(true)
    const [font_size, setfont_size] = useState("1")
    const [mydata, setmydata] = useState([])
    // const refs = useRef([])

    const deviceRef = useRef("")
    // const main_bookRef = useRef("")

    const get = async () => {
        // console.log("get data");
        setLoding(true)
        let data = await fetch("/api/hello")
        console.log(data)
        data = await data.json()
        setmydata(data.result)
        setLoding(false)
        console.log("final", data);
    }

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

        if (window) {
            setdevicewidth(window.innerWidth)
        }


    }, [])

    if (device_width == 1000) {
        return (<Skeleton />)
    }
    else if(loading){
        return(<Skeleton/>)
    }

    else if(device_width > 400) {
        return (<div className='books_container'>
                
            {mydata.map((item, index) => (
                <div key={index} className='box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                    {item.book_name}{item.pageNo}
                </div>
            ))}

        </div>)
    } else {
        return <div className='mob_books_con' ref={deviceRef} >
            {/* {device_width} */}
            {mydata.map((item, index) => (
                <div key={index} className='mob_box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                    {item.book_name}{item.pageNo}
                </div>
            ))}
        </div>
    }
};

export default BookContainer;
