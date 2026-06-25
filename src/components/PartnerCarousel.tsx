"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
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
              className="flex-shrink-0 flex items-center justify-center h-20 w-60 border-r border-stone-100 last:border-r-0"
            >
              <div className="w-full h-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <span className="text-stone-400 text-[11px] font-semibold uppercase tracking-wider">{p.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}