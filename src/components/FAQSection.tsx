"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Dans quelles villes intervenez-vous ?",
      a: "Nous intervenons sur l'ensemble du Pays de Gex : Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains, Prévessin-Moëns, Thoiry et toutes les communes environnantes. Nous sommes une équipe locale, ancrée sur ce territoire, ce qui nous permet d'intervenir rapidement et de connaître parfaitement le marché."
    },
    {
      q: "Comment êtes-vous rémunérés ?",
      a: "Nous prenons une commission sur les revenus générés, uniquement lorsque votre bien est loué. Si vous ne gagnez rien, nous non plus. Les frais de ménage sont payés par les voyageurs. Contactez-nous pour en savoir plus sur nos conditions."
    },
    {
      q: "Puis-je occuper mon bien quand je le souhaite ?",
      a: "Absolument. Vous avez un accès direct à notre calendrier pour bloquer vos propres dates en toute simplicité (vacances, week-ends, etc.)."
    },
    {
      q: "Que se passe-t-il en cas de dégradation ?",
      a: "Toutes nos réservations sont couvertes par une assurance renforcée via les plateformes (protection jusqu'à 3M€) et nous demandons systématiquement une caution."
    }
  ];

  return (
    <section id="faq" className="pt-20 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tighter leading-[0.95] mb-6">
            Questions{' '}
            <span className="relative inline-block">
              <span className="relative z-10">fréquentes.</span>
              <svg className="absolute w-[105%] h-[0.3em] -bottom-[0.05em] -left-[2.5%] z-0 text-quido" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg">Tout ce que vous devez savoir sur notre service.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
      <button 
        className="w-full px-6 py-5 flex items-center justify-between text-left bg-white font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <div className={`p-1 rounded-full transition-colors ${isOpen ? "bg-black text-white" : "bg-gray-100 text-gray-500"}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-5 text-gray-500"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
