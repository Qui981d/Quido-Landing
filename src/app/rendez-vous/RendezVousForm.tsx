"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
];

const MONTHS_FR = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1; // Monday=0
}

export default function RendezVousForm() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const isDateDisabled = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    const now = new Date(); now.setHours(0, 0, 0, 0);
    if (d < now) return true;
    if (d.getDay() === 0 || d.getDay() === 6) return true; // weekends
    return false;
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    const [y, m, d] = selectedDate.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/rendez-vous', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, date: selectedDate, time: selectedTime }),
      });
      if (!response.ok) throw new Error("Erreur serveur");
      setIsSubmitted(true);
    } catch {
      setErrorMsg("Impossible d'envoyer la demande. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const isPrevDisabled = currentMonth === today.getMonth() && currentYear === today.getFullYear();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row relative">

      {/* Left Column - Branding */}
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
            Parlons de <br />
            <span className="font-bold">votre projet.</span>
          </h1>
          <p className="mt-6 text-lg xl:text-xl text-gray-500 font-light hidden md:block">
            Réservez un appel découverte de 30 minutes avec notre équipe. Nous analyserons ensemble le potentiel de votre bien.
          </p>
        </div>

        <div
          className="relative z-10 mt-auto ml-auto shadow-2xl overflow-hidden filter grayscale-[10%] sepia-[5%] shrink-0 h-[25vh] md:h-[30vh] lg:h-[35vh] aspect-[1.1] translate-x-4 md:translate-x-8 lg:translate-x-12 translate-y-4 md:translate-y-8"
          style={{ borderRadius: '45% 55% 55% 45% / 55% 45% 55% 45%' }}
        >
          <img src="/images/hero-mountain.png" alt="Vue montagne Pays de Gex" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </div>

      {/* Right Column - Booking */}
      <div className="w-full md:w-7/12 lg:w-1/2 bg-white px-6 py-12 md:p-12 lg:p-20 xl:p-24 flex items-center justify-center relative min-h-screen">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>

                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedDate && selectedTime ? 'bg-quido/10 text-quido' : 'bg-black text-white'}`}>1</div>
                  <div className="h-px flex-1 bg-gray-200" />
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedDate && selectedTime ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>2</div>
                </div>

                {!selectedDate || !selectedTime ? (
                  /* ── STEP 1: Calendar + Time ── */
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-2">Choisissez votre créneau</h2>
                    <p className="text-gray-500 mb-8">Appel découverte gratuit — 30 minutes</p>

                    {/* Calendar */}
                    <div className="border border-gray-200 rounded-2xl p-5 mb-6">
                      {/* Month Nav */}
                      <div className="flex items-center justify-between mb-5">
                        <button onClick={prevMonth} disabled={isPrevDisabled} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-lg font-bold tracking-tight">{MONTHS_FR[currentMonth]} {currentYear}</span>
                        <button onClick={nextMonth} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Day headers */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {DAYS_FR.map(d => (
                          <div key={d} className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider py-1">{d}</div>
                        ))}
                      </div>

                      {/* Day grid */}
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                          const disabled = isDateDisabled(day);
                          const selected = selectedDate === dateStr;
                          return (
                            <button
                              key={day}
                              disabled={disabled}
                              onClick={() => { setSelectedDate(dateStr); setSelectedTime(null); }}
                              className={`
                                w-full aspect-square rounded-xl text-sm font-medium transition-all duration-200
                                ${disabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}
                                ${selected ? 'bg-black text-white hover:bg-black' : ''}
                              `}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slots */}
                    {selectedDate && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Horaire — {formatSelectedDate()}</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                          {timeSlots.map(t => (
                            <button
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`
                                py-3 rounded-xl text-sm font-semibold border transition-all duration-200
                                ${selectedTime === t ? 'bg-black text-white border-black' : 'border-gray-200 hover:border-gray-400'}
                              `}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  /* ── STEP 2: Contact Info ── */
                  <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <button type="button" onClick={() => setSelectedTime(null)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-6">
                      <ArrowLeft className="w-4 h-4" /> Modifier le créneau
                    </button>

                    <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-2">Vos coordonnées</h2>
                    <div className="bg-gray-50 rounded-xl px-5 py-4 mb-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">📞</div>
                      <div>
                        <p className="text-sm font-bold text-black">{formatSelectedDate()}</p>
                        <p className="text-sm text-gray-500">{selectedTime} — 30 min · Appel découverte</p>
                      </div>
                    </div>

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
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Téléphone *</label>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required placeholder="06 12 34 56 78"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black/10 transition-all text-base outline-none" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Un mot sur votre projet <span className="text-gray-400 font-normal">(optionnel)</span></label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="J'ai un T3 à Ferney-Voltaire que j'aimerais mettre en location saisonnière..."
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
                      {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</> : "Confirmer mon appel découverte"}
                    </button>
                  </motion.form>
                )}
              </motion.div>
            ) : (
              /* ── Success State ── */
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-quido/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-quido" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4 tracking-tight">C&apos;est noté !</h2>
                <p className="text-gray-500 text-lg mb-2">Votre appel découverte est programmé pour :</p>
                <p className="text-xl font-bold text-black mb-1">{formatSelectedDate()}</p>
                <p className="text-lg text-gray-500 mb-8">à {selectedTime}</p>
                <p className="text-gray-400 text-sm mb-8">Nous vous contacterons par téléphone à l&apos;heure convenue. Un email de confirmation vous a été envoyé.</p>
                <Link href="/" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  Retour à l&apos;accueil
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
