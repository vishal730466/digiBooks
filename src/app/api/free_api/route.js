import { NextResponse } from "next/server";

export async function GET(req){
    
    const url = new URL(req.url);
    const key = url.searchParams.get("book_name");
    // const gpageNo = url.searchParams.get("pageNo");
    return NextResponse.json({data:key})
}