import React, { useState, useContext } from 'react'
import { PageContext } from '../mycontext'
import Image from 'next/image'


const Python = () => {
  const page = useContext(PageContext)

  console.log("this is from page context ", page.pageNo)
  if (page.pageNo === 0) {

    return [
      <div className='book ' key="1">
        <img src='nextjs.jpg' width="100%" height="90%" />
        <b>Next js</b>
      </div>,
      
    ]
  }
  else if (page.pageNo === 1) {

    return [
      <div className='book pybook' key="1"> <div className='img_center'> <img src='nextjs.jpg' height="15%" width="35%"></img></div><h2>What is Next.js?</h2> <p>Next.js is a React framework that helps build web applications. It's a full-stack open-source framework that provides tools for both the front-end and back-end of a website.</p> <p>Next.js was created by the team at <b>Vercel</b>. Specifically, Guillermo Rauch, who is the CEO and co-founder of Vercel, is often credited with leading the development of Next.js.</p>
        <p>Next.js is one of the most popular web development frameworks today, especially for building React-based applications. It has gained widespread adoption because of its powerful features and developer-friendly ecosystem.</p>
        <div id='myfooter'>Next js = react + backend</div>
      </div>,
      <div className='book pybook' key="2"> <h2>Features:</h2><li>File-Based Routing</li><li>Image Optimization</li>
        <li>Deployment with Vercel</li><li>SEO-Friendly</li>
        <p>Next.js is widely used by many prominent companies for its performance, flexibility, and scalability.
           Here’s a list  of some notable companies leveraging Next.js for their applications:
        </p>
        <p>Vercel Netflix Twitch Uber GitHub Starbucks TikTok Target Nike </p>
        <p> sources Chat Gpt</p>
      </div>
    ]
  }
  else if (page.pageNo == 2) {
    return [
      <div className='book pybook' key="1"><div id=''><h1><p>Requirements </p></h1></div>
      <div className='img_center'><Image src="/Nodejs.png" alt='nodejs image' height={80} width={100}/></div>
      <p>Ensure you have Node.js installed on your system. You can download it from <a href="https://nodejs.org/en">Node.js official website.</a> </p>
      <p>You should have a good understanding of HTML, CSS, and JavaScript before learning Next.js."</p> 
      <p>To work with Next.js, you will need a text editor like <a href='https://code.visualstudio.com/download'>VS code</a></p>

      <div className=''><Image src="/html_css_js.jpg" alt='html css and js' width={180} height={100}/></div>
      </div>,
      <div className='book pybook' key="2">
         <p><iframe width="200" height="115" src="https://www.youtube.com/embed/lArm8yQlskc?si=2H0ISI-tCa6_AVMc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></p>
      </div>
    ]
  }
  else {
    return [
      <div className='book' key="1">   <h1><p>How do I get started with Next.js?</p></h1>
      <p> visit<a href='https://nextjs.org/docs/app/api-reference/cli/create-next-app'> Next js official website</a></p>
   
   
      </div>,
      <div className='book' key="2">
        <button onClick={() => { page.setpageNo(0), page.setActiveIndex(null) }}>close</button>
      </div>
    ]
  }

}

export default Python