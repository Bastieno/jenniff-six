import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import ProductCard from "@/app/components/ProductCard";

interface CollectionPageProps {
  params: {
    id: string;
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const awaited = await params;
  const collectionId = awaited.id.toUpperCase();
  
  // Filter products by collection
  const collectionProducts = products.filter((p) => p.collection === collectionId);
  
  if (collectionProducts.length === 0) {
    // Get all unique collections for suggestions
    const allCollections = [...new Set(products.map(p => p.collection))];
    
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-4">
              Collection Not Found
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find the collection "{collectionId}". 
              Please explore our available collections below.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-xl font-light text-gray-800 mb-4">
                Available Collections
              </h2>
              <div className="flex justify-center gap-4 flex-wrap">
                {allCollections.map((collection) => (
                  <a
                    key={collection}
                    href={`/collection/${collection.toLowerCase()}`}
                    className="px-6 py-3 border border-gray-300 hover:border-gray-500 transition-colors"
                  >
                    Collection {collection}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">Collection {collectionId}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest pieces from our {collectionId} collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            {collectionProducts.length} {collectionProducts.length === 1 ? 'piece' : 'pieces'} in this collection
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all unique collections
export function generateStaticParams() {
  const collections = [...new Set(products.map((p) => p.collection))];
  return collections.map((collection) => ({
    id: collection.toLowerCase(),
  }));
}
