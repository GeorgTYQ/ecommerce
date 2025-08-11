// app/api/category/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: "asc" }, 
      select:{
        id:true,
        name: true
        
      }
    });

    return NextResponse.json({ items: categories });
  } catch (error) {
    console.error("[/api/category] Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
