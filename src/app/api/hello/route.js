import { connectionStr } from "@/app/database/db";
import { book_Schema, mySchema , user_schema } from "@/app/database/mymodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    // const data = await mySchema.find()
    const data = await book_Schema.find()
    // const a = await showdbs()
    // console.log(data)
    return NextResponse.json({result:data})
}

export async function POST(req){
    let payload= await req.json();
    await mongoose.connect(connectionStr)
    let result
    if (payload.login) {
        result = await user_schema.findOne({name:payload.name,password:payload.password})
        if (result!=null) {
            return NextResponse.json({result,success:true})
        } else {
            return NextResponse.json({result,success:false})
        }
    }
    else if(payload.signup){
        const {name , password } = payload;
        const find =await user_schema.findOne({name:payload.name})
        if (find) {
            console.log("user found ",find);
           return  NextResponse.json({success:"exist"})
        } else {
            result = new user_schema({name,password})
            const result1 = result.save()
            return NextResponse.json({result1,success:true})
        }
        
        
    }
    else{
        return NextResponse.json({success:false})
    }
}

export async function PUT(req , con){
    let payload= await req.json();
    await mongoose.connect(connectionStr)
    // console.log("put paylod is ",payload)
    const {id, data}=payload
    console.log("put data  ",data)
   
    let result =await mySchema.findByIdAndUpdate(id,data)
    console.log("put result is ",result)
    return NextResponse.json({success:payload})
}