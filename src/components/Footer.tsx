import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Globe, AtSign, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0C42] text-white/60">
      

      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <Image src="/logo_bam.png" alt="BAM Immobilière" width={100} height={50} className="object-contain h-10 w-auto mb-6 brightness-0 invert opacity-80" />
          <p className="text-[13px] leading-relaxed text-white/40 mb-7">
            Promoteur immobilier de référence en Tunisie depuis plus de 20 ans. Qualité, transparence et excellence.
          </p>
          <div className="flex gap-3">
            {[Globe, AtSign, Link2].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/35 hover:border-[#AB7A51] hover:text-[#AB7A51] transition-colors duration-200">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">Navigation</p>
          <ul className="space-y-3">
            {["/", "/a-propos", "/projets-en-cours", "/projets-realises", "/contact"].map((href, i) => (
              <li key={href}>
                <Link href={href} className="text-[13px] text-white/40 hover:text-[#AB7A51] transition-colors duration-200">
                  {["Accueil", "À Propos", "Projets en Cours", "Projets Réalisés", "Contact"][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">Services</p>
          <ul className="space-y-3">
            {["Construction", "Architecture", "Promotion Immobilière", "Gestion & Conseil", "Livraison Clé en Main"].map((s) => (
              <li key={s} className="text-[13px] text-white/40">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">Contact</p>
          <ul className="space-y-4">
            {[
              { Icon: MapPin, text: "Sahloul 4, Sousse" },
              { Icon: Phone, text: "+216 24 205 201", href: "tel:+21624205201" },
              { Icon: Mail, text: "info@bamimmobiliere.com", href: "mailto:info@bamimmobiliere.com" },
              { Icon: Clock, text: "Lun–Ven: 8h00–17h30" },
            ].map(({ Icon, text, href }, i) => (
              <li key={i} className="flex gap-3">
                <Icon size={13} className="text-[#AB7A51] mt-0.5 flex-shrink-0" />
                {href ? (
                  <a href={href} className="text-[13px] text-white/40 hover:text-[#AB7A51] transition-colors leading-snug">{text}</a>
                ) : (
                  <span className="text-[13px] text-white/40 leading-snug">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/25">© {new Date().getFullYear()} BAM Immobilière. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[12px] text-white/25 hover:text-white/50 transition-colors">Mentions Légales</a>
            <a href="#" className="text-[12px] text-white/25 hover:text-white/50 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
