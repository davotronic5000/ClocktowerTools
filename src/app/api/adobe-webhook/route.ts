import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log("ADOBE WEBHOOK HIT");
    const id = request.headers.get("X-AdobeSign-ClientId");
    return NextResponse.json({ xAdobeSignClientId: id }, { status: 200 });
}
