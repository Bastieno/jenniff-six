import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { notFound } from "next/navigation";

interface RunwayPageProps {
  params: {
    id: string;
  };
}

// Sample runway data structure - replace with actual data source
interface RunwayShow {
  id: string;
  name: string;
  season: string;
  year: string;
  description: string;
  images: string[];
  lookCount: number;
  videoUrl?: string;
}

// Sample runway shows data - replace with actual data from your backend/CMS
const runwayShows: RunwayShow[] = [
  {
    id: "ss25",
    name: "Spring/Summer 2025",
    season: "Spring/Summer",
    year: "2025",
    description: "An exploration of contemporary African elegance, featuring bold silhouettes and intricate detailing that celebrates cultural heritage with modern sophistication.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_7629-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_7849-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_8240-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_8299-680x1020.jpg",
    ],
    lookCount: 24,
  },
  {
    id: "fw24",
    name: "Fall/Winter 2024",
    season: "Fall/Winter",
    year: "2024",
    description: "A rich tapestry of textures and colors, inspired by traditional craftsmanship and contemporary urban landscapes.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/TMWSTUDIOS20254100-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_8421-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/E.A.T-PRODUCTS045-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/E.A.T-PRODUCTS001-Copy-680x1020.jpg",
    ],
    lookCount: 20,
  },
  {
    id: "ss24",
    name: "Spring/Summer 2024",
    season: "Spring/Summer",
    year: "2024",
    description: "Celebrating the vibrancy of African textiles with a modern twist, this collection features flowing silhouettes and bold patterns.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_0614-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/E.A.T-PRODUCTS036-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/OS_7766-680x1020.jpg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    lookCount: 22,
  },
  {
    id: "ss23",
    name: "Spring/Summer 2023",
    season: "Spring/Summer",
    year: "2023",
    description: "A journey through contemporary African fashion, featuring innovative designs that bridge tradition and modernity.",
    images: [
      "https://ejiroamostafiri.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-06-at-3.56.05-PM-680x1020.jpeg",
      "https://ext.same-assets.com/2272108455/1581875077.jpeg",
      "https://ext.same-assets.com/2272108455/395474336.jpeg",
      "https://ejiroamostafiri.com/wp-content/uploads/2025/09/OS_8714.jpg",
    ],
    lookCount: 18,
  },
];

export default async function RunwayPage({ params }: RunwayPageProps) {
  const awaited = await params;
  const runwayId = awaited.id.toLowerCase();
  
  // Find the runway show
  const runwayShow = runwayShows.find((show) => show.id === runwayId);
  
  if (!runwayShow) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-3xl font-light text-gray-900 mb-4">
              Runway Show Not Found
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find the runway show you're looking for. It may have been removed or the link might be incorrect.
            </p>
            <div className="space-y-4">
              <h2 className="text-xl font-light text-gray-800">
                Available Runway Shows
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {runwayShows.map((show) => (
                  <a
                    key={show.id}
                    href={`/runway/${show.id}`}
                    className="text-center group"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg mb-2">
                      <img
                        src={show.images[0]}
                        alt={show.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-medium">{show.name}</h3>
                    <p className="text-xs text-gray-500">{show.lookCount} Looks</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4">{runwayShow.name}</h1>
          <p className="text-xl text-gray-600 mb-2">
            {runwayShow.season} {runwayShow.year}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            {runwayShow.description}
          </p>
          <p className="text-sm text-gray-500 mt-4">
            {runwayShow.lookCount} Looks
          </p>
        </div>

        {/* Video Section - if available */}
        {runwayShow.videoUrl && (
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src={runwayShow.videoUrl}
                className="w-full h-full"
                allowFullScreen
                title={`${runwayShow.name} Runway Show`}
              />
            </div>
          </div>
        )}

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {runwayShow.images.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={image}
                  alt={`${runwayShow.name} Look ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">
                Look {index + 1}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation to other shows */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-light text-center mb-8">Other Shows</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {runwayShows
              .filter((show) => show.id !== runwayId)
              .map((show) => (
                <a
                  key={show.id}
                  href={`/runway/${show.id}`}
                  className="text-center group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg mb-2">
                    <img
                      src={show.images[0]}
                      alt={show.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium">{show.name}</h3>
                  <p className="text-xs text-gray-500">{show.lookCount} Looks</p>
                </a>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all runway shows
export function generateStaticParams() {
  return runwayShows.map((show) => ({
    id: show.id,
  }));
}
