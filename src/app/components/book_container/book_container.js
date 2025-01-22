"use client"
import React, { useRef , useState, createContext } from 'react';
import Python from '../books/python';
import "./book_container.css"
import { PageContext } from '../mycontext';

const BookContainer = () => {
    const books = [<Python/>,<Python/>,<Python/>,<Python/>,<Python/>,<Python/>];
    const [pageNo , setpageNo] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const refs = useRef([]);
    
    
    const handleNext = () => {
        setpageNo(pageNo+1)
        if (!isAnimating) {
            console.log("animation ",pageNo);
            setIsAnimating(true); 
            setTimeout(() => setIsAnimating(false), 2000); // Reset after animation duration
            // setTimeout(()=>{setpageNo(pageNo+1)},500)
        }
    };


    return (
        
        <div className="books_container"> <PageContext.Provider value={{pageNo,setpageNo,setActiveIndex}}>
            {books.map((book, index) => (
                <div
                    key={index}
                    className="box"
                    ref={(el) => {(refs.current[index] = el)}}
                    // onClick={() => displayBook(index)}
                    onClick={()=>setActiveIndex(index)}
                >
                
                   {!activeIndex && book}
           
                </div>
            ))}
            {activeIndex !== null &&
             <div id='main_book'  
            //  className={ `background2 ${isAnimating ? "animate" : ""}`}
             >
            {books[activeIndex]} 
            <div className='background2' onClick={()=>{setActiveIndex(null),setpageNo(0)}}>this is background</div>
            
            <div className='btn_container'>
            <button className='next_btn'>book_mark</button>
            <button className='next_btn' onClick={handleNext}>next</button>
            <button className='next_btn'>back</button>
            <button className='next_btn'>download</button>
            </div>

            </div>
             }

            </PageContext.Provider>
        </div>
        
    );
};

export default BookContainer;
