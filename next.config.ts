import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/contact-gestion-locative',
        destination: '/rendez-vous',
        permanent: true,
      },
      {
        source: '/conciergerie',
        destination: '/',
        permanent: true,
      },
      {
        source: '/plan-de-site',
        destination: '/',
        permanent: true,
      },
      {
        source: '/estimez-vos-revenus-locatifs',
        destination: '/estimation',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
