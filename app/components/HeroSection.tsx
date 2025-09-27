"use client";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* Responsive container with aspect ratio */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]">
          {/* Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://ext.same-assets.com/2272108455/802257756.mp4"
              type="video/mp4"
            />
          </video>

          {/* Subtle Video Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Content Overlay (if needed in future) */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              {/* Overlay content can be added here if needed */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
