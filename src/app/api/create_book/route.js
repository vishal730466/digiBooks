import { connectionStr } from "@/app/database/db"
import { book_Schema } from "@/app/database/mymodel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST (req){
 let payload = await req.json()
 await mongoose.connect(connectionStr)

 const {book,totalPages}=payload;
 const find = await book_Schema.findOne({book_name:book})
 
 console.log("api ",book , totalPages);
 if(find){
    return NextResponse.json({message:"book found",find:find})   
 }
 else{
    let result = new book_Schema({book_name:book,Total_pages:totalPages})
    result = result.save()
    return NextResponse.json({message:"book create",result:result})
 }
//  return NextResponse.json({find:"not found"})

}