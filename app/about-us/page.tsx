'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-12">
            The Brand - EJIRO AMOS TAFIRI
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
            Ejiro Amos Tafiri is an Indigenous fashion design, retail and educational company. 
            It prides itself on its innovative designs, use of indigenous fabrics and attention 
            to detail, while championing the push for collaborative retail structures in Africa's 
            fashion industry, to foster shared experiences and accelerate growth. We are passionate 
            about sharing knowledge and capacity development within the fashion ecosystem.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ejiro Amos Tafiri (the mother brand) is an Indigenous premium brand for quality women's 
            wear that fuses African dress forms with detailed modern garment construction techniques, 
            often influenced by the fluidity and ornamental style of oriental heritage. We are thought 
            leaders in the retail fashion space, creating well-tailored garments that celebrate 
            individuality and ultra-femininity.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Established in 2010, the Ejiro Amos Tafiri brand has a keen knack for layering, a 
            multi-texture fusion of fabrics and embellishments reminiscent of African royalty while 
            keeping elegance, complex simplicity and fluidity as the watchword. The brand seeks to 
            challenge and push what is inherently traditional to mainstream fashion through innovative 
            applications of fabric, modern cuts, and drapery technique while celebrating feminine curves.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The reimagination of a popular traditional outfit, "Oleku", to a modern drape dress went 
            on to sell thousands. It endeared a vast local following of upwardly mobile, cosmopolitan 
            women who filled up high-end location stores in Lagos, Ikoyi, in 2014. Similarly, the 
            Ikeja flagship store and home to the Ejiro Amos Tafiri school of Design was launched in 2016.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ejiro Amos Tafiri acknowledges the importance of fostering progressive cultures to stay 
            alert and updated with market demands as a fashion company. The products and services 
            offered are rewards for milestones conquered in the journey through life as it takes each 
            client on a path of personal expression and discovery. The brand caters to women across 
            borders with a vision to build and embrace cultural stories through Design that celebrate 
            the bold, expressive and confident woman.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ejiro Amos Tafiri is synonymous with innovation, individuality and elegance all whilst 
            being geared towards excellence which is distinctive traits of even the employees of 
            Ejiro Amos Tafiri.
          </p>

          <p className="text-gray-700 leading-relaxed mb-12">
            For over a decade, Ejiro Amos Tafiri has gained repeated recognition for its work in 
            fashion and has, over the years, been featured in several publications such as CNN, 
            Aljazeera, Today's Woman, Guardian and Marie Claire. The brand has been the toast of 
            African Celebrities such as Tiwa Savage, Rita Dominic, Joselyn Dumas, Wage, Adesua Etomi, 
            Dakore Egbuson, and Ajoke Silva, among others.
          </p>

          {/* Sub Brands Section */}
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">DEAT</h3>
              <p className="text-gray-700 leading-relaxed">
                A sub brand, is a dynamic brand that designs and retails ready to wear for women. 
                Quality, elegance, ease and versatility is what DEAT offers the modern woman. Its 
                offerings range from staple pieces, to trendy functional and fun, work and lounge wear.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">MINE</h3>
              <p className="text-gray-700 leading-relaxed">
                A fun functional brand for quality children's clothing. It embraces the uniquely local 
                fabrics and designs that's incorporated into easy to wear, functional and practical 
                designs while showcasing designs and textures that are unique to Africa.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">EATSDN</h3>
              <p className="text-gray-700 leading-relaxed">
                Ejiro Amos Tafiri School of Design is a home ground for fashion industry hopefuls. 
                We believe in empowering the next generation of creatives and offer an invasive 
                practical, real-world sphere of learning while making all efforts to provide you 
                only useful, necessary and applicable information at the highest instructional levels.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Established in 2016, the Ejiro Amos Tafiri School of Design was developed to educate 
                and train students with a knowledge base to set them ahead. We aim to build a generation 
                of educated, seasoned and professional fashion entrepreneurs from each student per time. 
                EATSDN is committed to providing high-quality education to help prepare and equip the 
                students with Standard Professional Techniques for the competitive fashion environment 
                and affiliate fashion institutes.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">VISION</h2>
            <p className="text-gray-700 leading-relaxed">
              Ejiro Amos Tafiri is fueled with a vision to become a global brand associated with the 
              preservation and development of culture and society through crafting unique and delicate 
              garments for the discerning global citizen, a confident and self-aware woman who is 
              utterly feminine and encouraging, inspiring, promoting innovation within our community 
              and showcase what is possible within Africa.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">MISSION</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                To offer exclusive, elegant and Timeless designs of quality women's wears to our 
                customers across and beyond Africa.
              </li>
              <li>
                To maintain an African-owned brand that is rich and bold in style and, most 
                importantly, internationally accessible.
              </li>
              <li>
                Represent the most refined qualities, defining style and creating desire whilst 
                ensuring sustainable economic growth.
              </li>
              <li>
                To provide products and services that promote premium and authentic African culture 
                through our designs.
              </li>
              <li>
                Collaboration is key to the achievement of our core purposes. To achieve this, We 
                strive for recognition with global stakeholders, working for cultural sustainability 
                through fashion. To create, enable, landfill learning and wealth-building opportunities 
                with partners
              </li>
              <li>
                Similarly, We believe the small things matter, and we find opportunities even in the 
                minor things. For example, we strive to reach the nooks and crannies of Nigeria to 
                network and partner with local stakeholder by filling up existing boutiques without 
                having to establish a physical presence or store.
              </li>
            </ul>
          </div>

          {/* Company Values Section */}
          {/* <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">COMPANY VALUES</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Integrity', 'Boldness', 'Honesty', 'Trust', 'Accountability', 
                'Commitment to Customers', 'Passion', 'Fun', 'Humility', 
                'Continuous Learning', 'Ownership', 'Constant Improvement',
                'Leadership', 'Diversity', 'Innovation', 'Quality', 'Teamwork', 'Simplicity'
              ].map((value, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-600">• {value}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Retail Partners Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">RETAIL PARTNERS</h2>
            <p className="text-gray-700 mb-4">
              Ejiro Amos Tafiri has a presence in 10 stores. Some of which are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>De-Essentia</li>
              <li>Ananse.com</li>
              <li>SassyChicBoutique Dakar, Senegal</li>
              <li>The Curvy Side of Lagos, UK</li>
              <li>LeyiUsh, Calabar, Nigeria</li>
              <li>41 Luxe Abuja Nigeria</li>
              <li>Grey Velvet Stores, Ikeja/ Lekki/ Abuja Nigeria</li>
              <li>Shop and Play Abuja</li>
              <li>Design Collective Kenya</li>
              <li>Renaissance Hotel Ikeja</li>
              <li>Zere Fashion House, U.K</li>
              <li>House of Linen, Port Harcourt, Nigeria</li>
            </ul>
          </div>

          {/* Awards Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">AWARDS / RECOGNITION</h2>
            <p className="text-gray-700 mb-4">
              Consistency paved the way for the brand as an innovator and a notable leader on 
              several entrepreneurship platforms hence being awarded serial accolades.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                Honorary award for empowering women in the Fashion Industry by the African Fashion 
                Development and Empowerment Centre at The Women in Fashion Summit (WIFS) in March 2019
              </li>
              <li>The Icon of Hope Award at the Africa Design and Fashion Week In 2018</li>
              <li>The 2016 Achiever Alumni's Excellence Award by the Rector, Yaba College of Technology</li>
              <li>Creative Entrepreneur of the Year Award by the Awesome Treasures Foundation in November 2016</li>
              <li>The Outstanding Emerging Designer at the Heineken Lagos Fashion Week award in 2015</li>
              <li>Recipient of the Designer of the Year at the City People Fashion & Beauty Awards in 2015</li>
              <li>Award of Honor & Recognition for the Nigerian Youth Skill development by Yaba College of Technology in 2015</li>
              <li>Regional winner for the Federal Government Youth Enterprise with Innovation in Nigeria (YOUWIN) in October 2014</li>
              <li>Awarded the Glam and Essence fastest Growing fashion brand in 2014</li>
              <li>The City People Fashion and beauty Awards for the Fashion Film of the Year In 2013</li>
            </ul>

            <p className="text-gray-700 mt-6 mb-4">
              Ejiro Amos Tafiri has shown its collections on international platforms across Africa, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>FIMO Togo Fashion Festival – February 2021</li>
              <li>Featured among the 100 African owned fashion brands featured on the Black Parade by Beyoncé – September 2020</li>
              <li>Style by Zenith – December 2019</li>
              <li>Paris Fashion Week – September 2019</li>
              <li>Glitz Africa Fashion Week – October 2019</li>
              <li>Dakar fashion week – July 2017</li>
              <li>Gtbank Fashion Weekend – November 2016, 2017</li>
              <li>Glitz Africa Fashion Week, Ghana – October 2014, 2015, 2016, 2018 & 2019</li>
              <li>Kenya International fashion Week – August 2014</li>
              <li>Masa Arts Fashion Festival, Ivory Coast – April 2014</li>
              <li>MTV Made in BLACK campaign – August 2014</li>
              <li>Malawi Fashion Week – 2013</li>
              <li>Woven Threads Exhibition, London – 2013</li>
              <li>USAID's Origin of Africa, Mauritius – 2011</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
