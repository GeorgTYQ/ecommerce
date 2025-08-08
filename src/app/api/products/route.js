// app/api/products/route.js

import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("categoryId");

  if (!categoryId) {
    return NextResponse.json([]);
  }

  const products = await prisma.item.findMany({
    where: {
      categoryId: Number(categoryId),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(products);
}
