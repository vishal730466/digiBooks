
import React from 'react'
import "./skeleton.css"

const Skeleton = () => {
    
  return (
    <div>
    {/* <header>
      <br/>
      <div className="navbar">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </header> */}
    <main className="skeleton-grid">
      <div className="skeleton-box"></div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"></div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
      <div className="skeleton-box"> </div>
  
    </main>
    {/* {mydata.map((item, index) => (
          <li key={index}>{item.book_name}{item.pageNo}</li>
        ))} */}

    {/* <button onClick={get}>get</button> */}
    </div>
  )
}

export default Skeleton