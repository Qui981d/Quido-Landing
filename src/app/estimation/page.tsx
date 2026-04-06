import type { Metadata } from "next";
import EstimationForm from "./EstimationForm";

export const metadata: Metadata = {
  title: "Estimer ses Revenus Airbnb — Simulation Gratuite | Pays de Gex",
  description: "Estimation Airbnb gratuite : simulez vos revenus locatifs en location courte durée au Pays de Gex. Outil de simulation revenu Airbnb personnalisé, résultat sous 48h. Ferney-Voltaire, Saint-Genis-Pouilly, Gex, Divonne.",
  alternates: { canonical: "https://quido.fr/estimation" },
  keywords: [
    'estimer revenus airbnb', 'estimation airbnb', 'simulation airbnb',
    'simulation revenu airbnb', 'estimer revenu location courte durée',
    'combien rapporte airbnb', 'revenus location saisonnière pays de gex',
    'calculer rentabilité airbnb', 'estimation revenus locatifs',
  ],
  openGraph: {
    title: "Estimer ses Revenus Airbnb — Simulation Gratuite au Pays de Gex",
    description: "Simulez gratuitement combien votre bien peut rapporter en location Airbnb au Pays de Gex. Estimation personnalisée sans engagement.",
    url: "https://quido.fr/estimation",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://quido.fr" },
    { "@type": "ListItem", "position": 2, "name": "Estimation", "item": "https://quido.fr/estimation" }
  ]
};

export default function EstimationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }} />
      <EstimationForm />
    </>
  );
}
