"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProductCard from "@/app/components/ProductCard";
import { products, convertPrice, formatPrice } from "@/app/data/products";
import { Product } from "@/app/types/product";
import { useCurrency } from "@/app/contexts/CurrencyContext";

interface ProductContentProps {
  product: Product | undefined;
}

export default function ProductContent({ product }: ProductContentProps) {
  const { currency } = useCurrency();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  if (!product) {
    return (
      <main className="bg-white flex flex-1 items-center justify-center py-32">
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
    );
  }

  const displayPrice = () => {
    const convertedPrice = convertPrice(
      product.price,
      product.currency,
      currency
    );
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

  // Get related products (same category, exclude current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="bg-white flex-1">
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
          <div className="flex gap-4">
            {/* Thumbnail Images - Left Side */}
            {product.images.length > 1 && (
              <div className="flex flex-col gap-2 overflow-y-auto max-h-[500px]">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-28 bg-gray-100 overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-brand-dark"
                        : "border-transparent hover:border-gray-300"
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

            {/* Main Image with Zoom */}
            <div 
              className="relative flex-1 aspect-[3/4] bg-gray-100 overflow-hidden cursor-crosshair"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setZoomPosition({ x, y });
                setMousePosition({ 
                  x: e.clientX - rect.left, 
                  y: e.clientY - rect.top 
                });
              }}
            >
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
                    style={{
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      transform: isZooming ? 'scale(2)' : 'scale(1)',
                      transition: 'transform 0.1s ease-out'
                    }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Zoom Lens Overlay */}
              {isZooming && (
                <div
                  className="absolute w-32 h-32 border-2 border-white/50 rounded-full pointer-events-none shadow-lg"
                  style={{
                    left: `${mousePosition.x - 64}px`,
                    top: `${mousePosition.y - 64}px`,
                    background: `radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.1) 100%)`
                  }}
                />
              )}

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

            {/* Available Sizes */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-brand-dark mb-3">
                  AVAILABLE SIZES
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <div
                      key={size.name}
                      className={`px-4 py-2 min-w-[60px] border text-center ${
                        size.available
                          ? "border-gray-300 text-brand-dark"
                          : "border-gray-200 bg-gray-50 text-gray-400 line-through"
                      }`}
                    >
                      {size.name}
                    </div>
                  ))}
                </div>
                {/* Size Measurements */}
                <div className="mt-4 bg-gray-50 p-4 rounded">
                  <h4 className="text-sm font-medium text-brand-dark mb-3">
                    Size Guide (inches)
                  </h4>
                  <div className="text-sm space-y-2">
                    {product.sizes.filter(size => size.available).map((size) => (
                      <div key={size.name} className="flex gap-4">
                        <span className="font-medium w-8">
                          {size.name}:
                        </span>
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
              </div>
            )}

            {/* Available Colors */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-brand-dark mb-3">
                  AVAILABLE COLORS
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color) => (
                    <div
                      key={color.name}
                      className={`flex items-center gap-2 ${
                        !color.available ? "opacity-50" : ""
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-sm text-brand-grey">
                        {color.name}
                        {!color.available && " (Out of Stock)"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
