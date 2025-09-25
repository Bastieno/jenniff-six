"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer email signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="https://ext.same-assets.com/2272108455/3580406007.png"
                  alt="Ejiro Amos Tafiri"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">
                    EJIRO AMOS TAFIRI
                  </h3>
                  <p className="text-brand-grey text-sm leading-relaxed max-w-md">
                    The Ejiro Amos Tafiri brand is a woman's best friend; it
                    celebrates the sophistication, class and uniqueness of every
                    woman.
                  </p>
                </div>
              </div>
            </div>

            {/* Links Section 1 */}
            <div>
              <div className="space-y-4">
                <a
                  href="/shipping"
                  className="block text-brand-dark hover:text-brand-muted-purple text-sm"
                >
                  Shipping
                </a>
                <a
                  href="/order-tracking"
                  className="block text-brand-dark hover:text-brand-muted-purple text-sm"
                >
                  Order Tracking
                </a>
                <a
                  href="/sizing-chart"
                  className="block text-brand-dark hover:text-brand-muted-purple text-sm"
                >
                  Sizing Chart
                </a>
              </div>
            </div>

            {/* Links Section 2 */}
            <div>
              <div className="space-y-4">
                <a
                  href="/about"
                  className="block text-brand-dark hover:text-brand-muted-purple text-sm"
                >
                  About Us
                </a>
                <a
                  href="/interviews"
                  className="block text-brand-dark hover:text-brand-muted-purple text-sm"
                >
                  Interviews
                </a>
                <a
                  href="/press"
                  className="block text-brand-dark hover:text-brand-muted-purple text-sm"
                >
                  Press
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="max-w-md">
              <h4 className="text-lg font-semibold text-brand-dark mb-4">
                Join our list
              </h4>
              <p className="text-brand-grey text-sm mb-6">
                Signup to be the first to hear about exclusive deals, special
                offers and upcoming collections
              </p>

              <form onSubmit={handleSubmit} className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="flex-1 border-brand-grey border-r-0 rounded-r-none focus:border-brand-dark"
                  required
                />
                <Button
                  type="submit"
                  className="bg-brand-dark hover:bg-brand-muted-purple text-white px-6 rounded-l-none"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-brand-grey text-sm">
              ©2021 Ejiro Amos Tafiri. All rights reserved
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="/brand"
                className="text-brand-grey hover:text-brand-dark text-sm"
              >
                Brand
              </a>
              <a
                href="/designer"
                className="text-brand-grey hover:text-brand-dark text-sm"
              >
                Designer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
