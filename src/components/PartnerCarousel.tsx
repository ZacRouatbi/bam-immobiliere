"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Osmose", logo: "/partners/Osmose.png" },
  { name: "ESSID", logo: "/partners/ESSID.png" },
  { name: "Tunisie Contrôle", logo: "/partners/TunisieControl.png" },
  { name: "Société Works & Construction", logo: "/Construction.png" },
  { name: "Atelier Osmore", logo: "/Architecture.png" },
  { name: "Sofiane Fayala", logo: "/logo_bam.png" },
  { name: "Soheil Ben Nejma", logo: "/logo_bam.png" },
];

export default function PartnerCarousel() {
  const baseTransitionTime = 30;
  const transitionTime = Math.max(15, baseTransitionTime / partners.length * 4);
  const totalWidth = partners.length * 240;

  return (
    <div className="overflow-hidden bg-white py-16 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3">Nos Partenaires</p>
      
      </div>
      <div className="relative">
        <motion.div
          className="flex"
          animate={{ x: [0, -totalWidth] }}
          transition={{
            x: {
              duration: transitionTime,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center h-28 w-60 border-r border-stone-100 last:border-r-0"
            >
              <div className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                {p.logo && <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain mb-2" />}
                <span className="text-stone-400 text-[10px] font-semibold uppercase tracking-wider">{p.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}