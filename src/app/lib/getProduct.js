// app/api/products/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  const take = Number(searchParams.get("take") || "12");
  const categoryId = searchParams.get("categoryId");
  const order = (searchParams.get("order") || "desc").toLowerCase();

  const where = {};
  if (q) where.name = { contains: q, mode: "insensitive" };
  if (categoryId) where.categoryId = Number(categoryId);

  const rows = await prisma.item.findMany({
    where,
    orderBy: { createdAt: order === "asc" ? "asc" : "desc" },
    take: Number.isFinite(take) ? take : 12,
  });

  const items = rows.map(p => ({
    ...p,
    price: p.price?.toNumber?.() ?? p.price,
  }));

  return NextResponse.json({ items });
}
