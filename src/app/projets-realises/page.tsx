"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const categories = ["Tous", "Extérieur", "Intérieur", "Jardins", "Sport & Loisirs"];

const projects = [
  { name: "Façade Principale",    cat: "Extérieur",       year: "2026", img: "/images/facade-principale.png", desc: "Vue frontale — architecture contemporaine, balcons en courbes, végétalisation intégrée.", large: true },
  { name: "Vue de Nuit",          cat: "Extérieur",       year: "2026", img: "/images/nuit-01.png",           desc: "Illumination architecturale nocturne de la Résidence Radhia IV.", large: false },
  { name: "Vue Aérienne 01",      cat: "Extérieur",       year: "2026", img: "/images/top-view-01.jpg",       desc: "Vue drone — implantation dans son quartier.", large: false },
  { name: "Hall de Réception",    cat: "Intérieur",       year: "2026", img: "/images/hall-01.jpg",           desc: "Lobby en marbre avec bonsaï signature et éclairage LED linéaire.", large: true },
  { name: "Couloir Hall",         cat: "Intérieur",       year: "2026", img: "/images/accueil.jpeg",          desc: "Perspective du hall d'accès vers le jardin intérieur.", large: false },
  { name: "Hall Lumineux",        cat: "Intérieur",       year: "2026", img: "/images/hall-02.jpg",           desc: "Détail luminaire et revêtements nobles.", large: false },
  { name: "Salon S+1",            cat: "Intérieur",       year: "2026", img: "/images/appart-s1-01.jpeg",     desc: "Living room S+1 — finitions premium, éclairage annulaire design.", large: false },
  { name: "Salon S+2",            cat: "Intérieur",       year: "2026", img: "/images/appart-s2-01.jpeg",     desc: "Espace de vie S+2 — volumes généreux et vue dégagée.", large: false },
  { name: "Cuisine équipée",      cat: "Intérieur",       year: "2026", img: "/images/cuisine.jpeg",          desc: "Cuisine intégrée avec électroménager haut de gamme.", large: false },
  { name: "Jardin Central",       cat: "Jardins",         year: "2026", img: "/images/jardin-01.png",         desc: "Espace vert privatif en cœur d'îlot — palmiers, gazon et fontaines.", large: true },
  { name: "Bassin Koi",           cat: "Jardins",         year: "2026", img: "/images/piscine.jpeg",          desc: "Bassin décoratif avec carpes koï et terrasses bois.", large: false },
  { name: "Jardin Extérieur",     cat: "Jardins",         year: "2026", img: "/images/jardin-03.jpg",         desc: "Couloirs paysagés et allées végétalisées.", large: false },
  { name: "Salle de Sport",       cat: "Sport & Loisirs", year: "2026", img: "/images/sport-01.jpg",          desc: "Fitness center avec équipements professionnels et vue dégagée.", large: true },
  { name: "Cardio & Musculation", cat: "Sport & Loisirs", year: "2026", img: "/images/sport-03.jpg",          desc: "Zone cardio équipée de machines de dernière génération.", large: false },
  { name: "Zone Étirements",      cat: "Sport & Loisirs", year: "2026", img: "/images/sport-04.jpg",          desc: "Espace yoga et étirements avec sol spécialisé.", large: false },
];

export default function ProjetsRealisesPage() {
  const [active, setActive] = useState("Tous");
  const filtered = active === "Tous" ? projects : projects.filter((p) => p.cat === active);

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
        {/* Architectural line sweep */}
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

      {/* FILTER + GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Label */}
          <Reveal className="mb-10">
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-2">Nos Réalisations</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl md:text-4xl font-light text-stone-900">
              Chaque projet est<br /><em className="not-italic text-[#AB7A51]">une signature.</em>
            </h2>
          </Reveal>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <motion.button
                key={c}
                onClick={() => setActive(c)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`text-[11px] font-semibold tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200 cursor-pointer ${
                  active === c
                    ? "bg-[#0F0C42] text-white border-[#0F0C42]"
                    : "bg-transparent text-stone-500 border-stone-200 hover:border-stone-900 hover:text-stone-900"
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group break-inside-avoid bg-white overflow-hidden mb-4 cursor-pointer"
                  whileHover={{ y: -3 }}
                >
                  <div className={`relative overflow-hidden ${p.large ? "h-80" : "h-52"}`}>
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image src={p.img} alt={p.name} fill className="object-cover" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-[#AB7A51] text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1">
                      {p.cat}
                    </div>
                    {/* Hover detail */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <p className="text-white/70 text-[12px] leading-snug">{p.desc}</p>
                    </motion.div>
                    {/* Architectural corner marks */}
                    <motion.div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/40" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} />
                  </div>
                  <div className="px-5 py-4 border-t border-stone-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-lg font-medium text-stone-900">{p.name}</p>
                        <p className="text-stone-400 text-[11px] mt-0.5">{p.year}</p>
                      </div>
                      <div className="w-7 h-7 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-[#AB7A51] group-hover:text-[#AB7A51] transition-colors">
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      
    </>
  );
}


