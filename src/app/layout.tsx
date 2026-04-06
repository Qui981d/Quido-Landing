import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "../../public/Fonts/ProximaNova-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ProximaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ProximaNova-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ProximaNova-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ProximaNova-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/Fonts/ProximaNova-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quido.fr'),
  title: {
    default: 'Quido Conciergerie Locative | Gestion Airbnb au Pays de Gex',
    template: '%s | Quido Conciergerie',
  },
  description: 'Conciergerie locative premium au Pays de Gex. Déléguez la gestion Airbnb de votre bien à Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains et maximisez vos revenus locatifs. Service hôtelier 5 étoiles.',
  keywords: [
    'conciergerie locative', 'conciergerie airbnb', 'gestion airbnb', 'pays de gex',
    'location saisonnière', 'revenus locatifs', 'gestion locative courte durée',
    'conciergerie ferney-voltaire', 'conciergerie saint-genis-pouilly',
    'conciergerie divonne-les-bains', 'conciergerie gex',
    'ménage airbnb pays de gex', 'nettoyage location saisonnière',
    'gestion airbnb ferney-voltaire', 'location courte durée pays de gex',
    'conciergerie locative ain', 'gestion locative près de genève',
  ],
  authors: [{ name: 'Quido Conciergerie' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://quido.fr',
    siteName: 'Quido Conciergerie',
    title: 'Quido Conciergerie — Gestion Airbnb Premium au Pays de Gex',
    description: 'Conciergerie locative premium au Pays de Gex. Maximisez vos revenus locatifs avec un service hôtelier 5 étoiles à Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains.',
    images: [{ url: '/Logos/rvb_horizontal.png', width: 1200, height: 630, alt: 'Quido Conciergerie Locative Pays de Gex' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quido Conciergerie — Gestion Airbnb au Pays de Gex',
    description: 'Conciergerie locative premium au Pays de Gex. Déléguez et maximisez vos revenus.',
    images: ['/Logos/rvb_horizontal.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://quido.fr',
  },
  other: {
    'geo.region': 'FR-01',
    'geo.placename': 'Pays de Gex',
    'geo.position': '46.2437;6.0819',
    'ICBM': '46.2437, 6.0819',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${proximaNova.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://quido.fr/#organization",
              "name": "Quido Conciergerie",
              "alternateName": "Quido",
              "url": "https://quido.fr",
              "logo": "https://quido.fr/Logos/rvb_horizontal.png",
              "image": "https://quido.fr/images/hero-apartment-gex.webp",
              "description": "Conciergerie locative premium au Pays de Gex. Gestion complète de votre bien Airbnb : ménage hôtelier, communication voyageurs, optimisation tarifaire. Service 5 étoiles à Ferney-Voltaire, Saint-Genis-Pouilly, Divonne-les-Bains, Gex et Prévessin-Moëns.",
              "telephone": "+33602165671",
              "email": "hello@quido.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "181 rue du Parc Jean Monnet",
                "addressLocality": "Saint-Genis-Pouilly",
                "postalCode": "01630",
                "addressRegion": "Ain",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 46.2437,
                "longitude": 6.0819
              },
              "areaServed": [
                { "@type": "City", "name": "Ferney-Voltaire" },
                { "@type": "City", "name": "Saint-Genis-Pouilly" },
                { "@type": "City", "name": "Divonne-les-Bains" },
                { "@type": "City", "name": "Gex" },
                { "@type": "City", "name": "Prévessin-Moëns" },
                { "@type": "City", "name": "Thoiry" },
                { "@type": "City", "name": "Ornex" },
                { "@type": "City", "name": "Cessy" },
                { "@type": "City", "name": "Ségny" },
                { "@type": "AdministrativeArea", "name": "Pays de Gex" }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "08:00",
                "closes": "19:00"
              },
              "priceRange": "€€",
              "currenciesAccepted": "EUR",
              "paymentAccepted": "Virement, Prélèvement",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47",
                "bestRating": "5"
              },
              "sameAs": [
                "https://instagram.com/quido.conciergerie"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de conciergerie locative",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conciergerie Airbnb",
                      "description": "Gestion complète de votre bien en location saisonnière : annonce, voyageurs, ménage, linge, maintenance."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ménage professionnel",
                      "description": "Nettoyage hôtelier entre chaque séjour avec équipes partenaires de confiance."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Optimisation tarifaire",
                      "description": "Yield management et ajustement dynamique des prix pour maximiser vos revenus locatifs."
                    }
                  }
                ]
              }
            }).replace(/</g, '\\u003c')
          }}
        />
        {children}
      </body>
    </html>
  );
}
