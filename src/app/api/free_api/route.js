import { NextResponse } from "next/server";

import { book_Schema, mySchema, userData, user_schema } from "@/app/database/mymodel";

export async function GET() {
    // await mongoose.connect(connectionStr)
    // const data = await mySchema.find()
    const data = await userData.find()
    
    return NextResponse.json({ result: data })
}