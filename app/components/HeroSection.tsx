"use client";

import { useState, useEffect } from "react";
import EmailSignupModal from "./EmailSignupModal";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  // Auto-show modal after a delay (like the original site)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

      {/* Email Signup Modal */}
      <EmailSignupModal open={showModal} onOpenChange={setShowModal} />
    </>
  );
}
