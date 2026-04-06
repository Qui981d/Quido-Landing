import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Conciergerie Airbnb à Gex — Gestion Locative au Cœur du Pays de Gex",
  description: "Conciergerie locative à Gex, chef-lieu du Pays de Gex. Gestion Airbnb complète : ménage, voyageurs, optimisation tarifaire. Profitez de la demande transfrontalière.",
  alternates: { canonical: "https://quido.fr/conciergerie-gex" },
  openGraph: {
    title: "Conciergerie Airbnb Gex — Quido",
    description: "Gestion locative premium à Gex, au cœur du Pays de Gex. Maximisez vos revenus Airbnb.",
    url: "https://quido.fr/conciergerie-gex",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Conciergerie Airbnb à Gex",
  "provider": { "@type": "ProfessionalService", "@id": "https://quido.fr/#organization" },
  "areaServed": { "@type": "City", "name": "Gex" },
  "description": "Service de conciergerie locative premium à Gex, chef-lieu du Pays de Gex.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://quido.fr" },
    { "@type": "ListItem", "position": 2, "name": "Gex", "item": "https://quido.fr/conciergerie-gex" }
  ]
};

export default function GexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbJsonLd]).replace(/</g, '\\u003c') }} />
      <CityLandingPage
        city="Gex"
        heroImage="/images/hero-apartment-gex.webp"
        heroTitle="Conciergerie Airbnb à Gex."
        heroSubtitle="Chef-lieu du Pays de Gex, au pied du Jura et à 20 minutes de Genève, Gex combine charme de ville historique et dynamisme transfrontalier pour une location saisonnière rentable."
        introText={`
          <h2>Gex : le cœur historique du Pays de Gex</h2>
          <p><strong>Gex</strong> est le chef-lieu et le centre névralgique du Pays de Gex. Avec son centre médiéval pittoresque, ses commerces de proximité et sa vue panoramique sur les Alpes et le Mont-Blanc, Gex séduit une <strong>clientèle variée</strong> : touristes en quête d'authenticité, randonneurs du Jura, et professionnels travaillant dans la zone transfrontalière.</p>
          <h2>Un marché locatif en pleine croissance</h2>
          <p>Historiquement moins cher que Ferney-Voltaire ou Divonne-les-Bains, Gex offre un <strong>rapport investissement/rendement particulièrement attractif</strong>. Les prix d'achat restent accessibles tandis que la demande locative bénéficie de la même dynamique transfrontalière que ses communes voisines.</p>
          <p>La proximité immédiate des stations de ski du Jura (Lélex, Mijoux) ajoute une forte saisonnalité hivernale qui booste les revenus de décembre à mars.</p>
          <h2>Gex et Quido : proximité et expertise</h2>
          <p>Notre équipe intervient quotidiennement à Gex. Nous connaissons chaque quartier, du centre historique aux résidences récentes, et adaptons notre stratégie tarifaire en fonction des spécificités de chaque bien.</p>
        `}
        marketHighlights={[
          { icon: "🏔️", title: "Stations de ski du Jura", text: "Lélex, Mijoux et La Faucille à 15 minutes : une saisonnalité hivernale forte qui booste le taux d'occupation et les prix de décembre à mars." },
          { icon: "🏛️", title: "Centre historique attractif", text: "Le charme du vieux Gex avec ses ruelles médiévales, son marché et ses restaurants attire une clientèle de touristes en quête d'authenticité." },
          { icon: "💰", title: "Excellent rapport prix/rendement", text: "Prix d'achat attractifs combinés à la demande transfrontalière : Gex offre l'un des meilleurs ratios investissement/revenus du Pays de Gex." },
        ]}
        whyText="Gex est notre terrain de jeu quotidien. Du centre historique aux résidences neuves, nous connaissons les atouts de chaque quartier et adaptons la présentation de votre bien pour maximiser son attractivité auprès de la bonne cible."
        specificAdvantages={[
          "Connaissance fine des quartiers de Gex et de leur clientèle spécifique",
          "Stratégie tarifaire adaptée à la saisonnalité ski (Jura) et été (randonnées, lac)",
          "Gestion complète : annonce, shooting photo, communication, ménage, maintenance",
          "Optimisation pour la clientèle transfrontalière et les événements genevois",
          "Ménage hôtelier rigoureux par nos équipes partenaires locales",
          "Suivi de vos revenus en toute transparence avec rapport mensuel détaillé",
        ]}
        testimonial={{
          text: "Après des mois de gestion locative laborieuse en solo, je leur ai tout confié. Ils ont optimisé les prix selon la saisonnalité locale, et mes revenus ont littéralement fait +40%.",
          author: "Sophie & Julien — Propriétaires à Gex",
          rating: 5,
        }}
      />
    </>
  );
}
