import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/blog/Breadcrumb";
import ArticleCTA from "@/components/blog/ArticleCTA";
import BlogCard from "@/components/blog/BlogCard";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://quido.fr/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://quido.fr/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `https://quido.fr${post.coverImage}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Quido Conciergerie", url: "https://quido.fr" },
    publisher: { "@type": "Organization", name: "Quido Conciergerie", url: "https://quido.fr" },
    mainEntityOfPage: `https://quido.fr/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[450px] relative overflow-hidden mb-12">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />

          {/* Header */}
          <header className="mt-8 mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
              <span className="bg-quido-light text-quido-dark px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider">{post.category}</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>{post.readTime} de lecture</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] text-black">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg prose-gray max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-relaxed prose-p:text-gray-600
              prose-a:text-quido prose-a:no-underline hover:prose-a:text-quido-dark prose-a:font-semibold
              prose-li:text-gray-600 prose-li:leading-relaxed
              prose-strong:text-black prose-strong:font-bold
              prose-ul:my-4 prose-ol:my-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <ArticleCTA />
        </article>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span>Articles similaires</span>
              <span className="h-px flex-1 bg-gray-200" />
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <BlogCard key={p.slug} {...p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
