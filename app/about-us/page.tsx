"use client";

import React from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-12">
            The Brand - Jenniff 6
          </h1>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[600px] mb-16">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2874"
              alt="Ejiro at LFDW SS16 Finale"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Jenniff 6</strong> is an indigenous fashion design, retail,
            and educational powerhouse redefining Africa’s place in global
            fashion. We are celebrated for our innovative designs, mastery of
            indigenous fabrics, and meticulous craftsmanship—while championing
            collaborative retail structures that foster shared experiences and
            accelerate industry growth. Our passion extends beyond design into
            knowledge sharing and capacity building for the fashion ecosystem.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            As the mother brand, Jenniff 6 is a premium womenswear label
            renowned for fusing African dress forms with precise modern garment
            construction—often influenced by the fluidity and ornamental
            elegance of oriental heritage. Our creations celebrate
            individuality, ultra-femininity, and the art of self-expression,
            positioning us as thought leaders in Africa’s retail fashion space.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Since our founding in 2010, Jenniff 6 has become synonymous with
            layered textures, bold embellishments, and design techniques
            reminiscent of African royalty. We push boundaries by reimagining
            traditional attire through innovative cuts, contemporary drapery,
            and fabric manipulation— always upholding elegance and fluidity as
            our guiding principles.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            One of our most iconic reinventions, the modern drape version of the
            traditional “Oleku” outfit, sold in the thousands and won a loyal
            following of cosmopolitan women. This success fueled the launch of
            our flagship store in Ikeja in 2016, which also became home to the
            <strong> Jenniff 6 School of Design (JNSDN)</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            At Jenniff 6, fashion is more than clothing—it is storytelling,
            self-discovery, and cultural preservation. Every design is a reward
            for life’s milestones, an invitation to celebrate bold, expressive,
            and confident womanhood. Today, we proudly serve women across
            borders, weaving African heritage into garments for the global
            citizen.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For over a decade, Jenniff 6 has been recognized for innovation,
            individuality, and excellence. Our work has been featured on global
            platforms such as CNN, Al Jazeera, Marie Claire, and The Guardian,
            and worn by Africa’s most celebrated women, including Tiwa Savage,
            Rita Dominic, Joselyn Dumas, Adesua Etomi, and Dakore Egbuson.
          </p>

          {/* Sub Brands */}
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">DEAT</h3>
              <p className="text-gray-700 leading-relaxed">
                DEAT is our dynamic ready-to-wear brand designed for the modern
                woman. With a focus on quality, versatility, and elegance, DEAT
                offers everything from timeless wardrobe staples to functional
                workwear and playful lounge pieces.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">MINE</h3>
              <p className="text-gray-700 leading-relaxed">
                MINE brings African-inspired creativity to children’s fashion.
                Blending local fabrics and heritage design with practical
                comfort, MINE delivers clothing that is both unique and
                functional—ensuring little ones grow up wrapped in culture and
                style.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">JNSDN</h3>
              <p className="text-gray-700 leading-relaxed">
                The Jenniff 6 School of Design is where the next generation of
                fashion leaders are made. Established in 2016, JNSDN delivers a
                hands-on, globally relevant education that blends practical
                training with professional standards, empowering students to
                become innovative, entrepreneurial, and industry-ready.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">VISION</h2>
            <p className="text-gray-700 leading-relaxed">
              To become a global fashion brand that preserves and elevates
              culture while inspiring society through distinctive, delicate
              garments. We envision a confident, self-aware woman—feminine yet
              powerful—who leads with creativity, innovation, and cultural
              pride, showcasing Africa’s potential to the world.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">MISSION</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Deliver exclusive, timeless designs for women across Africa and
                beyond.
              </li>
              <li>
                Maintain an African-owned brand that is bold, authentic, and
                globally accessible.
              </li>
              <li>
                Define style, create desire, and sustain economic growth through
                fashion.
              </li>
              <li>
                Promote African culture by weaving heritage into every creation.
              </li>
              <li>
                Foster collaboration with global stakeholders to achieve
                cultural sustainability.
              </li>
              <li>
                Empower local communities by supporting boutique partnerships
                and grassroots networks.
              </li>
            </ul>
          </div>

          {/* Retail Partners */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">RETAIL PARTNERS</h2>
            <p className="text-gray-700 mb-4">
              Jenniff 6 collections are stocked across Africa, Europe, and
              beyond, with presence in over 10 premium retail stores including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Grey Velvet Stores – Nigeria (Ikeja, Lekki, Abuja)</li>
              <li>SassyChic Boutique – Dakar, Senegal</li>
              <li>Design Collective – Kenya</li>
              <li>Zere Fashion House – U.K</li>
              <li>41 Luxe – Abuja, Nigeria</li>
              <li>Renaissance Hotel – Ikeja, Nigeria</li>
              <li>Shop and Play – Abuja</li>
              <li>LeyiUsh – Calabar, Nigeria</li>
              <li>The Curvy Side of Lagos – U.K</li>
              <li>House of Linen – Port Harcourt, Nigeria</li>
            </ul>
          </div>

          {/* Awards / Recognition */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">AWARDS & RECOGNITION</h2>
            <p className="text-gray-700 mb-4">
              Over the years, Jenniff 6 has been honored with multiple awards
              celebrating our innovation and leadership, including:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Honorary Award for Empowering Women in Fashion (AFDEC – 2019)
              </li>
              <li>Icon of Hope Award (Africa Design & Fashion Week – 2018)</li>
              <li>
                Achiever Alumni Excellence Award (Yaba College of Tech – 2016)
              </li>
              <li>
                Creative Entrepreneur of the Year (Awesome Treasures Foundation
                – 2016)
              </li>
              <li>
                Outstanding Emerging Designer (Heineken Lagos Fashion Week –
                2015)
              </li>
              <li>
                Designer of the Year (City People Fashion & Beauty Awards –
                2015)
              </li>
              <li>Youth Skill Development Award (Yaba Tech – 2015)</li>
              <li>
                Regional Winner, Youth Enterprise Innovation (YOUWIN – 2014)
              </li>
            </ul>

            <p className="text-gray-700 mt-6 mb-4">
              Our collections have graced international runways and platforms
              such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Paris Fashion Week – 2019</li>
              <li>Glitz Africa Fashion Week – 2014, 2015, 2016, 2018, 2019</li>
              <li>Dakar Fashion Week – 2017</li>
              <li>Kenya International Fashion Week – 2014</li>
              <li>USAID Origin Africa – Mauritius, 2011</li>
              <li>FIMO Togo Fashion Festival – 2021</li>
              <li>Featured on Beyoncé’s Black Parade List – 2020</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
