import getCategory from "@/app/lib/getCategory";
import CategoryGrid from "./categoryGrid";

export default async function CategoryGridWrapper() {
  const categories = await getCategory(); // server fetch
  return <CategoryGrid categories={categories} />; // pass to client
}
