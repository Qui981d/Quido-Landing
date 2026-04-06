import type { Metadata } from "next";
import RendezVousForm from "./RendezVousForm";

export const metadata: Metadata = {
  title: "Prendre Rendez-vous — Conciergerie Locative Pays de Gex",
  description: "Réservez un appel découverte gratuit de 30 minutes avec nos experts. Nous analyserons le potentiel locatif de votre bien à Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains ou Gex.",
  alternates: { canonical: "https://quido.fr/rendez-vous" },
  openGraph: {
    title: "Prendre Rendez-vous — Quido Conciergerie",
    description: "Appel découverte gratuit. Nos experts locaux analysent le potentiel de votre bien au Pays de Gex.",
    url: "https://quido.fr/rendez-vous",
  },
};

export default function RendezVousPage() {
  return <RendezVousForm />;
}
