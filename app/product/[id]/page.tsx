import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/products";
import ProductContent from "./ProductContent";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const awaited = await params;
  const product = products.find((p) => p.id === awaited.id);

  return (
    <>
      <Header />
      <ProductContent product={product} />
      <Footer />
    </>
  );
}
