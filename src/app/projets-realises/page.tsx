"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const residences = [
  {
    name: "Résidence Gloria",
    slug: "residence-gloria",
    img: "/Gloria/Gloria.png",
    description: "Projet réalisé — Résidence Gloria"
  }
];

export default function ProjetsRealisesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/images/top-view-02.jpg" alt="Projets" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AB7A51] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-14 w-full">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3"
          >
            Notre Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-5xl md:text-7xl font-light text-white"
          >
            Projets Réalisés
          </motion.h1>
        </div>
      </section>

      {/* RESIDENCE LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <Reveal className="mb-12">
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-2">Résidences</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl md:text-4xl font-light text-stone-900">
              Sélectionnez une résidence<br /><em className="not-italic text-[#AB7A51]">pour voir les projets.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residences.map((residence, i) => (
              <motion.div
                key={residence.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/projets-realises/${residence.slug}`} className="group block">
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={residence.img}
                      alt={residence.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-2xl font-medium text-white mb-1">
                        {residence.name}
                      </h3>
                      <p className="text-white/70 text-sm">{residence.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
}