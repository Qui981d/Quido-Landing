"use client";

import { motion } from "framer-motion";

export default function BentoShowcase() {
  const services = [
    { 
      title: "Shooting photos", 
      desc: "Mise en valeur de votre bien par un photographe professionnel d'intérieur pour maximiser le taux de clic."
    },
    { 
      title: "Mise en ligne & gestion de l'annonce", 
      desc: "Rédaction optimisée avec mots-clés et diffusion multi-plateformes avec ajustement dynamique des prix."
    },
    { 
      title: "Ménage soigné", 
      desc: "Un ménage complet et rigoureux réalisé par notre équipe professionnelle entre chaque séjour."
    },
    { 
      title: "Linge de qualité", 
      desc: "Fourniture, gestion et entretien d'un linge de lit et de bain de qualité hôtelière, toujours impeccable."
    },
    { 
      title: "Communication voyageurs", 
      desc: "Réponses ultra-rapides 7j/7, du premier message de renseignement jusqu'au départ des invités."
    },
    { 
      title: "Assistance voyageurs", 
      desc: "Un problème sur place ? Notre équipe de concierges se déplace physiquement à toute heure."
    },
    { 
      title: "Gestion des avis", 
      desc: "Suivi proactif de la satisfaction et traitement des commentaires pour sécuriser l'algorithme Airbnb/Booking."
    }
  ];

  return (
    <section id="services" className="py-32 bg-offwhite text-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Colonne Gauche (Sticky) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-[1.05] mb-6">
              Oubliez <br className="hidden lg:block"/>les tracas. <br />
              <span className="text-gray-400 font-light">On gère <br className="hidden lg:block"/>
                <span className="relative inline-block text-black font-bold z-10">
                  <span className="relative z-20">le reste.</span>
                  <svg className="absolute w-[105%] h-[0.3em] -bottom-[0.05em] -left-[2.5%] z-0 text-[#fae150]" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h2>
            <p className="text-lg text-gray-500 font-body">
              Une offre unique, complète et sans coût caché. Nous prenons le relais sur l'intégralité du cycle locatif pour que vos revenus soient 100% passifs.
            </p>
          </div>

          {/* Colonne Droite (Liste Interactive Premium) */}
          <div className="w-full lg:w-2/3 border-t border-black/10">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-black/10 hover:border-black transition-colors duration-500 cursor-default"
              >
                <div className="flex items-start gap-8 md:gap-12 w-full">
                  <span className="text-sm font-display font-medium text-gray-400 group-hover:text-black transition-colors shrink-0 mt-1.5 md:mt-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-medium mb-3 tracking-tight group-hover:translate-x-3 transition-transform duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-lg md:text-xl font-body leading-relaxed max-w-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
