import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-data";
import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Conseils Location Saisonnière & Conciergerie au Pays de Gex",
  description: "Guides, conseils et analyses pour les propriétaires au Pays de Gex : revenus locatifs, fiscalité LMNP, optimisation Airbnb et gestion de conciergerie.",
  alternates: { canonical: "https://quido.fr/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog Quido Conciergerie",
    description: "Articles et guides sur la location saisonnière au Pays de Gex",
    url: "https://quido.fr/blog",
    publisher: {
      "@type": "Organization",
      name: "Quido Conciergerie",
      url: "https://quido.fr",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-quido block" />
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">Blog Quido</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[0.95] mb-6">
            Ressources &<br />
            <span className="text-gray-400 font-light">expertises.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            Guides pratiques, analyses de marché et conseils d&apos;experts pour maximiser vos revenus locatifs au Pays de Gex.
          </p>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-200 overflow-hidden card-lift">
                <div className="relative h-64 md:h-full min-h-[350px] overflow-hidden">
                  <img src={featuredPost.coverImage} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-quido text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                      Article à la une
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full font-semibold text-gray-600">{featuredPost.category}</span>
                    <time dateTime={featuredPost.date}>{new Date(featuredPost.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-snug transition-colors">{featuredPost.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">{featuredPost.description}</p>
                  <div className="flex items-center gap-2 text-lg font-semibold text-black transition-colors">
                    Lire l&apos;article
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            <span>Tous les articles</span>
            <span className="h-px flex-1 bg-gray-200" />
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-24">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black p-10 md:p-16 text-white text-center">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-quido/20 -z-0" style={{ borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%' }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Prêt à passer à l&apos;action ?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">Découvrez gratuitement le potentiel locatif de votre bien au Pays de Gex.</p>
              <Link href="/estimation" className="group inline-flex items-center gap-3 bg-quido text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                Estimer mon bien <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
