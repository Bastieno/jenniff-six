"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-grey text-sm">
            ©{year} Jenniff 6. All rights reserved
          </p>

          <div className="flex items-center">
            <Link
              href="/about-us"
              className="text-brand-grey hover:text-brand-dark text-sm"
            >
              Brand
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
