// prisma/seed.js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create categories
  const bakery = await prisma.category.create({
    data: { name: "Bakery" },
  });

  const drinks = await prisma.category.create({
    data: { name: "Drinks" },
  });

  // Add items to Bakery
  await prisma.item.createMany({
    data: [
      {
        name: "Sourdough Bread",
        description: "Crusty artisan sourdough loaf",
        price: 6.5,
        stock: 20,
        imageUrl: "/images/sourdough.jpg",
        categoryId: bakery.id,
      },
      {
        name: "Croissant",
        description: "Buttery flaky French pastry",
        price: 3.2,
        stock: 50,
        imageUrl: "/images/croissant.jpg",
        categoryId: bakery.id,
      },
      {
        name: "Lavosh Crackers",
        description: "Thin and crispy traditional crackers",
        price: 4.8,
        stock: 35,
        imageUrl: "/images/lavosh.jpg",
        categoryId: bakery.id,
      },
    ],
  });

  // Add items to Drinks
  await prisma.item.createMany({
    data: [
      {
        name: "Iced Coffee",
        description: "Cold brew with milk and ice",
        price: 5.0,
        stock: 30,
        imageUrl: "/images/iced-coffee.jpg",
        categoryId: drinks.id,
      },
      {
        name: "Sparkling Water",
        description: "Refreshing carbonated mineral water",
        price: 2.5,
        stock: 100,
        imageUrl: "/images/sparkling-water.jpg",
        categoryId: drinks.id,
      },
      {
        name: "Chai Latte",
        description: "Spiced tea with steamed milk",
        price: 4.0,
        stock: 25,
        imageUrl: "/images/chai-latte.jpg",
        categoryId: drinks.id,
      },
    ],
  });

  console.log("✅ Seed complete");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
