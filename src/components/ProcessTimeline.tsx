"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessTimeline() {
  const steps = [
    { 
      day: "Jour 01", 
      title: "L'Audit", 
      desc: "Analyse experte de votre bien sur place et définition d'une stratégie de tarification agressive.",
      img: "/images/timeline-1.png"
    },
    { 
      day: "Jour 03", 
      title: "La Création", 
      desc: "Direction artistique, shooting professionnel et staging pour faire briller votre intérieur en ligne.",
      img: "/images/timeline-2.png"
    },
    { 
      day: "Jour 05", 
      title: "Le Déploiement", 
      desc: "Mise en ligne ultra-optimisée, synchronisation des calendriers et lancement algorithmique.",
      img: "/images/timeline-3.png"
    },
    { 
      day: "Jour 07", 
      title: "Le Résultat", 
      desc: "Les premières réservations tombent. La logistique, les clés et le ménage sont entièrement automatisés.",
      img: "/images/timeline-4.png"
    }
  ];

  return (
    <section id="process" className="py-32 bg-white overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 lg:mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-quido mb-6 block">Le Parcours</span>
            <h2 className="text-5xl lg:text-7xl font-display font-bold tracking-tight leading-[0.95] text-black">
              Opérationnel en <br />
              <span className="relative inline-block mt-2 z-10">
                <span className="relative z-20">7 jours chrono.</span>
                <svg className="absolute w-[105%] h-[0.3em] -bottom-[0.05em] -left-[2.5%] z-0 text-quido" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg font-body leading-relaxed lg:pb-3">
            Oubliez les démarches longues et compliquées. Notre processus est conçu pour vous générer des revenus le plus rapidement possible.
          </p>
        </div>

        {/* Disposition Waterfall (Escalier) avec Images */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 mt-16 md:min-h-[600px]">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex-1 relative bg-offwhite border border-gray-100 hover:bg-black hover:text-white hover:border-black transition-all duration-500 flex flex-col group cursor-default shadow-sm hover:shadow-2xl overflow-hidden
                ${i === 0 ? 'md:mb-32' : ''} 
                ${i === 1 ? 'md:mt-10 md:mb-22' : ''} 
                ${i === 2 ? 'md:mt-20 md:mb-12' : ''} 
                ${i === 3 ? 'md:mt-32' : ''}
              `}
            >
              <div className="relative h-56 lg:h-64 w-full overflow-hidden shrink-0 border-b border-black/10 group-hover:border-white/10 transition-colors z-10">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10" />
                 <Image fill sizes="(max-width: 768px) 100vw, 25vw" src={step.img} alt={step.title} className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                 <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-bold tracking-[0.2em] text-white bg-black/60 backdrop-blur-md uppercase px-4 py-2 rounded-full group-hover:bg-[#fae150] group-hover:text-black transition-colors duration-500">
                      {step.day}
                    </span>
                 </div>
              </div>
              
              <div className="p-8 flex flex-col justify-between flex-1">
                <h3 className="text-3xl font-display font-medium leading-tight mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-body leading-relaxed mt-4 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
