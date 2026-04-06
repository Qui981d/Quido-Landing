import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de Quido Conciergerie (QUIDO SAS).",
  robots: { index: false, follow: true },
};

export default function LegalNoticesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">Mentions Légales</h1>
          
          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-black">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>quido.fr</strong> est édité par la société :<br /><br />
              <strong>QUIDO SAS</strong> (QDO)<br />
              Siège social : 181 rue du Parc Jean Monnet, 01630 Saint-Genis-Pouilly, France<br />
              Numéro SIREN : 925 112 898<br />
              Numéro SIRET : 925 112 898 00018<br />
              Email : <a href="mailto:hello@quido.fr" className="text-quido">hello@quido.fr</a><br />
              Téléphone : +33 6 02 16 56 71
            </p>

            <h2>2. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br /><br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              États-Unis
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique ou papier quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>

            <h2>4. Responsabilité</h2>
            <p>
              QUIDO SAS s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, QUIDO SAS décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
            </p>

            <h2>5. Litiges</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
