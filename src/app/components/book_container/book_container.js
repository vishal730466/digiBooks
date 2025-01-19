"use client"
import React, { useRef , useState, createContext } from 'react';
import Python from '../books/python';
import "./book_container.css"
import { PageContext } from '../mycontext';
const BookContainer = () => {
    // const pageContext=createContext()
    const books = [<Python/>,<Python/>];
    const refs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [pageNo , setpageNo] = useState(0)

    const displayBook = (index) => {
        refs.current.forEach((box, idx) => {
            if (box) {
                if (idx === index) {
                    // Maximize the clicked box
                    // box.style.height = "500px";
                    // box.style.width = "500px";
                    // box.style.border = "2px solid blue";
                    setActiveIndex(index)
                    console.log(index)

                } else {
                    // Minimize all other boxes
                    box.style.height = "100px";
                    box.style.width = "100px";
                    box.style.border = "1px solid black";
                }
            }
        });
    };

    return (

        <div className="books_container"> <PageContext.Provider value={{pageNo,setpageNo}}>
            {books.map((book, index) => (
                <div
                    key={index}
                    className="box"
                    ref={(el) => {(refs.current[index] = el)}}
                    onClick={() => displayBook(index)}
                >
                    {books[index]}
                    {/* <Python /> */}
                </div>
            ))}
            {activeIndex !== null &&
             <div className='main_book'>
            {books[activeIndex]} <button onClick={()=>{setpageNo(pageNo+1)}}>next</button>
            <div className='background2' onClick={()=>{setActiveIndex(null)}}>this is background</div>
            {console.log("page no is ", pageNo)}
            </div>
             }
            {/* <Python/> */}
            </PageContext.Provider>
        </div>
    );
};

export default BookContainer;
