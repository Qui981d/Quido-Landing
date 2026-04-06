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
  async rewrites() {
    return [
      {
        source: '/menage',
        destination: 'https://quido-menage.vercel.app/menage',
      },
      {
        source: '/menage/:path*',
        destination: 'https://quido-menage.vercel.app/menage/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
