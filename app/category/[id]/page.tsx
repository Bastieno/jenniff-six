import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import { notFound } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const awaited = await params;
  const categoryId = awaited.id.toLowerCase();
  
  // Check if this is a gender category or item category
  const isGenderCategory = categoryId === 'male' || categoryId === 'female' || categoryId === 'unisex';
  
  // Filter products based on whether it's a gender or item category
  const categoryProducts = isGenderCategory 
    ? products.filter((p) => p.gender?.toLowerCase() === categoryId)
    : products.filter((p) => p.category.toLowerCase() === categoryId);
  
  if (categoryProducts.length === 0) {
    // Get all unique categories and genders for suggestions
    const allCategories = [...new Set(products.map(p => p.category))];
    const allGenders = [...new Set(products.map(p => p.gender).filter(Boolean))];
    
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-4">
              Category Not Found
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any products in the "{categoryId}" category. 
              Please check out our available categories below.
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-light text-gray-800 mb-4">
                  Shop by Gender
                </h2>
                <div className="flex justify-center gap-4">
                  {allGenders.map((gender) => gender && (
                    <a
                      key={gender}
                      href={`/category/${gender.toLowerCase()}`}
                      className="px-6 py-3 border border-gray-300 hover:border-gray-500 transition-colors capitalize"
                    >
                      {gender} Collection
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-light text-gray-800 mb-4">
                  Shop by Category
                </h2>
                <div className="flex justify-center gap-4 flex-wrap">
                  {allCategories.map((category) => (
                    <a
                      key={category}
                      href={`/category/${category.toLowerCase()}`}
                      className="px-6 py-3 border border-gray-300 hover:border-gray-500 transition-colors capitalize"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  // Format the category name for display
  const categoryName = categoryId.charAt(0).toUpperCase() + categoryId.slice(1);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">
            {isGenderCategory ? `${categoryName} Collection` : categoryName}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isGenderCategory 
              ? `Explore our curated collection for ${categoryName.toLowerCase()}`
              : `Explore our curated collection of ${categoryName.toLowerCase()}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 1 && (
          <p className="text-center text-gray-500 mt-8">
            {categoryProducts.length} product found
          </p>
        )}
        {categoryProducts.length > 1 && (
          <p className="text-center text-gray-500 mt-8">
            {categoryProducts.length} products found
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all unique categories
export function generateStaticParams() {
  const categories = [...new Set(products.map((p) => p.category.toLowerCase()))];
  return categories.map((category) => ({
    id: category,
  }));
}
