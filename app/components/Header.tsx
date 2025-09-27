"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/app/components/ui/sheet";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useCurrency } from "@/app/contexts/CurrencyContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const desktopCurrencyRef = useRef<HTMLDivElement>(null);
  const mobileCurrencyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Handle outside clicks for currency dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is outside both desktop and mobile currency selectors
      if (
        currencyDropdownOpen &&
        desktopCurrencyRef.current &&
        !desktopCurrencyRef.current.contains(target) &&
        mobileCurrencyRef.current &&
        !mobileCurrencyRef.current.contains(target)
      ) {
        setCurrencyDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currencyDropdownOpen]);

  const navigationItems = [
    {
      title: "SHOP",
      href: "/shop",
      submenu: [
        {
          title: "BY CATEGORY",
          items: [
            { title: "Dresses", href: "/category/dresses" },
            { title: "Female Category", href: "/category/female" },
            { title: "Male Category", href: "/category/male" },
            { title: "Sets", href: "/category/sets" },
            { title: "Kaftan", href: "/category/kaftan" },
          ],
        },
        {
          title: "BY COLLECTION",
          items: [
            { title: "SS25", href: "/collection/ss25" },
            { title: "SS 24", href: "/collection/ss24" },
            { title: "SS 23", href: "/collection/ss23" },
            { title: "SS 22", href: "/collection/ss22" },
            { title: "SS 21", href: "/collection/ss21" },
          ],
        },
      ],
    },
    {
      title: "COLLECTIONS",
      href: "/collections",
      submenu: [
        {
          title: "LOOK BOOKS",
          items: [
            { title: "All Look Books", href: "/look-books" },
            { title: "Resort 2024", href: "/look-books/resort-2024" },
            { title: "SS24 Urban Minimalism", href: "/look-books/ss-2024" },
            { title: "FW23 Monochrome Dreams", href: "/look-books/fw-2023" },
            { title: "SS23 Modern Looks", href: "/look-books/ss-2023" },
          ],
        },
        {
          title: "RUNWAY",
          items: [
            { title: "SS25 RUNWAY", href: "/runway/ss25" },
            { title: "SS 23 Modern Looks", href: "/runway/ss23" },
            { title: "SS 22 Retrospect", href: "/runway/ss22" },
          ],
        },
      ],
    },
    { title: "SDN", href: "/jn-sdn" },
    { title: "ABOUT US", href: "/about-us" },
    { title: "CONTACT", href: "/contact-us" },
  ];

  return (
    <header className="border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="px-4">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Currency Selector */}
          <div className="relative" ref={desktopCurrencyRef}>
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center space-x-1 text-sm text-brand-grey hover:text-brand-dark transition-colors"
            >
              <span>{currency}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            {currencyDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-100 rounded-sm min-w-[80px] z-50"
              >
                <button
                  onClick={() => {
                    setCurrency("NGN");
                    setCurrencyDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                    currency === "NGN"
                      ? "text-brand-dark font-medium"
                      : "text-brand-grey"
                  }`}
                >
                  NGN
                </button>
                <button
                  onClick={() => {
                    setCurrency("USD");
                    setCurrencyDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                    currency === "USD"
                      ? "text-brand-dark font-medium"
                      : "text-brand-grey"
                  }`}
                >
                  USD
                </button>
              </motion.div>
            )}
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <motion.h1
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-light tracking-[0.3em] text-brand-dark cursor-pointer"
              >
                Jenniff 6
              </motion.h1>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center py-4 border-gray-100">
          <div className="flex items-center space-x-12">
            {navigationItems.map((item) => (
              <motion.div
                key={item.title}
                className="group relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={item.href || "#"}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-medium px-0 transition-colors duration-300
                      ${isActive(item.href)
                        ? "text-brand-muted-purple underline underline-offset-4"
                        : "text-brand-dark hover:text-brand-muted-purple"}
                    `}
                  >
                    {item.title}
                  </Button>
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 pt-2">
                    <div className="bg-white shadow-lg border border-gray-100 rounded-sm min-w-[200px]">
                      {item.submenu.map((section) => (
                        <div
                          key={section.title}
                          className="p-4 border-b border-gray-50 last:border-b-0"
                        >
                          <h4 className="text-xs font-semibold text-brand-grey uppercase mb-2">
                            {section.title}
                          </h4>
                          <div className="space-y-1">
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className={`block text-sm py-1 transition-colors
                                  ${pathname === subItem.href
                                    ? "text-brand-muted-purple font-semibold"
                                    : "text-brand-dark hover:text-brand-muted-purple"}
                                `}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(true)}
                  className="relative z-10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-80 bg-white flex flex-col p-0"
              >
                {/* Fixed Header */}
                <div className="px-6 py-4">
                  <SheetTitle>Menu</SheetTitle>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <nav className="space-y-1">
                    {navigationItems.map((item) => (
                      <div key={item.title}>
                        {item.submenu ? (
                          <>
                            <button
                              onClick={() => {
                                if (expandedItems.includes(item.title)) {
                                  setExpandedItems(
                                    expandedItems.filter(
                                      (i) => i !== item.title
                                    )
                                  );
                                } else {
                                  setExpandedItems([
                                    ...expandedItems,
                                    item.title,
                                  ]);
                                }
                              }}
                              className="w-full flex items-center justify-between text-brand-dark hover:text-brand-muted-purple py-3 transition-colors"
                            >
                              <span>{item.title}</span>
                              {expandedItems.includes(item.title) ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </button>
                            {expandedItems.includes(item.title) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pb-2 space-y-2">
                                  {item.submenu.map((section) => (
                                    <div key={section.title}>
                                      <p className="text-xs font-semibold text-brand-grey uppercase mb-2">
                                        {section.title}
                                      </p>
                                      <div className="space-y-1">
                                        {section.items.map((subItem) => (
                                          <Link
                                            key={subItem.title}
                                            href={subItem.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block text-sm py-1 pl-2 transition-colors
                                              ${pathname === subItem.href
                                                ? "text-brand-muted-purple font-semibold"
                                                : "text-brand-dark hover:text-brand-muted-purple"}
                                            `}
                                          >
                                            {subItem.title}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </>
                        ) : (
                          <Link
                            href={item.href || "#"}
                            onClick={() => setIsOpen(false)}
                            className={`w-full text-left block py-3 transition-colors
                              ${isActive(item.href)
                                ? "text-brand-muted-purple font-semibold"
                                : "text-brand-dark hover:text-brand-muted-purple"}
                            `}
                          >
                            {item.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Currency Selector */}
            <div className="relative" ref={mobileCurrencyRef}>
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center space-x-1 text-xs text-brand-grey"
              >
                <span>{currency}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              {currencyDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-100 rounded-sm min-w-[60px] z-50"
                >
                  <button
                    onClick={() => {
                      setCurrency("NGN");
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2 py-1 text-xs hover:bg-gray-50 ${
                      currency === "NGN"
                        ? "text-brand-dark font-medium"
                        : "text-brand-grey"
                    }`}
                  >
                    NGN
                  </button>
                  <button
                    onClick={() => {
                      setCurrency("USD");
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2 py-1 text-xs hover:bg-gray-50 ${
                      currency === "USD"
                        ? "text-brand-dark font-medium"
                        : "text-brand-grey"
                    }`}
                  >
                    USD
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          <Link
            href="/"
            className="flex-1 flex md:ml-[-100px] ml-[-32px] justify-center"
          >
            <h1 className="text-lg font-light tracking-[0.2em] text-brand-dark cursor-pointer">
              Jenniff 6
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
