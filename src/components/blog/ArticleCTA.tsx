import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCTA() {
  return (
    <aside className="my-16 relative border border-black bg-quido text-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-500 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Décoration Géométrique */}
      <div className="absolute top-0 right-0 w-24 h-24 border-l border-b border-black/10 pointer-events-none hidden md:block">
        <svg className="absolute top-3 right-3 w-5 h-5 text-black/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l1.5 10.5L24 12l-10.5 1.5L12 24l-1.5-10.5L0 12l10.5-1.5L12 0z"/></svg>
      </div>

      <div className="relative z-10 w-full">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/70 mb-4 block">Estimation gratuite</span>
        <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tighter leading-[0.9] mb-6">
          Découvrez le potentiel<br className="hidden md:block" /> locatif de votre bien
        </h3>
        <p className="text-black/80 font-body text-lg mb-8 max-w-lg">
          Nos experts analysent votre propriété et vous présentent une estimation personnalisée de vos revenus sous 48h. Sans engagement.
        </p>
        <Link
          href="/estimation"
          className="group relative inline-flex items-center justify-center gap-4 bg-black text-white px-8 py-4 text-lg font-bold overflow-hidden w-full md:w-auto border border-black"
        >
          <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">Estimer mon bien</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-black group-hover:translate-x-2 transition-all duration-500" />
        </Link>
      </div>
    </aside>
  );
}
