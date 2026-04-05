"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingSection() {
  const inclusions = [
    { num: "01.", title: "Mise en Valeur", desc: "Création complète de l'annonce et shooting professionnel d'intérieur." },
    { num: "02.", title: "Yield Management", desc: "Optimisation tarifaire quotidienne avec nos algorithmes pour maximiser le taux de remplissage." },
    { num: "03.", title: "Gestion 24/7", desc: "Sélection rigoureuse et communication avec les voyageurs du premier message au départ." },
    { num: "04.", title: "Ménage Professionnel", desc: "Coordination de l'entretien complet et de la blanchisserie (frais facturés aux voyageurs)." },
  ];

  return (
    <section id="pricing" className="py-32 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête éditorial */}
        <div className="text-center mb-24 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-quido mb-6 block">Notre Modèle Financier</span>
          <h2 className="text-5xl lg:text-7xl font-display font-medium tracking-tight">
            Transparence <br />
            <span className="font-bold relative inline-block mt-2">
              <span className="relative z-10">absolue.</span>
              <svg className="absolute w-[110%] h-[0.3em] -bottom-[0.05em] -left-[5%] z-0 text-quido" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Grille Architectural Tarif  */}
        <div className="flex flex-col lg:flex-row border-t border-b border-black">
          
          {/* Colonne Gauche : L'impact du chiffre */}
          <div className="w-full lg:w-1/2 p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-black bg-offwhite flex flex-col justify-center items-center lg:items-start relative group">
            <span className="text-sm font-bold uppercase tracking-widest text-[#fae150] mb-8 block bg-black px-4 py-2 rounded-full">Commission Unique</span>
            
            <div className="text-[12rem] lg:text-[14rem] leading-[0.8] font-display font-light text-black tracking-tighter mix-blend-multiply group-hover:scale-105 transition-transform duration-700 origin-bottom-left">
              20<span className="text-6xl lg:text-8xl align-top text-quido font-bold">%</span>
            </div>
            
            <p className="mt-12 text-xl md:text-2xl font-body text-gray-500 leading-relaxed text-center lg:text-left max-w-sm">
              Prélevée uniquement sur les revenus générés par les réservations. 
              <br/><br/>
              <strong className="text-black">Zéro frais fixes. Sans engagement.</strong>
            </p>
          </div>

          {/* Colonne Droite : Le détail haut de gamme */}
          <div className="w-full lg:w-1/2 p-10 lg:p-20 bg-white">
             <h3 className="text-4xl font-display font-medium mb-16 tracking-tight">Le forfait <span className="font-bold">Clé en main.</span></h3>
             
             <ul className="flex flex-col">
               {inclusions.map((item, i) => (
                 <motion.li 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1, duration: 0.8 }}
                   viewport={{ once: true }}
                   className={`flex gap-6 lg:gap-10 border-b border-black/10 py-8 ${i === 0 ? 'pt-0' : ''} ${i === inclusions.length - 1 ? 'border-none pb-0' : ''}`}
                 >
                   <span className="text-quido font-display font-medium text-2xl">{item.num}</span>
                   <div>
                     <h4 className="text-xl font-bold mb-2 font-display">{item.title}</h4>
                     <p className="text-gray-500 font-body leading-relaxed">{item.desc}</p>
                   </div>
                 </motion.li>
               ))}
             </ul>

             <div className="mt-20 flex flex-col sm:flex-row items-center gap-6">
               <Link href="/estimation" className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-quido hover:text-black transition-colors duration-300 text-center">
                 Estimer mes revenus
               </Link>
               <p className="text-sm text-gray-400 font-body max-w-[200px] text-center sm:text-left leading-relaxed">
                 Le ménage est facturé en supplément au voyageur.
               </p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
