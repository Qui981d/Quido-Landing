import Image from "next/image";

const features = [
  { label: "Statistiques financières en temps réel" },
  { label: "Calendrier unifié multi-plateformes" },
  { label: "Comptes rendus ménage détaillés" },
  { label: "Accès 24/7 depuis tous vos appareils" },
];

export default function AppShowcase() {
  const delayClasses = ['animate-reveal-d1', 'animate-reveal-d2', 'animate-reveal-d3', 'animate-reveal-d4'];

  return (
    <section className="py-32 bg-offwhite relative overflow-hidden">
      {/* Subtle organic shape */}
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-quido-light/40 -z-0"
        style={{ borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left side — Content */}
          <div className="animate-reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-quido block" />
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">Le petit+ Quido</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-[4.5rem] font-display font-bold tracking-tighter leading-[0.95] mb-6 text-black">
              Votre bien.{' '}
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Votre espace.</span>
                <svg className="absolute w-[105%] h-[0.3em] -bottom-[0.05em] -left-[2.5%] z-0 text-quido" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg font-body">
              Chaque propriétaire accède à un espace personnel dédié pour suivre son bien en toute transparence. Tout est regroupé au même endroit.
            </p>

            {/* Feature checklist */}
            <ul className="flex flex-col gap-4 mb-10">
              {features.map((f, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-4 text-lg animate-reveal ${delayClasses[i]}`}
                >
                  <div className="w-6 h-6 rounded-full bg-quido/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-quido" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-black font-medium">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-quido rounded-full animate-pulse" />
              Inclus dans votre offre — 0€ supplémentaire
            </div>
          </div>

          {/* Right side — Device Mockups */}
          <div className="relative animate-reveal animate-reveal-d3">
            {/* Laptop Frame — Dashboard */}
            <div className="relative z-10">
              <div className="bg-gray-800 rounded-xl p-1 pt-3">
                {/* Browser dots */}
                <div className="flex items-center gap-1.5 mb-3 px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <div className="ml-4 flex-1 bg-gray-700 rounded-md h-5 flex items-center px-3">
                    <span className="text-[10px] text-gray-400 font-mono">app.quido.fr/dashboard</span>
                  </div>
                </div>
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src="/images/app-dashboard.webp"
                    alt="Tableau de bord Quido — Statistiques et performances"
                    fill
                    className="rounded-b-lg object-cover object-top"
                  />
                </div>
              </div>
              {/* Laptop stand */}
              <div className="mx-auto w-[60%] h-3 bg-gray-300 rounded-b-lg" />
              <div className="mx-auto w-[70%] h-1 bg-gray-200 rounded-b-lg" />
            </div>

            {/* Tablet Frame — Calendar (Overlapping) */}
            <div className="relative lg:absolute lg:-bottom-8 lg:-left-8 w-full sm:w-[65%] lg:w-[55%] max-w-[280px] z-20 mt-6 lg:mt-0">
              <div className="bg-gray-900 rounded-[16px] p-1.5 shadow-2xl">
                <div className="bg-white rounded-[12px] overflow-hidden">
                  {/* Tablet top bar */}
                  <div className="bg-gray-900 px-3 py-1.5 flex items-center justify-between">
                    <span className="text-[9px] text-gray-400 font-mono">app.quido.fr/calendrier</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    </div>
                  </div>
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/images/app-calendar.webp"
                      alt="Calendrier Quido — Vue des réservations multi-plateformes"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
