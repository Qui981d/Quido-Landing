function StarIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const reviews = [
    {
      text: "J'hésitais à déléguer mon appartement de Ferney-Voltaire car le mobilier a beaucoup de valeur. L'équipe a ciblé une clientèle frontalière très respectueuse, et la rentabilité mensuelle est impressionnante.",
      author: "Marc V.",
      location: "Ferney-Voltaire",
      shape: "rounded-[3rem] rounded-br-xl",
      bg: "bg-offwhite text-black border border-black/5",
      stars: 5,
      mt: "lg:mt-24"
    },
    {
      text: "La vraie différence, c'est la tranquillité d'esprit que leur équipe locale m'apporte. Mon appartement est toujours parfaitement entretenu et je n'ai absolument plus aucune charge mentale.",
      author: "Clara T.",
      location: "Divonne-les-Bains",
      shape: "rounded-[4rem] rounded-bl-xl",
      bg: "bg-[#fae150] text-black shadow-xl",
      stars: 5,
      mt: "lg:mt-0"
    },
    {
      text: "Après des mois de gestion locative laborieuse en solo, je leur ai tout confié. Ils ont optimisé les prix selon la saisonnalité locale (Palexpo, frontaliers), et mes revenus ont littéralement fait +40%.",
      author: "Sophie & Julien",
      location: "Gex",
      shape: "rounded-[3rem] rounded-tl-xl",
      bg: "bg-black text-white shadow-2xl",
      stars: 5,
      mt: "lg:mt-40"
    }
  ];

  const delayClasses = ['animate-reveal-d1', 'animate-reveal-d2', 'animate-reveal-d3'];

  return (
    <section id="testimonials" className="pt-40 pb-24 bg-white relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-quido mb-6 block">Leurs Retours</span>
          <h2 className="text-5xl lg:text-7xl font-display font-medium tracking-tight">
            Les propriétaires <br/>
            <span className="relative inline-block mt-3">
              <span className="relative z-20 font-bold">confirment.</span>
              <svg className="absolute w-[110%] h-[0.3em] -bottom-[0.05em] -left-[5%] z-0 text-quido" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Grille Organique (Formes bulles) */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start relative z-20">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`w-full max-w-lg p-10 lg:p-14 ${review.shape} ${review.bg} ${review.mt} relative flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 cursor-default min-h-[350px] animate-reveal ${delayClasses[i]}`}
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-8">
                {[...Array(review.stars)].map((_, starIndex) => (
                  <StarIcon 
                    key={starIndex} 
                    className={`${review.bg.includes('text-white') ? 'fill-quido text-quido' : 'fill-black text-black'}`} 
                  />
                ))}
              </div>

              {/* Texte */}
              <p className={`text-xl lg:text-2xl font-body leading-relaxed mb-12 ${review.bg.includes('text-white') ? 'text-white/90' : 'text-black/80'}`}>
                &quot;{review.text}&quot;
              </p>

              {/* Auteur */}
              <div className="mt-auto border-t border-current/10 pt-6">
                <p className="font-bold font-display text-lg">{review.author}</p>
                <p className="text-sm opacity-70 mt-1 uppercase tracking-widest">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Élément de décor organique en arrière-plan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-quido/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </div>
    </section>
  );
}
