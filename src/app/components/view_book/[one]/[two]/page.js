"use client"
import React, { useEffect, useRef, useState, Suspense } from 'react'
import "./style.css"


import { useParams, useSearchParams } from "next/navigation";

import { MdNavigateNext , MdKeyboardBackspace } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
// import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Next_js = () => {
    const [left_page, setleft_page] = useState("")
    const [right_page, setright_page] = useState("")
    const [pageNo, setpageNO] = useState(1)
    const [animate, setanimate] = useState(false)
    const [back_animate, setback_animate] = useState(false)
    const [width, setwidth] = useState(1000)
    const [Total_pages, set_Totalpages] = useState(10)

    
    const [Theme, set_theme] = useState("light")
    const [color, set_color] = useState("black")
    const [back_color, set_backcolor] = useState("light")

    // const router = useRouter()

    // const searchParams = useSearchParams();
    // const param1 = searchParams.get("val1");
    // const param2 = searchParams.get("val2");

    const { one, two } = useParams();

    // if(param2){
    //     set_Totalpages(param2)
    // }

    const getdata = async () => {
        // console.log("data for fun ",one , pageNo)
        const response = await fetch(`/api/data?book_name=${encodeURIComponent(one)}&pageNo=${encodeURIComponent(pageNo)}`);
        const res = await response.json();
        // console.log(res);
        if (res.book_data) {
            setleft_page(res.book_data)
        } else {
            setleft_page("no ")
        }
    }

    const getdata2 = async () => {
        const response = await fetch(`/api/data?book_name=${encodeURIComponent(one)}&pageNo=${encodeURIComponent(pageNo + 1)}`);
        const res = await response.json();
        // console.log(res);
        if (res.book_data) {
            setright_page(res.book_data)
        } else {
            setright_page("no ")
        }
    }

    const next_page = () => {
        if(pageNo<(Total_pages-1)){
            setTimeout(() => { setpageNO(pageNo + 2) }, 1500)
            animate_handle()
        }
    }

    const previous_page = () => {
        if(pageNo>1){
            setTimeout(() => { setpageNO(pageNo - 2) }, 1500)
            setback_animate(true)
        }
    }

    const ani_end = () => { setanimate(false), setback_animate(false) }

    useEffect(()=>{
        if(Theme=="light"){
            set_backcolor("rgba(233, 230, 230, 0.692)")
            set_color("black")
            console.log("this is light");
        }
        else{
            set_color("white")
            set_backcolor("black")
            console.log("this is dark");
        }
        console.log("bakcolor", back_color);
    
    },[Theme])

    useEffect(() => {
        if (window) {
            setwidth(window.innerWidth)
            console.log("theme ",localStorage.getItem("Theme"));
            set_theme(localStorage.getItem("Theme"))
                
        }
        // console.log("width", width);
        set_Totalpages(two)
    }, [])

    useEffect(() => {

        // console.log("Query Params:", param1, param2);
        // console.log("Route Params12:", one, two);
        getdata()
        getdata2()
    }, [pageNo, animate])

    const animate_handle = () => {
        setanimate(true)
    }

    if(width==1000){
        return(<h1>loading</h1>)
    }
    if (width > 490) {

        return (<div className='view_book' style={{backgroundColor:back_color,color:color}}>
            <div className='con1' >
                <Link href="/" className='back_btn' ><MdKeyboardBackspace style={{fontSize:"60" }} /></Link>
                
                {/* {width} */}
                <div className='mybook'>
                    <div className='page1'>
                        {/* {one}  */}
                        {/* <iframe src='https://3d-web-gilt.vercel.app/'></iframe> */}
                        <pre dangerouslySetInnerHTML={{ __html: left_page }} />
                    </div>

                    <div onAnimationEnd={ani_end} className={`page2 ${animate ? "animate" : ""} ${back_animate ? "priveous_page" : ""}`}>
                        {/* {two}  */}
                        <pre dangerouslySetInnerHTML={{ __html: right_page }} />
                    </div>
                    <div className='page3'>

                    </div>
                </div>
                <div className='buttons'>
                    <MdArrowBackIos onClick={previous_page} style={{ fontSize: "30px", color:pageNo>1?"black":"transparent",marginLeft:"1vw" }} />
                    <div style={{color:"black"}}>{pageNo}</div> <div style={{color:"black"}}>mark</div> <div style={{color:"black"}}>{pageNo + 1}</div>
        
                    <MdNavigateNext onClick={next_page} style={{ fontSize: "50px", color:pageNo<(Total_pages-1)?"black":"white" }} />
                </div>
            </div>
            </div>
        )
    } else {
        return (
            <div className='view_mob_con'>
                {/* {width} */}
                <Link href="/" className='mob_back_btn' ><MdKeyboardBackspace style={{fontSize:"50" }} /></Link>

                <div className='mob_mybook'>
                    <div className='mob_page1'>
                        {/* {param1} */}
                        <pre dangerouslySetInnerHTML={{ __html: left_page }} />
                    </div>

                    <div onAnimationEnd={ani_end} className={`mob_page2 ${animate ? "animate" : ""} ${back_animate ? "priveous_page" : ""}`}>
                        {/* {param2} */}
                        <pre dangerouslySetInnerHTML={{ __html: right_page }} />
                    </div>

                    <div className='mob_page3'>

                    </div>

                </div>
                <div className='mob_buttons'>
                    <MdArrowBackIos onClick={previous_page} style={{ fontSize: "20px" }} />
                    <div>{pageNo}</div> <div>mark</div> <div>{pageNo + 1}</div>
                    <MdNavigateNext onClick={next_page} style={{ fontSize: "35px" }} />
                </div>
            </div>
        )
    }
}

export default Next_js;