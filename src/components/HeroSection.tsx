"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background modéré pour la lisibilité */}
      <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-gradient-to-bl from-quido-light/40 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-3 w-fit">
              <span className="h-px w-8 bg-quido block"></span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">Quido Conciergerie</span>
            </div>

            <h1 className="text-6xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-black">
              L'esprit libre.<br />
              Les revenus <span className="relative inline-block z-10">
                <span className="relative z-20">en hausse.</span>
                <svg className="absolute w-[105%] h-[0.3em] -bottom-[0.05em] -left-[2.5%] z-0 text-quido" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-gray-500 max-w-lg leading-relaxed font-body">
              La conciergerie de confiance qui optimise vos revenus locatifs tout en vous garantissant une sérénité absolue. Ancrage 100% local dans le Pays de Gex.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-4 items-center">
              <Link href="/rendez-vous" className="group bg-black text-white px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto">
                Prendre rendez-vous <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#services" className="text-lg text-gray-500 hover:text-black hover:border-b-black border-b border-transparent pb-1 transition-all">
                Explorer les services
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
               <p className="text-sm text-gray-400 font-medium">Déjà partenaires de plusieurs dizaines de propriétaires sereins dans le Pays de Gex.</p>
            </div>
          </motion.div>

          <div className="relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0 flex items-center justify-center">
            {/* Image 1: Main (Appartement) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute right-0 top-[5%] w-[70%] h-[80%] z-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden"
              style={{ borderRadius: '45% 55% 55% 45% / 55% 45% 55% 45%' }}
            >
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 hover:bg-transparent"></div>
              <Image fill sizes="(max-width: 1024px) 50vw, 25vw" src="/images/hero-apartment-gex.png" alt="Appartement en location saisonnière géré par conciergerie Quido au Pays de Gex" className="object-cover" />
            </motion.div>

            {/* Image 2: Bedroom */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute left-0 bottom-[5%] w-[60%] h-[55%] z-20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border-8 border-white overflow-hidden"
              style={{ borderRadius: '55% 45% 40% 60% / 60% 50% 50% 40%' }}
            >
              <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-500 hover:bg-transparent"></div>
              <Image fill sizes="(max-width: 1024px) 70vw, 35vw" src="/images/hero-bedroom.png" alt="Chambre premium aménagée pour location Airbnb à Ferney-Voltaire" className="object-cover" priority />
            </motion.div>

            {/* Image 3: Point de Focus (Cuisine) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut", type: "spring" }}
              className="absolute left-[15%] top-0 w-[45%] h-[40%] z-30 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.25)] border-[6px] border-white overflow-hidden"
              style={{ borderRadius: '50% 50% 60% 40% / 40% 60% 40% 60%' }}
            >
              <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-500 hover:bg-transparent"></div>
              <Image fill sizes="(max-width: 1024px) 40vw, 20vw" src="/images/hero-kitchen.png" alt="Cuisine équipée pour location saisonnière haut de gamme Pays de Gex" className="object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
