import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Conciergerie Airbnb à Saint-Genis-Pouilly — Gestion Locative CERN",
  description: "Conciergerie locative à Saint-Genis-Pouilly, aux portes du CERN. Gestion Airbnb complète pour propriétaires : ménage hôtelier, optimisation des revenus, service premium.",
  alternates: { canonical: "https://quido.fr/conciergerie-saint-genis-pouilly" },
  openGraph: {
    title: "Conciergerie Airbnb Saint-Genis-Pouilly — Quido",
    description: "Gestion locative premium à Saint-Genis-Pouilly, près du CERN. Maximisez vos revenus Airbnb.",
    url: "https://quido.fr/conciergerie-saint-genis-pouilly",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Conciergerie Airbnb à Saint-Genis-Pouilly",
  "provider": { "@type": "ProfessionalService", "@id": "https://quido.fr/#organization" },
  "areaServed": { "@type": "City", "name": "Saint-Genis-Pouilly" },
  "description": "Service de conciergerie locative premium à Saint-Genis-Pouilly, aux portes du CERN.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://quido.fr" },
    { "@type": "ListItem", "position": 2, "name": "Saint-Genis-Pouilly", "item": "https://quido.fr/conciergerie-saint-genis-pouilly" }
  ]
};

export default function SaintGenisPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbJsonLd]).replace(/</g, '\\u003c') }} />
      <CityLandingPage
        city="Saint-Genis-Pouilly"
        heroImage="/images/hero-kitchen.webp"
        heroTitle="Conciergerie Airbnb à Saint-Genis-Pouilly."
        heroSubtitle="Aux portes du CERN et à 15 minutes de Genève, Saint-Genis-Pouilly offre un potentiel locatif exceptionnel grâce au flux permanent de chercheurs et ingénieurs internationaux."
        introText={`
          <h2>Saint-Genis-Pouilly : le hub scientifique du Pays de Gex</h2>
          <p><strong>Saint-Genis-Pouilly</strong> est la commune la plus proche du CERN, le plus grand laboratoire de physique des particules au monde. Avec plus de <strong>17 000 collaborateurs de 110 nationalités</strong>, le CERN génère une demande locative permanente et de qualité.</p>
          <h2>Une clientèle idéale pour la location saisonnière</h2>
          <p>Les chercheurs et ingénieurs du CERN représentent des locataires <strong>respectueux, discrets et avec un budget confortable</strong> financé par leurs institutions. Leurs séjours varient de 2 semaines à 6 mois, ce qui assure un taux d'occupation élevé et stable toute l'année.</p>
          <p>Le quartier de la « Zone Industrielle » et le centre-ville en plein renouveau offrent des opportunités immobilières variées, du studio fonctionnel au T4 familial.</p>
          <h2>Quido, votre conciergerie locale à Saint-Genis-Pouilly</h2>
          <p>Nos bureaux sont situés au <strong>181 rue du Parc Jean Monnet à Saint-Genis-Pouilly</strong>. Nous sommes littéralement vos voisins et pouvons intervenir sur votre bien en quelques minutes.</p>
        `}
        marketHighlights={[
          { icon: "⚛️", title: "Le CERN", text: "17 000+ collaborateurs de 110 nationalités en missions de courte à moyenne durée. Une source de locataires premium, constante et fiable toute l'année." },
          { icon: "🏢", title: "Bassin d'emploi dynamique", text: "Zone commerciale en expansion, bureaux de consultants internationaux et proximité de Genève : Saint-Genis attire professionnels et familles." },
          { icon: "🏠", title: "Nos bureaux sur place", text: "Nos locaux sont à Saint-Genis-Pouilly. Intervention en quelques minutes, connaissance intime du quartier et du marché local." },
        ]}
        whyText="Nous sommes basés à Saint-Genis-Pouilly. C'est notre terrain, notre marché de prédilection. Chaque artisan, chaque commerçant, chaque événement local — nous les connaissons. C'est cette proximité qui fait toute la différence."
        specificAdvantages={[
          "Bureaux à Saint-Genis-Pouilly : intervention ultra-rapide sur votre bien",
          "Expertise de la clientèle CERN : profils, durées de séjour, attentes spécifiques",
          "Yield management adapté au calendrier scientifique (conférences, Open Days, shutdowns)",
          "Ménage hôtelier par nos équipes partenaires de confiance locales",
          "Réseau d'artisans saint-genois pour les interventions d'urgence",
          "Accompagnement complet : de la mise en valeur au suivi des revenus",
        ]}
        testimonial={{
          text: "J'ai hérité d'un appartement à Saint-Genis mais je vis à Lyon. La gestion à distance me semblait impossible. Avec Quido, tout est transparent : je reçois un rapport mensuel détaillé et les revenus tombent chaque mois.",
          author: "Stéphane — Propriétaire à Saint-Genis-Pouilly",
          rating: 5,
        }}
      />
    </>
  );
}
