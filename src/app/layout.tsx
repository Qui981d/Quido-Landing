import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/ProximaNova-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNova-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNova-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNova-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNova-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/ProximaNova-Black.otf",
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
  description: 'Conciergerie locative premium au Pays de Gex. Déléguez la gestion Airbnb de votre bien et maximisez vos revenus locatifs. Service hôtelier 5 étoiles.',
  keywords: ['conciergerie locative', 'gestion airbnb', 'pays de gex', 'location saisonnière', 'revenus locatifs', 'conciergerie airbnb'],
  authors: [{ name: 'Quido Conciergerie' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://quido.fr',
    siteName: 'Quido Conciergerie',
    title: 'Quido Conciergerie Locative | Gestion Airbnb Premium',
    description: 'Conciergerie locative premium au Pays de Gex. Maximisez vos revenus locatifs avec un service hôtelier 5 étoiles.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quido Conciergerie Locative',
    description: 'Gestion Airbnb premium au Pays de Gex. Maximisez vos revenus.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://quido.fr',
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
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
