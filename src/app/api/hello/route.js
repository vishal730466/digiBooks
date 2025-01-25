import { connectionStr } from "@/app/database/db";
import { mySchema } from "@/app/database/mymodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    const data = await mySchema.find()
    // console.log(data)
    return NextResponse.json({result:data})
}

export async function POST(req){
    let payload= await req.json();
    await mongoose.connect(connectionStr)
    let result
    if (payload.login) {
        result = await mySchema.findOne({name:payload.name,password:payload.password})
        if (result!=null) {
            
            return NextResponse.json({result,success:true})
        } else {
            return NextResponse.json({result,success:false})
        }
    } 
    else if(payload.signup){
        const {name , password } = payload;
         result = new mySchema({name,password})
         const result1 = result.save()
         return NextResponse.json({result1,success:true})
        
    }
    else{
        return NextResponse.json({success:false})
    }
}