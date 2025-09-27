"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductCategories() {
  const categories = [
    {
      title: "BOUBOU",
      image: "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      href: "/shop",
    },
    {
      title: "CLASSICS",
      image:
        "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
      href: "/shop",
    },
    {
      title: "SETS",
      image: "https://ext.same-assets.com/2272108455/395474336.jpeg",
      href: "/shop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  } as const;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
            >
              <Link href={category.href} className="group block">
                <div className="relative aspect-[3/4 overflow-hidden bg-gray-100">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" as const }}
                  />
                  
                  {/* Bottom text overlay - always visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-light text-white tracking-wider mb-2">
                      {category.title}
                    </h3>
                    <span className="text-sm text-white/90 uppercase tracking-wide group-hover:underline">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
