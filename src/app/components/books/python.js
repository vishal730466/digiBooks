import React,{useState, useContext} from 'react'
import { PageContext } from '../mycontext'
import Image from 'next/image'

const Python = () => {
  const page= useContext(PageContext)
   const [part , setpart] = useState(1)

   console.log("this is from page context ",page.pageNo)
   if(page.pageNo === 0){
    // setpart(page.pageNo)
     return (
       <div className='book'>
           <Image
        src="/python.png"
        alt="My Image"
        width={200}
        height={100}
      />
     </div>
     )
    }
   else if(page.pageNo === 1){
   // setpart(page.pageNo)
    return (
      <div className='book'>python
            this is page 1 {page.pageNo}
    </div>
    )
   }
   else if(page.pageNo ==2){
    return(
      <div>page no is {page.pageNo}</div>
    )
   }
   else{
    return (
      <div className='book'>python
      this is part 3
    </div>
    )
   }

}

export default Python