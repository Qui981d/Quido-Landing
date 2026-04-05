import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6">
              <img src="/Logos/rvb_horizontal.png" alt="Quido Conciergerie" className="h-10 md:h-14 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Le service de conciergerie locative premium qui libère votre esprit et maximise vos revenus.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/quido.conciergerie" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link href="#services" className="hover:text-quido transition-colors">Conciergerie Locative</Link></li>
              <li><Link href="#" className="hover:text-quido transition-colors">Ménage Professionnel</Link></li>
              <li><Link href="#" className="hover:text-quido transition-colors">Gestion de Linge</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Entreprise</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-quido transition-colors">À propos</Link></li>
              <li><Link href="/blog" className="hover:text-quido transition-colors">Conseils</Link></li>
              <li><Link href="#faq" className="hover:text-quido transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-quido transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3"><Mail size={16} className="text-quido" /> <a href="mailto:hello@quido.fr" className="hover:text-quido transition-colors">hello@quido.fr</a></li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-quido" /> <a href="tel:+33602165671" className="hover:text-quido transition-colors">06 02 16 56 71</a></li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-quido shrink-0 mt-1" /> 181 rue du Parc Jean Monnet<br/>01630 Saint-Genis-Pouilly</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Quido Conciergerie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
