import { connectionStr } from "@/app/database/db";
import { book_Schema, mySchema, user_schema } from "@/app/database/mymodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr)
    // const data = await mySchema.find()
    const data = await book_Schema.find()
    
    return NextResponse.json({ result: data })
}

export async function POST(req) {
    let payload = await req.json();
    await mongoose.connect(connectionStr)
    let result
    if (payload.login) {
        if (payload.name && payload.password) {
            result = await user_schema.findOne({ name: payload.name, password: payload.password })
            if (result != null) {
                return NextResponse.json({ result, success: true, user: "found" })
            } else {
                return NextResponse.json({ result, success: false , message:"this user not found" })
            }
        }
        else {
            return NextResponse.json({ message: "user name and password both requird" })

        }

    }
    else if (payload.signup) {
        const { name, password } = payload;
        if (payload.name && payload.password) {
            const find = await user_schema.findOne({ name: payload.name })
        if (find) {
            console.log("user found ", find);
            return NextResponse.json({ success: "exist" })
        } else {
            result = new user_schema({ name, password })
            const result1 = result.save()
            return NextResponse.json({ result1, success: true ,message:"signup successful"})
        }

        } else {
            return NextResponse.json({message:"name and password both requird"})
        }
        
    }
    else {
        return NextResponse.json({ success: false })
    }
}

export async function PUT(req, con) {
    let payload = await req.json();
    await mongoose.connect(connectionStr)
    // console.log("put paylod is ",payload)
    const { id, data } = payload
    console.log("put data  ", data)

    let result = await mySchema.findByIdAndUpdate(id, data)
    console.log("put result is ", result)
    return NextResponse.json({ success: payload })
}