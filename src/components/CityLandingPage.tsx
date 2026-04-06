"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CityPageProps {
  city: string;
  heroTitle: string;
  heroSubtitle: string;
  introText: string;
  marketHighlights: { icon: string; title: string; text: string }[];
  whyText: string;
  specificAdvantages: string[];
  heroImage?: string;
  testimonial?: { text: string; author: string; rating: number };
}

export default function CityLandingPage({
  city,
  heroTitle,
  heroSubtitle,
  introText,
  marketHighlights,
  whyText,
  specificAdvantages,
  heroImage,
  testimonial,
}: CityPageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-offwhite">
          <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-gradient-to-bl from-quido-light/30 to-transparent -z-10" />
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 max-w-2xl">
                <div className="inline-flex items-center gap-3 w-fit mb-8">
                  <MapPin className="w-4 h-4 text-quido" />
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">{city}</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight text-black mb-8">
                  {heroTitle}
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed font-body mb-10">
                  {heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                  <Link href="/rendez-vous" className="group relative inline-flex items-center justify-center gap-4 bg-black text-white px-10 py-5 text-lg font-bold overflow-hidden w-full sm:w-auto border border-black rounded-full hover:shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-shadow">
                    <div className="absolute inset-0 w-full h-full bg-quido scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10">Prendre RDV</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-all duration-500" />
                  </Link>
                  <Link href="/estimation" className="text-lg text-gray-500 hover:text-black border-b border-transparent hover:border-black pb-1 transition-all">
                    Estimer mon bien
                  </Link>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[550px] w-full max-w-2xl mx-auto flex items-center justify-center">
                {/* Organics blobs mimicking the homepage */}
                <div 
                  className="absolute z-10 w-[85%] h-[85%] shadow-2xl overflow-hidden filter grayscale-[10%] sepia-[5%]" 
                  style={{ borderRadius: '50% 50% 60% 40% / 40% 60% 40% 60%' }}
                >
                  <Image 
                    src={heroImage || "/images/local-view.png"} 
                    alt={city} 
                    fill 
                    className="object-cover scale-100 hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                
                {/* Decorative blob behind */}
                <div 
                  className="absolute z-0 w-64 h-64 bg-quido-light/60 mix-blend-multiply right-0 top-0" 
                  style={{ borderRadius: '40% 60% 60% 40% / 60% 40% 50% 50%' }}
                />
                <div 
                  className="absolute z-0 w-48 h-48 bg-gray-200/50 mix-blend-multiply left-0 bottom-10" 
                  style={{ borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black prose-p:leading-relaxed prose-p:text-gray-600 prose-strong:text-black prose-a:text-quido prose-a:font-semibold">
              <div dangerouslySetInnerHTML={{ __html: introText }} />
            </div>
          </div>
        </section>

        {/* Market Highlights - Design Éditorial (Magazine) */}
        <section className="py-32 bg-offwhite">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              {/* Colonne de gauche : Titre collant */}
              <div className="w-full lg:w-1/3 lg:sticky lg:top-40 self-start">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-quido mb-6 block">Le marché local</span>
                <h2 className="text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[0.95] mb-8">
                  Pourquoi <br/>
                  <span className="text-gray-900 font-bold">{city}</span>
                  <br/> est <span className="font-bold relative inline-block mt-2">
                    <span className="relative z-10">idéal.</span>
                    <svg className="absolute w-[110%] h-[0.3em] -bottom-[0.1em] -left-[5%] z-0 text-quido" viewBox="0 0 200 20" preserveAspectRatio="none">
                      <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed mb-8 border-l border-quido pl-6">
                  Un potentiel locatif unique dicté par son positionnement stratégique, son économie transfrontalière et son cadre de vie exceptionnel.
                </p>
              </div>

              {/* Colonne de droite : Liste éditoriale */}
              <div className="w-full lg:w-2/3 flex flex-col">
                <div className="border-t-2 border-black" />
                {marketHighlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    className="group border-b border-black/10 py-12 md:py-20 hover:border-black transition-colors duration-500 flex flex-col md:flex-row gap-6 md:gap-16 cursor-default"
                  >
                    {/* Index */}
                    <div className="flex md:items-start md:flex-col gap-6 md:w-1/4 shrink-0">
                       <span className="text-5xl md:text-7xl text-gray-200 font-display font-bold tracking-tighter group-hover:text-quido transition-colors duration-500">
                         0{i + 1}
                       </span>
                    </div>

                    {/* Contenu */}
                    <div className="md:w-3/4 flex flex-col justify-center mt-2 md:mt-0">
                      <h3 className="text-3xl lg:text-4xl font-display font-bold text-black mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                      <p className="text-xl text-gray-500 font-body leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Quido */}
        <section className="py-24 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row border-t border-b border-black">
              <div className="w-full lg:w-2/5 p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-black bg-quido text-black flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] mb-8 block opacity-70">Notre expertise à {city}</span>
                  <h2 className="text-5xl lg:text-6xl font-display font-medium leading-[0.9] tracking-tighter">
                    Quido à <br/>
                    <span className="font-bold">{city}.</span>
                  </h2>
                </div>
                <div className="mt-12 lg:mt-0">
                  <p className="text-xl font-medium leading-relaxed font-body mb-10">{whyText}</p>
                  <Link href="/estimation" className="group relative inline-flex items-center justify-center gap-4 bg-black text-white px-8 py-4 text-lg font-bold overflow-hidden w-full sm:w-auto border border-black">
                    <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">Estimer mon bien</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-black group-hover:translate-x-2 transition-all duration-500" />
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-3/5 p-10 lg:p-16 bg-white">
                <h3 className="text-3xl font-display font-medium mb-12 tracking-tight">Ce que nous vous <span className="font-bold">garantissons.</span></h3>
                <ul className="flex flex-col gap-6">
                  {specificAdvantages.map((adv, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 text-lg font-body text-gray-600 leading-relaxed"
                    >
                      <CheckCircle2 className="w-6 h-6 text-quido shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {testimonial && (
          <section className="py-24 bg-offwhite">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <div className="flex gap-1 justify-center mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-black text-black" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-display font-medium leading-snug tracking-tight mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{testimonial.author}</p>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="relative border border-black bg-quido text-black p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-[0.3em] block mb-6 opacity-70">Estimation gratuite</span>
                <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tighter leading-[0.9] mb-6">
                  Votre bien à {city} mérite le meilleur.
                </h2>
                <p className="text-xl font-body leading-relaxed opacity-80">
                  Découvrez gratuitement le potentiel locatif de votre propriété avec une analyse de rentabilité personnalisée.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <Link href="/estimation" className="group relative inline-flex items-center justify-center gap-4 bg-black text-white px-10 py-5 text-xl font-bold overflow-hidden w-full md:w-auto border border-black">
                  <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">Estimer mon bien</span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:text-black group-hover:translate-x-2 transition-all duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
