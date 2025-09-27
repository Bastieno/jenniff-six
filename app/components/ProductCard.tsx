"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Product } from "../types/product";
import { useCurrency } from "../contexts/CurrencyContext";
import { convertPrice, formatPrice } from "../data/products";
import { AnimatePresence, motion } from "framer-motion";

interface ProductCardProps {
	product: Product;
}

export function ProductCardAlt({ product }: { product: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { formatPrice, convertPrice } = useCurrency();

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

  const price = convertPrice(product.price, product.currency);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
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
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Image navigation arrows */}
        {isHovered && product.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronLeft className="w-4 h-4 text-brand-dark" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              <ChevronRight className="w-4 h-4 text-brand-dark" />
            </button>
          </>
        )}

        {/* Image dots indicator */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {product.images.map((_: any, index: number) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentImageIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        )}

        {/* Quick actions */}
        <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-brand-dark" />
          </button>
        </div>
      </div>

      <Link href={`/product/${product.id}`}>
        <div className="pt-4">
          <h3 className="text-sm font-medium text-brand-dark mb-2 group-hover:text-brand-muted-purple transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-brand-grey">{formatPrice(price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const { currency } = useCurrency();

	const nextImage = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
	};

	const prevImage = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
	};

	const displayPrice = () => {
		const convertedPrice = convertPrice(product.price, product.currency, currency);
		return formatPrice(convertedPrice, currency);
	};

	return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative block"
    >
      <Link href={`/product/${product.id}`} className="block cursor-pointer">
        <div
          className="relative overflow-hidden aspect-[2/3] bg-gray-100 rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Carousel */}
          <div className="relative w-full h-full">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {product.images.length > 1 && isHovered && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Image Indicators */}
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-white w-4" : "bg-white/60"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-gray-700">
            {product.name}
          </h3>
          <p className="text-sm font-semibold text-gray-900">
            {displayPrice()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
