"use client"
import React, { useRef, useState, createContext, useEffect } from 'react';
import "./book_container.css"
import { useRouter } from "next/navigation";
import Skeleton from '../skeleton/page';
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineX } from "react-icons/hi";
import Image from 'next/image';

const BookContainer = () => {
    const router = useRouter();
    const [device_width, setdevicewidth] = useState("1000")
    const [loading, setLoding] = useState(true)
    const [font_size, setfont_size] = useState("1")
    const [mydata, setmydata] = useState([])
    const [search , set_search] = useState("")
    const [search_active , set_search_active] = useState(false)
    const [filteredItems ,set_filteredItems] = useState(false)
    // var filteredItems="n";
    const search_fun=async(e)=>{
        set_search(e)
        // if(search){
        //      filteredItems = mydata.filter((i)=>i.book_name.toLowerCase().includes(search.toLowerCase()))
        //      setmydata(filteredItems)
        // }
        // console.log("filterd ",filteredItems);
    }
    
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
    if (search) {
        const filtered = mydata.filter((i) =>
            i.book_name.toLowerCase().includes(search.toLowerCase())
        );
        set_filteredItems(filtered)
        console.log("Filtered:", filtered);
    }
    else{
        set_filteredItems(mydata)
    }
    console.log("fil ",filteredItems);
    console.log("search",search);
}, [search]); // Runs after `search` updates


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
                <div className='search_con'>
                    <input className={search_active?'search_active':"con_inp"} type='text' value={search} onClick={()=>set_search_active(true)}  onChange={(e)=>{search_fun(e.target.value)}}/>
                {search_active?<HiOutlineX className='cut_icon' onClick={()=>{set_search(""),set_search_active(false)}}/>:<IoSearchSharp className='search_icon' onClick={()=>set_search_active(true)}/>}
                </div>
                
               
                
            {(() => {
                if (filteredItems.length > 0) {
                    return filteredItems.map((item, index) => (
                        <div key={index} className='box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                            <img alt='img' src="/contact.jpg" object-fit='cover'  height="85%" width="100%"/>
                            {item.book_name} {item.pageNo}
                        </div>
                    ));
                }
                else if(search){
                    return <h1>No result found</h1>
                }
                 else {
                    return mydata.map((item, index) => (
                        <div key={index} className='box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                             <img alt='img' src="/contact.jpg" object-fit='cover'  height="85%" width="100%"/>
                             {item.book_name}
                        </div>
                    ));
                }
            })()}

        </div>)
    } else {
        return <div className='mob_books_con' ref={deviceRef} >
            {/* {device_width} */}
            <div className='mob_search_con'>
                    <input className='mob_con_inp' type='text' value={search} onChange={(e)=>search_fun(e.target.value)}/>
                    <IoSearchSharp className='mob_search_icon'/>
                </div>
            
                {(() => {
                if (filteredItems.length > 0) {
                    return filteredItems.map((item, index) => (
                        <div key={index} className='mob_box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                            <img alt='img' src="/contact.jpg" object-fit='cover'  height="85%" width="100%"/>
                            {item.book_name} {item.pageNo}
                        </div>
                    ));
                }
                else if(search){
                }
                 else {
                    return mydata.map((item, index) => (
                        <div key={index} className='mob_box' onClick={() => redirect(item.book_name, item.Total_pages)}>
                            <img alt='img' src="/contact.jpg" object-fit='cover'  height="85%" width="100%"/>
                            {item.book_name} {item.pageNo}
                        </div>
                    ));
                }
            })()}
        </div>
    }
};

export default BookContainer;
