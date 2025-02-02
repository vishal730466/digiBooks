import { connectionStr } from "@/app/database/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { mySchema } from "@/app/database/mymodel";

export async function GET(req) {
  try {
    await mongoose.connect(connectionStr);

    // Extract search parameters correctly
    const url = new URL(req.url);
    // console.log("url is ", url)
    const key = url.searchParams.get("book_name");
    const gpageNo = url.searchParams.get("pageNo");

    console.log("query is:", key , gpageNo);

    // Fetch data from MongoDB
    const data = await mySchema.findOne({ book_name: key , pageNo : gpageNo  });

    return NextResponse.json(data || { message: "No data found" });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
