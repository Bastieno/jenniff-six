"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function EatSdnPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fashion design images from Unsplash
  const carouselImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&h=900&fit=crop&crop=center",
      alt: "Fashion design studio with fabric and patterns",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1600&h=900&fit=crop&crop=center",
      alt: "Fashion designer working on sketches",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=900&fit=crop&crop=center",
      alt: "Fashion atelier with mannequins and designs",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1537832816519-689ad163238b?w=1600&h=900&fit=crop&crop=center",
      alt: "Fashion design workspace with materials",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=900&fit=crop&crop=center",
      alt: "Fashion show runway preparation",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12 mb-24"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold tracking-tight text-black leading-[0.9] mb-12">
              FRANCIS NDUAMAKA
              <br />
              SCHOOL OF DESIGN
            </h1>

            <div className="mb-16">
              <p className="text-xl lg:text-2xl font-bold text-black mb-2">
                Currently on hold and would be back better in October 2025.
              </p>
            </div>

            <div className="space-y-8 text-base lg:text-lg text-gray-800 leading-relaxed max-w-5xl">
              <p>
                Francis Nduamaka School of Design (EATSDN) is a home ground for
                fashion industry hopefuls. We offer an invasive practical real
                world sphere of learning while making all efforts to provide you
                only useful, necessary and practical information at the highest
                instructional levels.
              </p>
              <p>
                Francis Nduamaka educates and trains students with a knowledge
                base that will set you ahead. We have a goal to build a
                generation of educated, seasoned and professional fashion
                entrepreneurs each student per time
              </p>
              <p>
                At EATSDN You will find that members of our faculty led by the
                Founder and Creative Director Francis Nduamaka; continue to work
                in the aspects they train students in. Our industry connected
                and academically trained tutors have experienced first hand the
                benefits of fashion education and devote to lending a hand to
                hone your skills. This is the foundation we are building on.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Carousel Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="container mx-auto px-6 lg:px-12 mb-24"
        >
          <div
            className="max-w-7xl mx-auto relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] lg:aspect-[16/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={carouselImages[currentSlide].url}
                    alt={carouselImages[currentSlide].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Left Arrow */}
              <AnimatePresence>
                {isHovered && (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={prevSlide}
                    className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Right Arrow */}
              <AnimatePresence>
                {isHovered && (
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={nextSlide}
                    className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-black" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Curriculum Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto px-6 lg:px-12 mb-24"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-12">
              Curriculum
            </h2>

            <p className="text-base lg:text-lg text-gray-800 leading-relaxed mb-16 max-w-5xl">
              We have a responsive curriculum and accelerated programs which can
              help you jump-start a career in fashion in Nigeria or anywhere
              else. With properly constructed outlines in addition to expertise
              in what and how we teach, your education is hands-on, interactive,
              relevant and will produce results.
            </p>

            <div className="space-y-16">
              {/* Fashion Core */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                  Fashion Core (Introductory class)
                </h3>
                <div className="space-y-3 text-base lg:text-lg">
                  <p className="text-gray-800">
                    <span className="font-semibold">Course fee –</span> 270,000
                    naira (Payment can be made in two installments and it covers
                    provision of starter kit)
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Course duration –</span> 3
                    months
                  </p>

                  <div className="mt-8">
                    <p className="font-semibold text-black mb-4">
                      Course outline includes:
                    </p>
                    <ul className="space-y-2 text-gray-800">
                      <li>– Fashion Illustration</li>
                      <li>– Pattern Drafting</li>
                      <li>– Clothing construction</li>
                      <li>– Textile studies and application</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Single Diploma Courses */}
              <div>
                <p className="text-base lg:text-lg text-gray-800 mb-8">
                  As an alternative to the full Fashion Core course, we also
                  offer single diploma courses in:
                </p>

                <div className="space-y-3 text-base lg:text-lg">
                  <p className="text-gray-800">
                    Pattern Drafting (Beginner – 150,000 naira / Advanced –
                    200,000 naira)
                  </p>
                  <p className="text-gray-800">Draping – 150,000 naira</p>
                  <p className="text-gray-800">
                    Fashion business and Branding – 150,000 naira
                  </p>
                  <p className="text-gray-800">
                    Bespoke and Bridal wear – 150,000 naira
                  </p>
                  <p className="text-gray-800">Ready to wear – 150,000 naira</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-6 lg:px-12 border-t border-gray-200 pt-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              For more enquiries,
            </h2>

            <div className="space-y-4 text-base lg:text-lg text-gray-800">
              <p>Contact us via email or Telephone</p>
              <p className="font-semibold text-black">
                <a href="tel:09099877279" className="hover:underline">
                  09099877279
                </a>{" "}
                or{" "}
                <a
                  href="mailto:sdn@ejiroamostairi.com"
                  className="hover:underline"
                >
                  sdn@ejiroamostairi.com
                </a>
              </p>
              <p>
                Or visit us at 9A, Adeboye Solanke off Allen Avenue, Ikeja
                Lagos.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
