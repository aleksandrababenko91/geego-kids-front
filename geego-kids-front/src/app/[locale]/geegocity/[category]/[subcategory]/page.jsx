"use client";

// import { useState, useEffect } from "react";
// import TaskList from "@/components/challenges-page/Tasks/TaskList";
// import { ChallengesFetchAPI } from "@/api/api"; 

// export default function TaskPage({ params }) {
//   const { category, subcategory } = params;
//   const [categoryData, setCategoryData] = useState(null);
//   const [subCategoryData, setSubCategoryData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = '3cb8792eb1a3f5f43da047c476c1dc9aa564d11f'; // my token 
//         const lang = "fi"; // lang
        
//         const data = await ChallengesFetchAPI(token, lang); // get data API

//         const decodedCategory = decodeURIComponent(category);
//         const decodedSubcategory = decodeURIComponent(subcategory);

//         const categoryData = data.find(cat => cat.name === decodedCategory);
//         if (categoryData) {
//           const subCategoryData = categoryData.subCategory.find(
//             sub => sub.subName === decodedSubcategory
//           );
//           setCategoryData(categoryData);
//           setSubCategoryData(subCategoryData);
//         } else {
//           setError("Category not found");
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [category, subcategory]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   if (!categoryData || !subCategoryData) {
//     return <div>Category or subcategory not found</div>;
//   }

//   return (
//     <main>
//       <TaskList tasks={subCategoryData.task} subName={subCategoryData.subName} />
//     </main>
//   );
// }





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