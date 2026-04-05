"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/Logos/rvb_horizontal.png" alt="Quido Conciergerie" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Nav — Centered */}
          <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            <Link href="#services" className="text-gray-500 hover:text-black hover:font-medium transition-colors text-base">Services</Link>
            <Link href="#process" className="text-gray-500 hover:text-black hover:font-medium transition-colors text-base">Comment ça marche</Link>
            <Link href="/blog" className="text-gray-500 hover:text-black hover:font-medium transition-colors text-base">Conseils</Link>
            <Link href="/estimation" className="text-gray-500 hover:text-black hover:font-medium transition-colors text-base">Estimer mes revenus</Link>
            <Link href="#faq" className="text-gray-500 hover:text-black hover:font-medium transition-colors text-base">FAQ</Link>
          </nav>

          {/* Desktop CTA */}
          <Link href="/rendez-vous" className="hidden md:inline-flex btn-primary text-base px-6 py-2.5 shrink-0">
            Prendre rendez-vous
          </Link>

          {/* Mobile Toggler */}
          <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white border-b border-gray-200 px-4 py-6 flex flex-col gap-4 absolute w-full left-0 top-full shadow-lg"
        >
          <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black">Services</Link>
          <Link href="#process" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black">Comment ça marche</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black">Conseils</Link>
          <Link href="/estimation" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black">Estimer mes revenus</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)} className="text-lg font-medium text-black">FAQ</Link>
          <Link href="/rendez-vous" onClick={() => setIsOpen(false)} className="btn-primary mt-4 max-w-max">
            Prendre rendez-vous
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
