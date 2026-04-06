"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProofAndBooking() {
  return (
    <section id="estimer" className="py-32 bg-offwhite relative overflow-hidden">
      {/* Formes organiques en fond (DA Quido) */}
      <div 
        className="absolute -right-20 top-10 w-[600px] h-[600px] bg-quido/10 -z-10"
        style={{ borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%' }}
      ></div>
      <div 
        className="absolute -left-32 bottom-[-10%] w-[500px] h-[500px] bg-gray-50 -z-10"
        style={{ borderRadius: '40% 60% 70% 30% / 50% 40% 60% 50%' }}
      ></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center relative"
        >
          {/* Label éditorial */}
          <div className="flex items-center justify-center gap-4 w-fit mx-auto mb-8">
            <span className="h-px w-12 bg-black block"></span>
            <span className="text-xs font-semibold text-black uppercase tracking-[0.2em]">Revenus Locatifs</span>
            <span className="h-px w-12 bg-black block"></span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-[5.5rem] font-display font-bold mb-8 tracking-tight text-black leading-[0.95]">
            Révélez votre <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10">potentiel caché.</span>
              <svg className="absolute w-[105%] h-[0.5em] -bottom-[0.1em] -left-[2.5%] z-0 text-quido-yellow" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto mb-14 font-light leading-relaxed">
            Une estimation précise, transparente et sans engagement. Une gestion locale, performante et humaine pour révéler le plein potentiel de votre bien dans le Pays de Gex.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/estimation" className="group relative inline-flex items-center justify-center gap-4 bg-black text-white px-10 py-5 rounded-full text-lg font-medium overflow-hidden transition-all hover:bg-quido duration-300 w-full sm:w-auto shadow-xl hover:shadow-[0_20px_40px_rgba(0,205,180,0.25)]">
              <span className="relative z-10">Demander l'estimation</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
