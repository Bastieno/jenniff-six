"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function SdnPage() {
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
              Jenniff 6
              <br />
              SCHOOL OF DESIGN
            </h1>

            <div className="space-y-8 text-base lg:text-lg text-gray-800 leading-relaxed max-w-5xl">
              <p>
                Jenniff 6 School of Design (JNSDN) is more than a fashion
                school—it is a launchpad for ambitious creators who want to
                shape the future of the fashion industry. We immerse our
                students in a dynamic, real-world learning environment, focusing
                only on what is practical, essential, and transformative at the
                highest level of instruction.
              </p>
              <p>
                At Jenniff 6, we don't just teach fashion—we cultivate
                visionaries. Our mission is to equip every student with the
                knowledge, confidence, and entrepreneurial mindset needed to
                lead with distinction. We are committed to raising a generation
                of educated, innovative, and professional fashion entrepreneurs,
                one student at a time.
              </p>
              <p>
                At JNSDN, you will learn from faculty who don't just
                lecture—they lead by example. Guided by our Founder and Creative
                Director, Jenniff 6, our tutors remain active professionals in
                the very fields they teach. Their industry expertise, combined
                with academic rigor, ensures you receive the mentorship and
                hands-on training needed to sharpen your skills and excel. This
                is the legacy we are building—a community where talent becomes
                mastery, and passion becomes profession.
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
              Our curriculum is responsive, forward-thinking, and designed to
              move you from passion to profession with speed and precision.
              Through accelerated programs and expertly crafted course outlines,
              we provide an education that is hands-on, interactive, and
              globally relevant—whether you aim to launch your career in Nigeria
              or make your mark on the international fashion stage. At JNSDN,
              every lesson is designed to deliver real results and lasting
              impact.
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
                <a href="tel:08028474418" className="hover:underline">
                  08028474418
                </a>{" "}
                or{" "}
                <a href="mailto:jenniff6@gmail.com" className="hover:underline">
                  jenniff6@gmail.com
                </a>
              </p>
              <p>
                Or visit us at 40, Ayodele Fanoiki Street, Isheri, Magodo,
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
