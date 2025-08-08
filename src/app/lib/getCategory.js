// lib/db.ts
import { prisma } from "./prisma";

async function getCategory() {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return categories;
}

export default getCategory;
