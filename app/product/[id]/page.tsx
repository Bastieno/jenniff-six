"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Heart,
  Share2,
  Ruler,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";
import { products, convertPrice, formatPrice } from "@/app/data/products";
import { Product, Size, Color } from "@/app/types/product";
import { useCurrency } from "@/app/contexts/CurrencyContext";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);
  const { currency } = useCurrency();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-light text-brand-dark mb-4">
              Product not found
            </h1>
            <Link
              href="/shop"
              className="text-brand-muted-purple hover:underline"
            >
              Return to shop
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const displayPrice = () => {
    const convertedPrice = convertPrice(product.price, product.currency, currency);
    return formatPrice(convertedPrice, currency);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Get related products (same category, exclude current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-8">
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="text-brand-grey hover:text-brand-dark"
                >
                  Home
                </Link>
              </li>
              <li className="text-brand-grey">/</li>
              <li>
                <Link
                  href="/shop"
                  className="text-brand-grey hover:text-brand-dark"
                >
                  Shop
                </Link>
              </li>
              <li className="text-brand-grey">/</li>
              <li className="text-brand-dark">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[currentImageIndex]}
                      alt={`${product.name} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-28 bg-gray-100 overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-brand-dark"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-light text-brand-dark mb-2">
                  {product.name}
                </h1>
                <p className="text-2xl text-brand-dark">{displayPrice()}</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-brand-grey uppercase">
                  Collection: {product.collection}
                </p>
                <p className="text-brand-dark">{product.description}</p>
              </div>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-brand-dark mb-3">
                    COLOR
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() =>
                          color.available && setSelectedColor(color)
                        }
                        disabled={!color.available}
                        className={`relative group ${
                          !color.available ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        title={color.name}
                      >
                        <div
                          className={`w-10 h-10 rounded-full border-2 transition-all ${
                            selectedColor?.name === color.name
                              ? "border-brand-dark scale-110"
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-brand-grey opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-brand-dark">SIZE</h3>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="flex items-center gap-1 text-sm text-brand-muted-purple hover:underline"
                  >
                    <Ruler size={16} />
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => size.available && setSelectedSize(size)}
                      disabled={!size.available}
                      className={`px-4 py-2 min-w-[60px] border transition-all ${
                        selectedSize?.name === size.name
                          ? "border-brand-dark bg-brand-dark text-white"
                          : size.available
                          ? "border-gray-300 hover:border-brand-dark"
                          : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Guide */}
              <AnimatePresence>
                {showSizeGuide && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 p-4 rounded">
                      <h4 className="text-sm font-medium text-brand-dark mb-3">
                        Size Guide (inches)
                      </h4>
                      <div className="text-sm space-y-2">
                        {product.sizes.map((size) => (
                          <div key={size.name} className="flex gap-4">
                            <span className="font-medium w-8">{size.name}:</span>
                            {size.measurements.bust && (
                              <span>Bust: {size.measurements.bust}"</span>
                            )}
                            {size.measurements.waist && (
                              <span>Waist: {size.measurements.waist}"</span>
                            )}
                            {size.measurements.hips && (
                              <span>Hips: {size.measurements.hips}"</span>
                            )}
                            {size.measurements.length && (
                              <span>Length: {size.measurements.length}"</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-brand-dark mb-3">
                  QUANTITY
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-brand-dark transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-brand-dark transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex gap-3">
                <button
                  disabled={!selectedSize || (product.colors.length > 0 && !selectedColor)}
                  className="flex-1 py-3 px-6 bg-brand-dark text-white uppercase tracking-wider hover:bg-brand-muted-purple transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 hover:border-brand-dark transition-colors">
                  <Heart size={20} />
                </button>
                <button className="p-3 border border-gray-300 hover:border-brand-dark transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

              {/* Error message if size/color not selected */}
              {(!selectedSize || (product.colors.length > 0 && !selectedColor)) && (
                <p className="text-sm text-red-500">
                  Please select {!selectedSize && "a size"}
                  {!selectedSize && product.colors.length > 0 && !selectedColor && " and "}
                  {product.colors.length > 0 && !selectedColor && "a color"}
                </p>
              )}

              {/* Product Information */}
              <div className="border-t pt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-brand-dark mb-2">
                    MATERIALS
                  </h3>
                  <ul className="text-sm text-brand-grey space-y-1">
                    {product.materials.map((material, index) => (
                      <li key={index}>• {material}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-brand-dark mb-2">
                    CARE INSTRUCTIONS
                  </h3>
                  <ul className="text-sm text-brand-grey space-y-1">
                    {product.careInstructions.map((instruction, index) => (
                      <li key={index}>• {instruction}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-brand-dark mb-2">
                    CATEGORIES
                  </h3>
                  <div className="flex gap-2">
                    <Link
                      href={`/shop?category=${product.category}`}
                      className="text-sm text-brand-muted-purple hover:underline capitalize"
                    >
                      {product.category}
                    </Link>
                    <span className="text-brand-grey">|</span>
                    <Link
                      href={`/shop?collection=${product.collection}`}
                      className="text-sm text-brand-muted-purple hover:underline"
                    >
                      {product.collection}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-light text-brand-dark mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
