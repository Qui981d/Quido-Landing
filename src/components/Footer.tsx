import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const cities = [
    "Ferney-Voltaire", "Saint-Genis-Pouilly", "Divonne-les-Bains",
    "Gex", "Prévessin-Moëns", "Thoiry", "Ornex", "Cessy", "Ségny"
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6">
              <img src="/Logos/rvb_horizontal.png" alt="Quido Conciergerie Locative Pays de Gex" className="h-10 md:h-14 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Conciergerie locative premium au Pays de Gex. Gestion Airbnb complète : ménage hôtelier, communication voyageurs, optimisation tarifaire. Maximisez vos revenus locatifs en toute sérénité.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/quido.conciergerie" target="_blank" rel="noopener noreferrer" aria-label="Suivez Quido Conciergerie sur Instagram" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link href="/#services" className="hover:text-quido transition-colors">Conciergerie Locative</Link></li>
              <li><Link href="/menage" className="hover:text-quido transition-colors">Ménage Professionnel</Link></li>
              <li><Link href="/#services" className="hover:text-quido transition-colors">Gestion de Linge</Link></li>
              <li><Link href="/estimation" className="hover:text-quido transition-colors">Estimation Gratuite</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Entreprise</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link href="/contact" className="hover:text-quido transition-colors">Nous contacter</Link></li>
              <li><Link href="/blog" className="hover:text-quido transition-colors">Conseils & Blog</Link></li>
              <li><Link href="/#faq" className="hover:text-quido transition-colors">FAQ</Link></li>
              <li><Link href="/rendez-vous" className="hover:text-quido transition-colors">Prendre rendez-vous</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <address className="not-italic">
              <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3"><Mail size={16} className="text-quido" /> <a href="mailto:hello@quido.fr" className="hover:text-quido transition-colors">hello@quido.fr</a></li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-quido" /> <a href="tel:+33602165671" className="hover:text-quido transition-colors">06 02 16 56 71</a></li>
                <li className="flex items-start gap-3"><MapPin size={16} className="text-quido shrink-0 mt-1" /> <span>181 rue du Parc Jean Monnet<br/>01630 Saint-Genis-Pouilly</span></li>
              </ul>
            </address>
          </div>
        </div>

        {/* Villes desservies — SEO local */}
        <div className="pt-8 border-t border-white/10 mb-8">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Conciergerie locative dans le Pays de Gex</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
            {cities.map((city, i) => (
              <span key={city}>
                <Link href={`/conciergerie-${city.toLowerCase().replace(/\s+/g, '-').replace(/[éè]/g, 'e').replace(/ë/g, 'e')}`} className="hover:text-quido transition-colors">
                  {city}
                </Link>
                {i < cities.length - 1 && <span className="ml-4 text-gray-700">·</span>}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Quido Conciergerie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
