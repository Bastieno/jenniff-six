'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  credits?: {
    photographer?: string;
    stylist?: string;
    model?: string;
    location?: string;
  };
  looks: Array<{
    id: string;
    title: string;
    description?: string;
    imageUrl: string;
  }>;
}

interface CollectionContentProps {
  collection: Collection;
  prevCollection: Collection | null;
  nextCollection: Collection | null;
}

export default function CollectionContent({ collection, prevCollection, nextCollection }: CollectionContentProps) {
  return (
    <>
      {/* Breadcrumb */}
      <motion.nav 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="container mx-auto px-4 mb-8"
      >
        <div className="flex items-center space-x-2 text-sm text-brand-grey">
          <Link href="/" className="hover:text-brand-dark transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/look-books" className="hover:text-brand-dark transition-colors">
            Look Books
          </Link>
          <span>/</span>
          <span className="text-brand-dark">{collection.title}</span>
        </div>
      </motion.nav>

      {/* Collection Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 mb-16"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-light tracking-[0.01em] text-brand-dark mb-4">
            {collection.title}
          </h1>
          <h2 className="text-xl lg:text-2xl uppercase tracking-[0.1em] text-brand-grey mb-6">
            {collection.subtitle}
          </h2>
          <p className="text-brand-grey max-w-3xl text-lg leading-relaxed mb-8">
            {collection.description}
          </p>
          
          {/* Credits */}
          {collection.credits && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
              {collection.credits.photographer && (
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-grey mb-1">Photographer</p>
                  <p className="text-sm text-brand-dark">{collection.credits.photographer}</p>
                </div>
              )}
              {collection.credits.stylist && (
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-grey mb-1">Stylist</p>
                  <p className="text-sm text-brand-dark">{collection.credits.stylist}</p>
                </div>
              )}
              {collection.credits.model && (
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-grey mb-1">Model</p>
                  <p className="text-sm text-brand-dark">{collection.credits.model}</p>
                </div>
              )}
              {collection.credits.location && (
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-grey mb-1">Location</p>
                  <p className="text-sm text-brand-dark">{collection.credits.location}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.section>

      {/* Looks Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.looks.map((look, index) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-gray-50">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="aspect-[3/4] relative"
                >
                  <Image
                    src={look.imageUrl}
                    alt={look.title}
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-95"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </div>
              
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-medium text-brand-dark">
                  {look.title}
                </h3>
                {look.description && (
                  <p className="text-sm text-brand-grey leading-relaxed">
                    {look.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-between pt-16 border-t border-gray-100">
          {prevCollection ? (
            <Link href={`/look-books/${prevCollection.id}`}>
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2 text-brand-grey hover:text-brand-dark transition-colors group"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide">Previous</p>
                  <p className="font-medium">{prevCollection.title}</p>
                </div>
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          <Link href="/look-books">
            <Button 
              variant="outline" 
              className="text-brand-dark border-brand-grey hover:bg-brand-dark hover:text-white transition-colors"
            >
              All Collections
            </Button>
          </Link>

          {nextCollection ? (
            <Link href={`/look-books/${nextCollection.id}`}>
              <Button 
                variant="ghost" 
                className="flex items-center space-x-2 text-brand-grey hover:text-brand-dark transition-colors group"
              >
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wide">Next</p>
                  <p className="font-medium">{nextCollection.title}</p>
                </div>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
}
