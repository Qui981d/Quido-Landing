import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
}

export default function BlogCard({ slug, title, description, category, date, readTime, coverImage }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden card-lift h-full flex flex-col">
        <div className="relative h-52 overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-quido px-3 py-1.5 rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
            <time dateTime={date}>{new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>{readTime}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 transition-colors leading-snug tracking-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            {description}
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-semibold text-black transition-colors">
            Lire l&apos;article
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
