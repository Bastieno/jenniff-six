"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <motion.section
      className="py-20 bg-brand-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-light text-brand-dark mb-6 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            NEWSLETTER
          </motion.h2>

          <motion.p
            className="text-brand-grey mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Signup to be the first to hear about exclusive deals, special offers
            and upcoming collections
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="flex-1 border-brand-grey border-r-0 rounded-r-none focus:border-brand-dark h-12 transition-all duration-300"
              required
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="bg-brand-dark hover:bg-brand-muted-purple text-white px-8 rounded-l-none h-12 transition-all duration-300"
              >
                subscribe
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
