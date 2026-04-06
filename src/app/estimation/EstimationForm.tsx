"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EstimationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    type: "",
    location: "",
    surface: "",
    rooms: "",
    bathrooms: "",
    name: "",
    email: "",
    phone: ""
  });

  const amenitiesList = ['Balcon', 'Terrasse', 'Jardin', 'Piscine', 'Place de parking', 'Jacuzzi', 'Sauna', 'Barbecue'];
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const payload = {
      ...formData,
      amenities: selectedAmenities
    };

    try {
      const response = await fetch('/api/estimation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Une erreur inattendue est survenue.");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      setErrorMsg("Impossible d'envoyer la demande pour le moment. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row relative">
      
      {/* Left Column - Image & Branding (Sticky sur Desktop) */}
      <div className="relative w-full md:w-5/12 lg:w-1/2 bg-gray-50 p-8 md:p-12 lg:p-16 flex flex-col md:sticky md:top-0 md:h-screen overflow-hidden">
        {/* Background organic shape */}
        <div 
          className="absolute -top-32 -left-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-quido-light/50 mix-blend-multiply z-0"
          style={{ borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%' }}
        />
        
        <Link href="/" className="relative z-10 inline-flex items-center gap-3 text-gray-500 hover:text-black transition-colors w-fit shrink-0">
          <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-medium text-sm tracking-wide uppercase">Retour</span>
        </Link>
        
        <div className="relative z-10 mt-8 md:mt-12 lg:mt-16 xl:max-w-xl shrink-0">
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-display font-light leading-[1.1] tracking-tight text-black">
            La tranquillité <br />
            <span className="font-bold">commence ici.</span>
          </h1>
          <p className="mt-6 text-lg xl:text-xl text-gray-500 font-light hidden md:block">
            Confiez-nous les détails de votre bien. Nos experts locaux analyseront son potentiel et reviendront vers vous avec une estimation personnalisée.
          </p>
        </div>

        {/* Floating image container (Aligned bottom-right safely) */}
        <div 
           className="relative z-10 mt-auto ml-auto shadow-2xl overflow-hidden filter grayscale-[10%] sepia-[5%] shrink-0 h-[25vh] md:h-[30vh] lg:h-[35vh] aspect-[1.1] translate-x-4 md:translate-x-8 lg:translate-x-12 translate-y-4 md:translate-y-8"
           style={{ borderRadius: '45% 55% 55% 45% / 55% 45% 55% 45%' }}
        >
          <Image fill sizes="(max-width: 1024px) 100vw, 50vw" src="/images/hero-mountain.webp" alt="Mountain Chalet Interior" className="object-cover" />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 bg-white px-6 py-12 md:p-12 lg:p-20 xl:p-24 flex items-center justify-center relative min-h-screen">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="mb-10">
                  <h2 className="text-3xl font-display font-bold">Votre demande d'estimation</h2>
                  <p className="text-gray-500 mt-2">Veuillez remplir les informations concernant le bien.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                  
                  {/* --- Section 1: Le Bien --- */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-bold text-black uppercase tracking-[0.2em] border-b border-gray-100 pb-3 flex items-center gap-3">
                       <span className="text-quido">01.</span> Votre Propriété
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">Type de bien</label>
                        <select 
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all text-black appearance-none rounded-none cursor-pointer"
                        >
                          <option value="" disabled>Sélectionner...</option>
                          <option value="Appartement">Appartement</option>
                          <option value="Maison">Maison</option>
                          <option value="Villa / Propriété">Villa / Propriété</option>
                          <option value="Cabane / Insolite">Cabane / Logement insolite</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>

                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">Localisation / Ville</label>
                        <input 
                          type="text" 
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-300"
                          placeholder="Ex: Genève, Ferney..."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">Surface (m²)</label>
                        <input 
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          name="surface"
                          value={formData.surface}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-300"
                          placeholder="0"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">Pièces</label>
                        <input 
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-300"
                          placeholder="0"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">SdB</label>
                        <input 
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-300"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>

                  {/* --- Section 2: Les Plus --- */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-bold text-black uppercase tracking-[0.2em] border-b border-gray-100 pb-3 flex items-center gap-3">
                       <span className="text-quido">02.</span> Équipements
                    </h3>
                    
                    <div className="flex flex-wrap gap-3">
                       {amenitiesList.map(amenity => (
                         <label key={amenity} className="cursor-pointer group">
                           <input 
                             type="checkbox" 
                             className="peer sr-only"
                             checked={selectedAmenities.includes(amenity)}
                             onChange={() => toggleAmenity(amenity)}
                           />
                           <div className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-500 peer-checked:bg-black peer-checked:text-white peer-checked:border-black transition-all text-sm font-medium hover:border-black">
                             {amenity}
                           </div>
                         </label>
                       ))}
                    </div>
                  </div>

                  {/* --- Section 3: Coordonnées --- */}
                  <div className="space-y-6">
                    <h3 className="text-sm font-bold text-black uppercase tracking-[0.2em] border-b border-gray-100 pb-3 flex items-center gap-3">
                       <span className="text-quido">03.</span> Vos Coordonnées
                    </h3>
                    
                    <div className="relative group">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">Nom et Prénom</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-300"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-300"
                          placeholder="vous@email.com"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 block group-focus-within:text-black transition-colors">Téléphone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg focus:outline-none focus:border-black transition-all placeholder:text-gray-300"
                          placeholder="+33 6 00 00 00 00"
                        />
                      </div>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-3 text-red-500 bg-red-50 p-4 rounded-xl text-sm font-medium">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>{errorMsg}</p>
                    </div>
                  )}

                  {/* Bouton Soumettre */}
                  <div className="pt-6 w-full flex justify-end">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-quido transition-colors duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(0,205,180,0.25)] w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Obtenir mon estimation</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-center sm:text-right text-xs text-gray-400 mt-4">
                    Strictement confidentiel. Sans aucun engagement.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-quido-light rounded-full flex items-center justify-center mb-8 relative">
                  <CheckCircle2 className="w-12 h-12 text-quido relative z-10" />
                </div>
                <h2 className="text-4xl font-display font-light mb-4 text-black">Demande <span className="font-bold">enregistrée.</span></h2>
                <p className="text-gray-500 text-lg mb-10 max-w-sm">
                  L'un de nos experts analyse votre bien et vous contactera dans les plus brefs délais. Vous devriez recevoir un mail de confirmation !
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 hover:border-black text-black transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  Retour à l'accueil
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
