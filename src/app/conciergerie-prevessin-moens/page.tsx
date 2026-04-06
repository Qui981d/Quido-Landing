import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Conciergerie Airbnb à Prévessin-Moëns — Gestion Locative près du CERN",
  description: "Conciergerie locative à Prévessin-Moëns, commune résidentielle prisée du Pays de Gex. Gestion Airbnb pour propriétaires : ménage, voyageurs, revenus optimisés.",
  alternates: { canonical: "https://quido.fr/conciergerie-prevessin-moens" },
  openGraph: {
    title: "Conciergerie Airbnb Prévessin-Moëns — Quido",
    description: "Gestion locative premium à Prévessin-Moëns. Commune résidentielle prisée, proximité CERN.",
    url: "https://quido.fr/conciergerie-prevessin-moens",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Conciergerie Airbnb à Prévessin-Moëns",
  "provider": { "@type": "ProfessionalService", "@id": "https://quido.fr/#organization" },
  "areaServed": { "@type": "City", "name": "Prévessin-Moëns" },
  "description": "Service de conciergerie locative à Prévessin-Moëns, commune résidentielle prisée du Pays de Gex.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://quido.fr" },
    { "@type": "ListItem", "position": 2, "name": "Prévessin-Moëns", "item": "https://quido.fr/conciergerie-prevessin-moens" }
  ]
};

export default function PrevessinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbJsonLd]).replace(/</g, '\\u003c') }} />
      <CityLandingPage
        city="Prévessin-Moëns"
        heroImage="/images/hero-mountain.webp"
        heroTitle="Conciergerie Airbnb à Prévessin-Moëns."
        heroSubtitle="Commune résidentielle prisée entre le CERN et Genève, Prévessin-Moëns attire des familles et chercheurs internationaux en quête d'un cadre de vie verdoyant à la frontière suisse."
        introText={`
          <h2>Prévessin-Moëns : le cadre résidentiel du Pays de Gex</h2>
          <p><strong>Prévessin-Moëns</strong> est une commune résidentielle recherchée, connue pour son cadre de vie verdoyant et sa tranquillité. Située entre le CERN et Genève, elle attire principalement des <strong>familles de chercheurs et de cadres internationaux</strong> en mission de moyenne durée.</p>
          <h2>Un positionnement locatif différent</h2>
          <p>Contrairement aux communes plus urbaines comme Ferney-Voltaire, Prévessin-Moëns se positionne sur des <strong>séjours plus longs</strong> (2 semaines à 3 mois), souvent liés à des missions au CERN ou dans les organisations internationales. Ce profil de locataire offre l'avantage d'une <strong>usure moindre du bien</strong> et d'une gestion simplifiée.</p>
          <p>Les maisons avec jardin sont particulièrement demandées par les familles d'expatriés en transition, générant des revenus stables et prévisibles.</p>
          <h2>Quido à Prévessin-Moëns</h2>
          <p>Notre connaissance du tissu résidentiel de Prévessin-Moëns nous permet d'adapter notre stratégie : <strong>ciblage des séjours moyens/longs</strong>, tarification adaptée, et présentation de votre bien orientée vers les familles et chercheurs.</p>
        `}
        marketHighlights={[
          { icon: "🌳", title: "Cadre verdoyant", text: "Commune résidentielle avec espaces verts, écoles internationales à proximité et environnement calme : idéal pour les familles en mission CERN." },
          { icon: "🔬", title: "Proximité CERN", text: "Le site de Prévessin du CERN est directement accessible. Les chercheurs en mission privilégient les logements à distance de marche." },
          { icon: "📅", title: "Séjours moyens/longs", text: "Missions de 2 semaines à 3 mois : moins de rotation, usure minimale du bien, et revenus stables et prévisibles toute l'année." },
        ]}
        whyText="À Prévessin-Moëns, nous ciblons en priorité les séjours de moyenne durée pour les chercheurs et familles du CERN. Ce positionnement stratégique assure des revenus stables avec une gestion simplifiée et une usure minimale de votre bien."
        specificAdvantages={[
          "Stratégie de ciblage spécifique : séjours moyens/longs pour chercheurs et familles",
          "Tarification optimisée pour les missions CERN (2 semaines à 3 mois)",
          "Présentation de votre bien adaptée aux familles internationales",
          "Ménage hôtelier et gestion du linge entre chaque séjour",
          "Suivi proactif de la satisfaction des locataires longue durée",
          "Intervention rapide — nos bureaux sont à 5 minutes de Prévessin-Moëns",
        ]}
        testimonial={{
          text: "En plus de la gestion locative, Quido m'a orienté vers un expert-comptable spécialisé en LMNP. Résultat : grâce au régime réel et aux amortissements, je ne paie quasiment pas d'impôts sur mes revenus locatifs.",
          author: "Laurent — Propriétaire à Prévessin-Moëns",
          rating: 5,
        }}
      />
    </>
  );
}
