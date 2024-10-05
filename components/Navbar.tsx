"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/#about-us", label: "About Us" },
    { href: "/#join", label: "Join" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/games", label: "Games" },
  ];

  return (
    <nav className="bg-transparent sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl lg:text-3xl font-bold">
              Logo
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8 font-tomorrow">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180, scale: 1 },
                  closed: { rotate: 0, scale: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <X className="block h-7 w-7" aria-hidden="true" />
                ) : (
                  <Menu className="block h-7 w-7" aria-hidden="true" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
