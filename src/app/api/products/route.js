// app/api/products/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const rawQ = searchParams.get("q");
    const q = rawQ && rawQ.trim() ? rawQ.trim() : undefined;

    const rawCategoryId = searchParams.get("categoryId");
    const categoryId = rawCategoryId ? Number(rawCategoryId) : undefined;

    const takeParam = Number(searchParams.get("take"));
    const take = Number.isFinite(takeParam) && takeParam > 0 ? takeParam : 12;

    const orderParam = (searchParams.get("order") || "desc").toLowerCase();
    const order = orderParam === "asc" ? "asc" : "desc";

    // 组 where（只有传了才加条件）
    const where = {};
    if (q) {
      where.name = { contains: q, mode: "insensitive" };
    }
    if (categoryId !== undefined) {
      if (!Number.isFinite(categoryId)) {
        return NextResponse.json(
          { error: "Invalid categoryId" },
          { status: 400 }
        );
      }
      where.categoryId = categoryId;
    }

    const rows = await prisma.item.findMany({
      where,
      orderBy: { createdAt: order },
      take,
      select: {
        id: true,
        name: true,
        price: true,
        imageUrl: true,
        description: true,
      },
    });

    const items = rows.map((p) => ({
      ...p,
      price: p.price?.toNumber?.() ?? p.price,
    }));

    return NextResponse.json({ items });
  } catch (err) {
    console.error("[/api/products] ERROR:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
