import { connectionStr } from "@/app/database/db"
import { mySchema } from "@/app/database/mymodel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST (req){
 let payload = await req.json()
 await mongoose.connect(connectionStr)

 const {book,pageno,data}=payload;
 const find = await mySchema.findOne({book_name:book,pageNo:pageno})
 
 if(find){
    return NextResponse.json({message:"book found",find:find})   
 }
 else{
    let result = new mySchema({book_name:book,pageNo:pageno,book_data:data})
    result = result.save()
    return NextResponse.json({message:"book create",result:result})
 }
//  return NextResponse.json({find:"not found"})

}