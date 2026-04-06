import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Conciergerie Airbnb à Ferney-Voltaire — Gestion Locative Premium",
  description: "Conciergerie locative à Ferney-Voltaire, à 10 min de Genève. Gestion Airbnb complète, ménage hôtelier, optimisation tarifaire. Maximisez vos revenus locatifs avec Quido.",
  alternates: { canonical: "https://quido.fr/conciergerie-ferney-voltaire" },
  openGraph: {
    title: "Conciergerie Airbnb Ferney-Voltaire — Quido",
    description: "Gestion locative premium à Ferney-Voltaire. Ménage hôtelier, communication voyageurs, yield management.",
    url: "https://quido.fr/conciergerie-ferney-voltaire",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Conciergerie Airbnb à Ferney-Voltaire",
  "provider": { "@type": "ProfessionalService", "@id": "https://quido.fr/#organization" },
  "areaServed": { "@type": "City", "name": "Ferney-Voltaire" },
  "description": "Service de conciergerie locative premium à Ferney-Voltaire. Gestion complète de votre bien Airbnb.",
};

export default function FerneyVoltairePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <CityLandingPage
        city="Ferney-Voltaire"
        heroTitle="Conciergerie Airbnb à Ferney-Voltaire."
        heroSubtitle="À 10 minutes de Genève et du siège de l'ONU, Ferney-Voltaire est l'une des villes les plus rentables du Pays de Gex pour la location saisonnière. Confiez votre bien à des experts locaux."
        introText={`
          <h2>Ferney-Voltaire : la porte d'entrée vers Genève</h2>
          <p>Située à la frontière suisse, <strong>Ferney-Voltaire</strong> bénéficie d'une position géographique exceptionnelle. À seulement 10 minutes de l'aéroport de Genève et du centre-ville, la commune attire une <strong>clientèle internationale à fort pouvoir d'achat</strong> : diplomates, consultants des organisations internationales, chercheurs du CERN et voyageurs d'affaires.</p>
          <h2>Un marché locatif d'exception</h2>
          <p>Les biens en location saisonnière à Ferney-Voltaire affichent des <strong>taux d'occupation parmi les plus élevés du Pays de Gex</strong>, dépassant régulièrement les 75%. Un T2 bien géré peut générer entre <strong>2 200€ et 3 500€ par mois</strong>, soit 2 à 3 fois plus qu'en location longue durée classique.</p>
          <p>La proximité immédiate de Genève, où un studio se loue 1 800 CHF/mois minimum, crée un afflux constant de locataires cherchant des alternatives plus abordables côté français.</p>
          <h2>Notre service à Ferney-Voltaire</h2>
          <p>Chez Quido, nous gérons déjà plusieurs biens à Ferney-Voltaire et connaissons parfaitement les spécificités du marché local : pics de demande lors des assemblées de l'ONU, clientèle exigeante habituée aux standards hôteliers, et réglementation municipale en vigueur.</p>
        `}
        marketHighlights={[
          { icon: "🇺🇳", title: "Organisations internationales", text: "L'ONU, l'OMS, le CICR et 40+ organisations génèrent un flux constant de diplomates et consultants cherchant des logements de courte durée." },
          { icon: "✈️", title: "10 min de l'aéroport", text: "La proximité de l'aéroport de Genève-Cointrin assure une accessibilité maximale pour les voyageurs internationaux et d'affaires." },
          { icon: "📈", title: "Rendements élevés", text: "Taux d'occupation moyen de 75%+ et prix nuitée premium grâce à la demande transfrontalière. Un des marchés les plus rentables de l'Ain." },
        ]}
        whyText="Notre équipe locale intervient en moins de 30 minutes à Ferney-Voltaire. Nous connaissons chaque quartier, chaque événement qui influence la demande, et nous ajustons vos tarifs en conséquence pour maximiser vos revenus."
        specificAdvantages={[
          "Gestion complète de votre bien : annonce, voyageurs, ménage, linge, maintenance",
          "Yield management quotidien adapté aux événements genevois (ONU, Palexpo, CERN)",
          "Ménage hôtelier entre chaque séjour par nos équipes partenaires de confiance",
          "Communication voyageurs 7j/7 avec un temps de réponse moyen inférieur à 15 minutes",
          "Intervention d'urgence rapide grâce à notre réseau d'artisans à Ferney-Voltaire",
          "Accompagnement réglementaire : déclaration en mairie, taxe de séjour, conformité",
        ]}
        testimonial={{
          text: "J'hésitais à déléguer mon appartement de Ferney-Voltaire car le mobilier a beaucoup de valeur. L'équipe a ciblé une clientèle frontalière très respectueuse, et la rentabilité mensuelle est impressionnante.",
          author: "Marc V. — Propriétaire à Ferney-Voltaire",
          rating: 5,
        }}
      />
    </>
  );
}
