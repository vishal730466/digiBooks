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
    const [back_color, set_backcolor] = useState("white")
    const [page_color, set_pagecolor]=useState("#869a9f")

    const [board, setbored]=useState(Array(9).fill(null))
    const [turn, set_turn]=useState(true)
    const winnerArray =[[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]]
    const [winner, set_winner]=useState(false)

    // const router = useRouter()

    // const searchParams = useSearchParams();
    // const param1 = searchParams.get("val1");
    // const param2 = searchParams.get("val2");

    const { one, two } = useParams();

    // if(param2){
    //     set_Totalpages(param2)
    // }

    const handleClick=(i)=>{
        if(board[i] || winner) return;
console.log("index is ",i);
        const newboard= [...board]
        newboard[i]= turn ? "O" : "X"
        setbored(newboard)
        set_turn(!turn)
    }

    const check_winner=()=>{
        for (let i of winnerArray){
            console.log("round ",i);
            const [a,b,c]=i;
            if(board[i[0]] && board[i[0]] == board[i[1]] && board[i[1]] == board[i[2]] ){
                console.log("winner");
                return true;
            }
            console.log("0",board[i[0]])
            console.log("1",board[i[1]])
            console.log("2",board[c])
        }
        return false;
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
            set_pagecolor("#adc7be")
            set_color("black")
            console.log("this is light");
        }
        else{
            set_color("white")
            set_backcolor("black")
            set_pagecolor("#869a9f")
            console.log("this is dark");
        }
        console.log("bakcolor", back_color);
    
    },[Theme])

    useEffect(()=>{
        set_winner(check_winner())
    },[board])

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
        // getdata()
        // getdata2()

    }, [pageNo, animate,winner])

    const animate_handle = () => {
        setanimate(true)
    }

    if(width==1000){
        return(<h1>loading</h1>)
    }
    if (width > 490) {

        return (<div className='view_book' style={{backgroundColor:back_color,color:color}}>
            <div className='con1' >
                <Link href="/" className='back_btn' ><MdKeyboardBackspace style={{fontSize:"60",color:color}} /></Link>
                
                {/* {width} */}
                <div className='mybook'>
                    <div className='page1' style={{backgroundColor:page_color}}>
                        <div className='tic_tac_tou_con'>
                           {winner?<div className='winner_message'>winner</div>:""}
                             {board.map((value, i)=>(
                            <div key={i} className='tic_box' onClick={() => handleClick(i)}>
                                {value}
                            </div>
                        ))}
                        </div> 
                       
                    </div>

        {/* -------------- page 2 ---------------------- */}
                    <div onAnimationEnd={ani_end} className={`page2 ${animate ? "animate" : ""} ${back_animate ? "priveous_page" : ""}`} style={{backgroundColor:page_color}}>
                        
                        
                    </div>
                    <div className='page3' style={{backgroundColor:page_color}}>

                    </div>
                </div>
                <div className='buttons' style={{backgroundColor:page_color}}>
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
                    
                        <div className='tic_tac_tou_con'>
                        {winner?<div className='mob_winner_message'>winner</div>:""}
                             {board.map((value, i)=>(
                            <div key={i} className='mob_tic_box' onClick={() => handleClick(i)}>
                                {value}
                            </div>
                        ))}
                        </div> 
                    
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