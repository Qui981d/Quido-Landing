import type { Metadata } from "next";
import EstimationForm from "./EstimationForm";

export const metadata: Metadata = {
  title: "Estimation Gratuite de vos Revenus Locatifs au Pays de Gex",
  description: "Estimez gratuitement le potentiel locatif de votre bien au Pays de Gex. Analyse personnalisée sous 48h par nos experts locaux à Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains.",
  alternates: { canonical: "https://quido.fr/estimation" },
  openGraph: {
    title: "Estimation Gratuite — Conciergerie Quido Pays de Gex",
    description: "Découvrez combien votre bien peut rapporter en location saisonnière au Pays de Gex. Estimation gratuite et sans engagement.",
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
