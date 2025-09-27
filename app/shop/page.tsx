'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ProductCard from "@/app/components/ProductCard";
import { products as sampleProducts } from '@/app/data/products';


export default function ShopPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [columns, setColumns] = useState(4);

  // Get unique categories from products
  const categories = ['all', ...Array.from(new Set(sampleProducts.map(p => p.category)))];

  // Filter and sort products
  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'latest':
        return b.id.localeCompare(a.id);
      default: // featured
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-light text-brand-dark mb-2">Shop</h1>
            <p className="text-sm text-brand-grey">
              {sortedProducts.length} Products
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-brand-dark"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-brand-grey" />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand-dark text-white'
                      : 'border border-gray-200 text-brand-dark hover:border-brand-dark'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="px-4 py-2 border border-gray-200 rounded-sm text-sm text-brand-dark hover:border-brand-dark transition-colors flex items-center gap-2"
              >
                Sort by{' '}
                {sortBy === 'featured' && 'Featured'}
                {sortBy === 'latest' && 'Latest'}
                {sortBy === 'price-low' && 'Price: Low to High'}
                {sortBy === 'price-high' && 'Price: High to Low'}
              </button>
              {showSortDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full right-0 mt-2 bg-white shadow-lg border border-gray-100 rounded-sm min-w-[200px] z-20"
                >
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'latest', label: 'Latest' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        sortBy === option.value ? 'text-brand-dark font-medium' : 'text-brand-grey'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Column selector */}
            <div className="flex gap-1">
              {[2, 4, 6].map((col) => (
                <button
                  key={col}
                  onClick={() => setColumns(col)}
                  className={`px-3 py-2 text-sm rounded-sm transition-colors ${
                    columns === col
                      ? 'bg-brand-dark text-white'
                      : 'border border-gray-200 text-brand-dark hover:border-brand-dark'
                  }`}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-x-4 gap-y-8 ${
            columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
            columns === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
            'grid-cols-1 md:grid-cols-3 lg:grid-cols-6'
          }`}>
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No results */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-brand-grey">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
