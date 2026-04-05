"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Erreur serveur");
      setIsSubmitted(true);
    } catch {
      setErrorMsg("Impossible d'envoyer la demande. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row relative">

      {/* Left Column - Branding & Info */}
      <div className="relative w-full md:w-5/12 lg:w-1/2 bg-gray-50 p-8 md:p-12 lg:p-16 flex flex-col md:sticky md:top-0 md:h-screen overflow-hidden">
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
            Nous sommes <br />
            <span className="font-bold">à votre écoute.</span>
          </h1>
          <p className="mt-6 text-lg xl:text-xl text-gray-500 font-light hidden md:block">
            Une question spécifique ? Envie de devenir partenaire ? Laissez-nous un message et notre équipe locale vous répondra rapidement.
          </p>
        </div>

        <div className="relative z-10 mt-12 flex flex-col gap-6 text-gray-600">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                 <Mail className="w-5 h-5 text-quido" />
              </div>
              <div>
                 <p className="text-sm text-gray-400 font-medium">Email</p>
                 <a href="mailto:hello@quido.fr" className="font-semibold text-black hover:text-quido transition-colors">hello@quido.fr</a>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                 <Phone className="w-5 h-5 text-quido" />
              </div>
              <div>
                 <p className="text-sm text-gray-400 font-medium">Téléphone</p>
                 <a href="tel:+33602165671" className="font-semibold text-black hover:text-quido transition-colors">06 02 16 56 71</a>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                 <MapPin className="w-5 h-5 text-quido" />
              </div>
              <div>
                 <p className="text-sm text-gray-400 font-medium">Bureaux</p>
                 <p className="font-semibold text-black">181 rue du Parc Jean Monnet<br/>01630 Saint-Genis-Pouilly</p>
              </div>
           </div>
        </div>

        <div
          className="relative z-10 mt-auto ml-auto shadow-2xl overflow-hidden filter grayscale-[10%] sepia-[5%] shrink-0 h-[15vh] md:h-[20vh] aspect-[1.5] translate-x-4 md:translate-x-8 lg:translate-x-12 translate-y-4 md:translate-y-8 hidden md:block"
          style={{ borderRadius: '45% 55% 55% 45% / 55% 45% 55% 45%' }}
        >
          <img src="/images/hero-bedroom.png" alt="Pays de Gex" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 bg-white px-6 py-12 md:p-12 lg:p-20 xl:p-24 flex items-center justify-center relative min-h-screen">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
               <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-8">Envoyez-nous un message</h2>
                    
                    <div className="flex flex-col gap-5">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Nom complet *</label>
                        <input name="name" value={formData.name} onChange={handleInputChange} required placeholder="Jean Dupont"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black/10 transition-all text-base outline-none" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Email *</label>
                        <input name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="jean@email.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black/10 transition-all text-base outline-none" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Téléphone <span className="text-gray-400 font-normal">(optionnel)</span></label>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="06 12 34 56 78"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black/10 transition-all text-base outline-none" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Votre message *</label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Comment pouvons-nous vous aider ?"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black/10 transition-all text-base outline-none resize-none" />
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="mt-4 flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" /> {errorMsg}
                      </div>
                    )}

                    <button type="submit" disabled={isSubmitting}
                      className="mt-8 w-full bg-black text-white py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-3">
                      {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</> : "Envoyer le message"}
                    </button>
                    
                    <p className="mt-6 text-sm text-gray-400 text-center">Vous souhaitez louer votre bien ? <Link href="/estimation" className="text-black hover:text-quido underline underline-offset-4 transition-colors">Faites une estimation</Link>.</p>
                  </motion.form>
            ) : (
              /* Success State */
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-quido/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-quido" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4 tracking-tight">Message envoyé !</h2>
                <p className="text-gray-500 text-lg mb-8">Nous avons bien reçu votre demande. Notre équipe dans le Pays de Gex vous répondra très rapidement.</p>
                <Link href="/" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors">
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
