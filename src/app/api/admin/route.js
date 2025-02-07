import { connectionStr } from "@/app/database/db";
import { mySchema } from "@/app/database/mymodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req){
    try {
        await mongoose.connect(connectionStr)                                                                      

    const payload= await req.json()
    const {id ,update_data} = payload

    let result= await mySchema.findByIdAndUpdate(id,{ $set: update_data } ,{new:true})
    console.log("abc",id,update_data);
    console.log(result)

        return NextResponse.json({success:result})
    } catch (error) {
        console.error("Error during fetch operation:", error);
    return NextResponse.json({s:false})
      }
    
}

export async function GET(req){
    await mongoose.connect(connectionStr)

    const url=new URL(req.url)
    const book=url.searchParams.get("Book_name")
    const page= url.searchParams.get("PageNo")
    console.log("admin url ",book, page)
    // let result = "data not found"           not work
    let result = await mySchema.findOne({book_name:book,pageNo:page})

    return NextResponse.json({sucess:true ,result})
   
}