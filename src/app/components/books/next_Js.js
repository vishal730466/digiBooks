import { useContext, useEffect, useState } from "react"
import { PageContext } from "../mycontext"
import Image from "next/image"

 const Next_js =()=>{
    
    const page = useContext(PageContext)
    const [left_page, setleft_page] = useState([])
    const [right_page , setright_page]=useState("")
    const [book_name , setbook_name]=useState("nextJs")
    const [myclass, setmyclass]=useState("book")
  

    console.log("page ",page.pageNo)
    const getdata=async()=>{
        // const response = await fetch(`/api/hello/next_js/next_js${page.pageNo}`);
        
const response = await fetch(`/api/data?book_name=${encodeURIComponent(book_name)}&pageNo=${encodeURIComponent(page.pageNo)}`);

        const res = await response.json();
        if(res.book_data){
            setleft_page(res.book_data)
        }else{
            setleft_page("no data found")
        }
    }

    const getdata2=async()=>{
        const response = await fetch(`/api/data?book_name=${encodeURIComponent(book_name)}&pageNo=${encodeURIComponent(page.pageNo+1)}`);
        const res = await response.json();
        console.log("data res is ",res);
        if(res.book_name){
            // console.log("slug is ",res.data);
            setright_page(res.book_data)
        }else{
            setright_page("no data found")
        }

    }

    const updata=async()=>{
        let id="67976604614a89b358845996"
        let data={
            name :"put method update  3",
            password:"new put password"
        }
        const res= await fetch("/api/hello",{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify({id,data})
        })
       let frs = await res.json()
       console.log("frs put ",frs)
    }

    useEffect(()=>{
        if(page.device){
            setmyclass("mob_book")
          }
          console.log("getdata")
        getdata()
        getdata2()
        
    },[page.pageNo])

    
    if(page.pageNo == "cover_page"){
        return <div className="book_cover"> <Image src="/nextjs.jpg" alt="this is" fill style={{ objectFit: "cover" }}/> 
        </div>
    }
     else if(page.pageNo == 0){
        return[<div className={myclass} key="1">
           
        </div>
        ]
    }
     else {
        return[<div className="book" key="1">
            <pre dangerouslySetInnerHTML={{__html: left_page}}/>
        </div>,
        <div className={myclass} key="2">
            
            <pre dangerouslySetInnerHTML={{__html: right_page}}/>
        </div>
        ]
    }
}

export default Next_js