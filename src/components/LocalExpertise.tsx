import Link from "next/link";
import Image from "next/image";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

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
                L&apos;Ancrage <br/>
                <span className="font-bold relative inline-block mt-2">
                  <span className="relative z-10">Local.</span>
                  <svg className="absolute w-[110%] h-[0.3em] -bottom-[0.05em] -left-[5%] z-0 text-[#fae150]" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>
            
            <div className="mt-24 lg:mt-0">
              <p className="text-xl font-medium leading-relaxed font-body mb-10">
                Basés au cœur du Pays de Gex, nous ne gérons pas vos biens depuis un centre d&apos;appel lointain. 
                <br/><br/>
                Notre connaissance du tissu économique transfrontalier nous permet de maximiser votre rentabilité avec une précision que les plateformes automatiques ignorent.
              </p>
              
              <Link
                href="/estimation"
                className="group relative inline-flex items-center justify-center gap-4 bg-black text-white px-8 py-4 text-lg font-bold overflow-hidden w-full sm:w-auto border border-black"
              >
                <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Estimer mon bien</span>
                <ArrowRightIcon className="w-5 h-5 relative z-10 group-hover:text-black group-hover:translate-x-2 transition-all duration-500" />
              </Link>
            </div>
          </div>

          {/* Points Grid (Droite) */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 bg-offwhite">
            
            {/* Point 1 */}
            <div className="p-10 lg:p-12 border-b md:border-r border-black hover:bg-black hover:text-white transition-colors duration-500 group flex flex-col justify-between min-h-[300px] animate-reveal animate-reveal-d1">
              <div>
                <span className="text-4xl lg:text-5xl font-display font-light text-gray-300 group-hover:text-white transition-colors block mb-6">01</span>
                <h3 className="text-2xl font-bold mb-4">Maîtrise Transfrontalière</h3>
              </div>
              <p className="text-gray-500 group-hover:text-gray-300 font-body leading-relaxed">
                Nous anticipons les pics d&apos;affluence : conférences à Palexpo, tourisme estival, clientèle d&apos;affaires genevoise. Vos prix sont ajustés dynamiquement chaque jour.
              </p>
            </div>

            {/* Point 2 */}
            <div className="p-10 lg:p-12 border-b border-black hover:bg-black hover:text-white transition-colors duration-500 group flex flex-col justify-between min-h-[300px] animate-reveal animate-reveal-d2">
              <div>
                <span className="text-4xl lg:text-5xl font-display font-light text-gray-300 group-hover:text-white transition-colors block mb-6">02</span>
                <h3 className="text-2xl font-bold mb-4">Équipes de Confiance</h3>
              </div>
              <p className="text-gray-500 group-hover:text-gray-300 font-body leading-relaxed">
                Nous travaillons exclusivement avec des équipes de nettoyage partenaires de confiance avec qui nous collaborons depuis des années. Le standard est immuable.
              </p>
            </div>

            {/* Point 3 - Grande image */}
            <div className="col-span-1 md:col-span-2 relative min-h-[350px] lg:min-h-[400px] overflow-hidden group animate-reveal animate-reveal-d3">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-colors duration-500 group-hover:via-black/50" />
              <Image 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/images/local-view.webp" 
                alt="Vue panoramique du Pays de Gex entre le Jura et Genève — zone d'intervention Quido Conciergerie" 
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 origin-center"
              />
              
              <div className="absolute inset-0 p-10 lg:p-12 flex flex-col justify-between z-20">
                <span className="text-4xl lg:text-5xl font-display font-light text-white/50 group-hover:text-white transition-colors">03</span>
                <div className="max-w-xl">
                  <h3 className="text-3xl lg:text-4xl font-display font-medium text-white mb-4">
                    Réseau d&apos;Artisans Immédiat
                  </h3>
                  <p className="text-gray-200 font-body leading-relaxed text-lg">
                    Une urgence plomberie ? Une panne électrique ? Notre carnet d&apos;adresses d&apos;artisans locaux nous permet d&apos;intervenir en priorité. Vos locataires ne sont jamais laissés dans l&apos;attente.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
