import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et de gestion des données personnelles de Quido Conciergerie.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-black">
            <h2>1. Introduction</h2>
            <p>
              Dans le cadre de son activité de conciergerie locative, <strong>QUIDO SAS</strong>, agissant en tant que responsable de traitement, est susceptible de collecter et traiter des données à caractère personnel vous concernant. Cette politique a pour but de vous informer sur les moyens que nous mettons en œuvre pour collecter vos données dans le strict respect de vos droits (conformément au RGPD et à la loi Informatique et Libertés).
            </p>

            <h2>2. Données collectées</h2>
            <p>
              Nous collectons les données suivantes :
            </p>
            <ul>
              <li>Les données que vous nous transmettez directement (via nos formulaires de contact, d'estimation, ou de prise de rendez-vous) : nom, prénom, adresse e-mail, numéro de téléphone, informations relatives à votre bien immobilier.</li>
              <li>Les données collectées automatiquement lors de votre navigation sur notre site (cookies de mesure d'audience, adresses IP).</li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>
              Vos données sont traitées pour les finalités suivantes :
            </p>
            <ul>
              <li>Répondre à vos demandes d'informations ou de rappel (Contact, Rendez-vous).</li>
              <li>Éditer des estimations personnalisées du potentiel locatif de votre bien.</li>
              <li>Gérer la relation commerciale (si vous devenez client de Quido Conciergerie).</li>
              <li>Améliorer le fonctionnement technique et l'expérience utilisateur de notre site internet.</li>
            </ul>

            <h2>4. Conservation des données</h2>
            <p>
              Nous conservons vos données personnelles pour la durée strictement nécessaire à la réalisation des finalités énoncées. En matière de prospection commerciale (demande d'estimation non suivie d'un contrat), vos données sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact.
            </p>

            <h2>5. Vos droits</h2>
            <p>
              Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et de limitation du traitement de vos données. Vous pouvez également vous opposer au traitement de vos données pour des motifs légitimes.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter à :<br />
              <strong>Email :</strong> <a href="mailto:hello@quido.fr" className="text-quido">hello@quido.fr</a><br />
              <strong>Courrier :</strong> QUIDO SAS, 181 rue du Parc Jean Monnet, 01630 Saint-Genis-Pouilly.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Notre site utilise des cookies (fichiers traceurs) pour mesurer l'audience de notre site et garantir son bon fonctionnement. Vous pouvez configurer votre navigateur pour refuser ces cookies, bien que cela puisse impacter certaines fonctionnalités du site.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
