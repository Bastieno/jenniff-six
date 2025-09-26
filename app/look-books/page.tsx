"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getAllCollections } from "@/app/data/collections";

export default function LookBooksPage() {
  const collections = getAllCollections();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 mb-16"
        >
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-light tracking-[0.2em] text-brand-dark mb-4">
              LOOK BOOKS
            </h1>
            <p className="text-brand-grey max-w-2xl mx-auto text-lg">
              Explore our seasonal collections through carefully curated visual
              narratives that capture the essence of contemporary fashion.
            </p>
          </div>
        </motion.section>

        {/* Collections Grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {collections.map((collection, index) => (
              <motion.article
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/look-books/${collection.id}`}>
                  <div className="relative overflow-hidden bg-gray-50">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="aspect-[3/4] relative"
                    >
                      <Image
                        src={collection.imageUrl}
                        alt={collection.title}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-95"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-6 space-y-2"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-medium text-brand-dark group-hover:text-brand-muted-purple transition-colors duration-300">
                        {collection.title}
                      </h2>
                      <span className="text-sm text-brand-grey">
                        {collection.year}
                      </span>
                    </div>

                    <h3 className="text-sm uppercase tracking-[0.1em] text-brand-grey">
                      {collection.subtitle}
                    </h3>

                    <p className="text-brand-grey text-sm leading-relaxed">
                      {collection.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs text-brand-grey">
                        {collection.lookCount} looks
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
