"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";

export default function ProductCategories() {
  const categories = [
    {
      title: "BOUBOU",
      image: "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      href: "/shop/boubou",
    },
    {
      title: "CLASSICS",
      image:
        "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
      href: "/shop/classics",
    },
    {
      title: "SETS",
      image: "https://ext.same-assets.com/2272108455/395474336.jpeg",
      href: "/shop/sets",
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                ></motion.div>

                {/* Category Title - Always Visible */}
                <motion.div
                  className="absolute top-8 left-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-3xl font-light text-white tracking-wider">
                    {category.title}
                  </h3>
                </motion.div>

                {/* View Button - Shows on Hover */}
                <motion.div
                  className="absolute bottom-8 left-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={category.href}>
                      <Button
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-brand-dark px-8 py-3 transition-all duration-300"
                      >
                        VIEW
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
