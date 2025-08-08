// lib/db.ts
import { prisma } from "./prisma";

async function getProducts() {
  const products = await prisma.item.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  // Convert Decimal fields to number or string
  const plainProducts = products.map((product) => ({
    ...product,
    price: product.price.toNumber(), // or toString() if needed
    // If you have more Decimal fields, add them here
  }));

  return plainProducts;
}

export default getProducts;
