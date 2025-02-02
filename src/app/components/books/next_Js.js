import { useContext, useEffect, useState } from "react"
import { PageContext } from "../mycontext"

 const Next_js =()=>{
    const page = useContext(PageContext)
    const [mydata, setdata] = useState([])
    const [right_page , setright_page]=useState("")

    console.log("page ",page.pageNo)
    const getdata=async()=>{
        // const response = await fetch(`/api/hello/next_js/next_js${page.pageNo}`);
        const value1 = "nextJs";
        const value2 = "secondValue";
        
        const response = await fetch(`/api/data?book_name=${encodeURIComponent(value1)}&pageNo=${encodeURIComponent(page.pageNo)}`);

        const res = await response.json();
        if(res){
            // console.log("slug is ",res.data);
            console.log("res data is ",res)
            setdata(res.book_data)
            // setdata(res.data.page1)
        }
    }

    const getdata2=async()=>{
        const response = await fetch(`/api/hello/next_js/next_js${page.pageNo+1}`);
        const res = await response.json();
        if(res.data){
            console.log("slug is ",res.data);
            setright_page(res.data.page1)
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
            // headers: {
            //     'Content-Type': 'application/json',
            //   },
            body:JSON.stringify({id,data})
        })
       let frs = await res.json()
       console.log("frs put ",frs)
    }

    useEffect(()=>{
        getdata()
        getdata2()
    },[page.pageNo])

    

    if(page.pageNo == 0){
        return[<div className="book" key="1">
           
        </div>
        ]
    }
     else {
        return[<div className="book" key="1">

            <pre dangerouslySetInnerHTML={{__html: mydata}}/>
        </div>,
        <div className="book" key="2">
            
            <pre dangerouslySetInnerHTML={{__html: right_page}}/>
            <button onClick={updata}>getdata</button>
        </div>
        ]
    }
}

export default Next_js