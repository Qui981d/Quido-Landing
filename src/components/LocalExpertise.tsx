"use client";

import { motion } from "framer-motion";

export default function LocalExpertise() {
  return (
    <section id="expertise" className="py-24 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille Architectural de type "Magazine" */}
        <div className="flex flex-col lg:flex-row border-t border-b border-black shadow-2xl">
          
          {/* Bloc Titre (Gauche) */}
          <div className="w-full lg:w-2/5 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-black bg-quido text-black flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] mb-8 block opacity-70">Pourquoi nous choisir</span>
              <h2 className="text-6xl lg:text-[5.5rem] font-display font-medium leading-[0.9] tracking-tighter">
                L'Ancrage <br/>
                <span className="font-bold relative inline-block mt-2">
                  <span className="relative z-10">Local.</span>
                  {/* Petit stroke svg sous Local */}
                  <svg className="absolute w-[110%] h-[0.3em] -bottom-[0.05em] -left-[5%] z-0 text-[#fae150]" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>
            
            <div className="mt-24 lg:mt-0">
              <p className="text-xl font-medium leading-relaxed font-body">
                Basés au cœur du Pays de Gex, nous ne gérons pas vos biens depuis un centre d'appel lointain. 
                <br/><br/>
                Notre connaissance du tissu économique transfrontalier nous permet de maximiser votre rentabilité avec une précision que les plateformes automatiques ignorent.
              </p>
            </div>
          </div>

          {/* Points Grid (Droite) */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 bg-offwhite">
            
            {/* Point 1 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-10 lg:p-12 border-b md:border-r border-black hover:bg-black hover:text-white transition-colors duration-500 group flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <span className="text-4xl lg:text-5xl font-display font-light text-gray-300 group-hover:text-white transition-colors block mb-6">01</span>
                <h3 className="text-2xl font-bold mb-4">Maîtrise Transfrontalière</h3>
              </div>
              <p className="text-gray-500 group-hover:text-gray-300 font-body leading-relaxed">
                Nous anticipons les pics d'affluence : conférences à Palexpo, tourisme estival, clientèle d'affaires genevoise. Vos prix sont ajustés dynamiquement chaque jour.
              </p>
            </motion.div>

            {/* Point 2 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 lg:p-12 border-b border-black hover:bg-black hover:text-white transition-colors duration-500 group flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <span className="text-4xl lg:text-5xl font-display font-light text-gray-300 group-hover:text-white transition-colors block mb-6">02</span>
                <h3 className="text-2xl font-bold mb-4">Équipes de Confiance</h3>
              </div>
              <p className="text-gray-500 group-hover:text-gray-300 font-body leading-relaxed">
                Nous travaillons exclusivement avec des équipes de nettoyage partenaires de confiance avec qui nous collaborons depuis des années. Le standard est immuable.
              </p>
            </motion.div>

            {/* Point 3 - Grande image */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 md:col-span-2 relative min-h-[350px] lg:min-h-[400px] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-colors duration-500 group-hover:via-black/50" />
              <img 
                src="/images/local-view.png" 
                alt="Vue de la région" 
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 origin-center"
              />
              
              <div className="absolute inset-0 p-10 lg:p-12 flex flex-col justify-between z-20">
                <span className="text-4xl lg:text-5xl font-display font-light text-white/50 group-hover:text-white transition-colors">03</span>
                <div className="max-w-xl">
                  <h3 className="text-3xl lg:text-4xl font-display font-medium text-white mb-4">
                    Réseau d'Artisans Immédiat
                  </h3>
                  <p className="text-gray-200 font-body leading-relaxed text-lg">
                    Une urgence plomberie ? Une panne électrique ? Notre carnet d'adresses d'artisans locaux nous permet d'intervenir en priorité. Vos locataires ne sont jamais laissés dans l'attente.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
