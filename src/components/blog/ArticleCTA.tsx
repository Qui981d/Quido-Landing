import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCTA() {
  return (
    <aside className="my-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black p-10 md:p-14 text-white">
      <div
        className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-quido/20 -z-0"
        style={{ borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%' }}
      />
      <div className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-quido mb-4 block">Estimation gratuite</span>
        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-snug">
          Découvrez le potentiel<br /> locatif de votre bien
        </h3>
        <p className="text-gray-400 text-lg mb-8 max-w-lg">
          Nos experts analysent votre propriété et vous présentent une estimation personnalisée de vos revenus sous 48h. Sans engagement.
        </p>
        <Link
          href="/estimation"
          className="group inline-flex items-center gap-3 bg-quido text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Estimer mon bien
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </aside>
  );
}
