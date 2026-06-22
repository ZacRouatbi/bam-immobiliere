"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import MentionsLegalesModal from "@/components/modals/MentionsLegalesModal";
import ConfidentialiteModal from "@/components/modals/ConfidentialiteModal";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.43 9.88v-6.99H7.9v-2.89h2.53V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.77l-.44 2.89h-2.33V22C18.34 21.12 22 16.99 22 12z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7H8v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const [showMentions, setShowMentions] = useState(false);
  const [showConfidentialite, setShowConfidentialite] = useState(false);

  return (
    <>
      <footer className="bg-[#0F0C42] text-white/60">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Image src="/logo_bam.png" alt="BAM Immobilière" width={100} height={50} className="object-contain h-10 w-auto mb-6 brightness-0 invert opacity-80" />
            <p className="text-[13px] leading-relaxed text-white/40 mb-7">
              Promoteur immobilier de référence en Tunisie depuis plus de 20 ans. Qualité, transparence et excellence.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, href: "https://www.facebook.com/bamimmo/" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/bam_immobiliere/" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/bamimmobilier" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/35 hover:border-[#AB7A51] hover:text-[#AB7A51] transition-colors duration-200">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">Navigation</p>
            <ul className="space-y-3">
  {["/", "/projets-en-cours", "/projets-realises", "/contact"].map((href, i) => (
                <li key={href}>
                  <Link href={href} className="text-[13px] text-white/40 hover:text-[#AB7A51] transition-colors duration-200">
                    {["Accueil", "Projets en Cours", "Projets Réalisé", "Contact"][i]}
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
              <button
                onClick={() => setShowMentions(true)}
                className="text-[12px] text-white/25 hover:text-white/50 transition-colors cursor-pointer"
              >
                Mentions Légales
              </button>
              <button
                onClick={() => setShowConfidentialite(true)}
                className="text-[12px] text-white/25 hover:text-white/50 transition-colors cursor-pointer"
              >
                Confidentialité
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <MentionsLegalesModal open={showMentions} onClose={() => setShowMentions(false)} />
      <ConfidentialiteModal open={showConfidentialite} onClose={() => setShowConfidentialite(false)} />
    </>
  );
}