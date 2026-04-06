import type { Metadata } from "next";
import CityLandingPage from "@/components/CityLandingPage";

export const metadata: Metadata = {
  title: "Conciergerie Airbnb à Divonne-les-Bains — Gestion Locative Haut de Gamme",
  description: "Conciergerie locative à Divonne-les-Bains. Gestion Airbnb haut de gamme pour villas et appartements. Clientèle premium, thermes, casino, lac Léman. Maximisez vos revenus.",
  alternates: { canonical: "https://quido.fr/conciergerie-divonne-les-bains" },
  openGraph: {
    title: "Conciergerie Airbnb Divonne-les-Bains — Quido",
    description: "Gestion locative haut de gamme à Divonne-les-Bains. Thermes, casino, lac Léman : une clientèle premium.",
    url: "https://quido.fr/conciergerie-divonne-les-bains",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Conciergerie Airbnb à Divonne-les-Bains",
  "provider": { "@type": "ProfessionalService", "@id": "https://quido.fr/#organization" },
  "areaServed": { "@type": "City", "name": "Divonne-les-Bains" },
  "description": "Service de conciergerie locative haut de gamme à Divonne-les-Bains.",
};

export default function DivonnePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <CityLandingPage
        city="Divonne-les-Bains"
        heroTitle="Conciergerie Airbnb à Divonne-les-Bains."
        heroSubtitle="Station thermale prestigieuse aux portes de Genève, Divonne-les-Bains attire une clientèle haut de gamme en quête de bien-être, de nature et de proximité avec la Suisse."
        introText={`
          <h2>Divonne-les-Bains : le luxe au naturel</h2>
          <p><strong>Divonne-les-Bains</strong> est une station thermale réputée depuis le XIXe siècle, connue pour ses thermes, son casino, son golf et ses vues imprenables sur le lac Léman et le Mont-Blanc. Cette image premium se traduit par une <strong>clientèle à fort pouvoir d'achat</strong> et des tarifs nuitée parmi les plus élevés du Pays de Gex.</p>
          <h2>Des revenus locatifs exceptionnels</h2>
          <p>À Divonne-les-Bains, les biens en location saisonnière bénéficient d'un positionnement tarifaire haut de gamme. Un appartement bien aménagé peut se louer <strong>30 à 50% plus cher</strong> qu'un bien équivalent dans les communes voisines. Les villas avec jardin ou vue lac atteignent des tarifs exceptionnels en haute saison.</p>
          <p>La clientèle est diverse : curistes, touristes en week-end bien-être, professionnels participant aux événements du casino ou du centre de congrès, et familles suisses cherchant un cadre naturel.</p>
          <h2>Notre approche haut de gamme à Divonne</h2>
          <p>Pour Divonne-les-Bains, nous appliquons un <strong>standard de conciergerie encore plus exigeant</strong> : produits d'accueil premium, linge de maison haut de gamme, et recommandations personnalisées (thermes, restaurants, activités) pour chaque voyageur.</p>
        `}
        marketHighlights={[
          { icon: "💎", title: "Clientèle premium", text: "Thermes, casino, golf, lac Léman : Divonne attire une clientèle aisée, exigeante et prête à payer le prix pour un séjour de qualité." },
          { icon: "🏔️", title: "Cadre naturel d'exception", text: "Vue sur le Mont-Blanc, proximité du lac Léman, sentiers de randonnée : un écrin naturel qui justifie des tarifs premium toute l'année." },
          { icon: "♨️", title: "Tourisme thermal & bien-être", text: "Les thermes de Divonne génèrent un flux de visiteurs régulier, notamment en intersaison, assurant une occupation stable." },
        ]}
        whyText="À Divonne-les-Bains, chaque détail compte. Nous adaptons notre service au standing de la commune : produits d'accueil sélectionnés, guide d'accueil personnalisé avec les meilleures adresses locales, et présentation irréprochable de votre bien."
        specificAdvantages={[
          "Service adapté au positionnement haut de gamme de Divonne-les-Bains",
          "Produits d'accueil premium et linge de qualité hôtelière supérieure",
          "Guide d'accueil personnalisé : thermes, restaurants, activités, bonnes adresses",
          "Yield management ciblé sur la clientèle bien-être et événements du casino",
          "Ménage approfondi entre chaque séjour aux standards hôteliers",
          "Intervention rapide grâce à notre proximité dans le Pays de Gex",
        ]}
        testimonial={{
          text: "La vraie différence, c'est la tranquillité d'esprit que leur équipe locale m'apporte. Mon appartement est toujours parfaitement entretenu et je n'ai absolument plus aucune charge mentale.",
          author: "Clara T. — Propriétaire à Divonne-les-Bains",
          rating: 5,
        }}
      />
    </>
  );
}
