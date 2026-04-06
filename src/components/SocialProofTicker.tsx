export default function SocialProofTicker() {
  const platforms = [
    { name: "Airbnb", logo: "airbnb" },
    { name: "Booking.com", logo: "booking" },
    { name: "Abritel", logo: "abritel" },
    { name: "Expedia", logo: "expedia" },
    { name: "TripAdvisor", logo: "tripadvisor" },
    { name: "Vrbo", logo: "vrbo" }
  ];

  return (
    <section className="py-8 border-y border-gray-100 bg-offwhite overflow-hidden">
      <div className="relative w-full overflow-hidden">
        {/* Gradients de fondu sur les bords */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-offwhite to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-offwhite to-transparent z-10" />
        
        <div className="flex w-max animate-marquee">
          <div className="flex shrink-0 gap-12 md:gap-24 px-6 md:px-12 items-center">
            {platforms.map((platform, i) => (
              <div key={i} className="text-2xl md:text-3xl font-display font-bold text-gray-300 whitespace-nowrap opacity-50 hover:opacity-100 hover:text-black transition-all">
                {platform.name}
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-12 md:gap-24 px-6 md:px-12 items-center" aria-hidden="true">
            {platforms.map((platform, i) => (
              <div key={`dup-${i}`} className="text-2xl md:text-3xl font-display font-bold text-gray-300 whitespace-nowrap opacity-50 hover:opacity-100 hover:text-black transition-all">
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
