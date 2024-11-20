"use client";

import TaskList from "@/components/challenges-page/Tasks/TaskList";
import { categories } from "@/components/challenges-page/items";

export default function TaskPage({ params }) {
  const { category, subcategory } = params;

  // Decode params URL
  const decodedCategory = decodeURIComponent(category);
  const decodedSubcategory = decodeURIComponent(subcategory);

  console.log("Decoded params:", { decodedCategory, decodedSubcategory });

  const categoryData = categories.find(
    (cat) => cat.name === decodedCategory
  );
  console.log("Matched categoryData:", categoryData);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const subCategoryData = categoryData.subCategory.find(
    (sub) => sub.subName === decodedSubcategory
  );
  console.log("Matched subCategoryData:", subCategoryData);

  if (!subCategoryData) {
    return <div>Subcategory not found</div>;
  }

  return (
    <main>
      <TaskList tasks={subCategoryData.task} subName={subCategoryData.subName}/>
    </main>
  );
}
