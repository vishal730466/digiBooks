import { connectionStr } from "@/app/database/db";
import { mySchema } from "@/app/database/mymodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { slug } =await params; 
    await mongoose.connect(connectionStr)

    const data = await mySchema.findOne({name:slug})
    return NextResponse.json({ message: `You requested slug: ${slug}`, data });
  }
  