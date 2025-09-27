"use client";

export default function HeroSection() {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src="https://ext.same-assets.com/2272108455/802257756.mp4"
              type="video/mp4"
            />
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            {/* You can add any overlay content here if needed */}
          </div>
        </div>
      </section>
    </>
  );
}
