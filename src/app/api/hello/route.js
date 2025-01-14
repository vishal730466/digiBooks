import { connectionStr } from "@/app/database/db";
import { mySchema } from "@/app/database/mymodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    const data = await mySchema.find()
    console.log(data)
    return NextResponse.json({result:data})
}