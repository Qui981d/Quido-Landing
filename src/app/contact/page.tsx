import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contactez Quido Conciergerie — Pays de Gex",
  description: "Contactez notre équipe locale au Pays de Gex pour toute question sur la gestion locative, le ménage Airbnb ou un partenariat. Réponse rapide garantie.",
  alternates: { canonical: "https://quido.fr/contact" },
  openGraph: {
    title: "Contact — Quido Conciergerie Pays de Gex",
    description: "Une question ? Contactez notre équipe locale à Saint-Genis-Pouilly. Gestion Airbnb, conciergerie locative, ménage professionnel.",
    url: "https://quido.fr/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
