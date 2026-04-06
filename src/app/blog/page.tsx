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

        {/* Editorial CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-32">
          <div className="relative border border-black bg-quido text-black p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-500">
            {/* Décoration Géométrique */}
            <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-black/10 pointer-events-none hidden md:block">
              <svg className="absolute top-4 right-4 w-6 h-6 text-black/20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l1.5 10.5L24 12l-10.5 1.5L12 24l-1.5-10.5L0 12l10.5-1.5L12 0z"/></svg>
            </div>

            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] block mb-6 opacity-70">Passez à la prochaine étape</span>
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] mb-6">
                Prêt à passer à <br className="hidden md:block"/>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">l&apos;action ?</span>
                  <svg className="absolute w-[110%] h-[0.3em] -bottom-[0.05em] -left-[5%] z-0 text-white" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M5,15 C45,5 150,15 195,8" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p className="text-xl font-body leading-relaxed opacity-80">
                Découvrez gratuitement le potentiel locatif de votre bien au Pays de Gex avec une analyse de rentabilité précise.
              </p>
            </div>
            <div className="shrink-0 flex items-center justify-center relative z-10 w-full md:w-auto">
              <Link href="/estimation" className="group relative inline-flex items-center justify-center gap-4 bg-black text-white px-10 py-5 text-xl font-bold overflow-hidden w-full md:w-auto border border-black hover:border-black">
                <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Estimer mon bien</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:text-black group-hover:translate-x-2 transition-all duration-500" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
