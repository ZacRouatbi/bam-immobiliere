"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PartnerCarousel from "@/components/PartnerCarousel";
import { slideLeft, slideRight, scaleReveal, staggerContainer, cardLift, lineGrow, countUp } from "@/lib/motion";

const amenities = [
  { img: "/images/piscine.jpeg",   label: "Bassin & Jardins",   desc: "Espace aquatique et jardins paysagés en cœur de résidence." },
  { img: "/images/hall-01.jpg",    label: "Hall de Réception",   desc: "Lobby marbré avec accueil concierge 24h/24." },
  { img: "/images/sport-01.jpg",   label: "Salle de Sport",      desc: "Équipements fitness dernière génération." },
  { img: "/images/jardin-01.png",  label: "Espaces Verts",       desc: "Terrasses jardins et couloirs végétalisés." },
];

const apartments = [
  { label: "S+1", img: "/images/appart-s1-01.jpeg",  surface: "85–95 m²",   rooms: "2 pièces" },
  { label: "S+2", img: "/images/appart-s2-01.jpeg",  surface: "110–130 m²", rooms: "3 pièces" },
  { label: "S+3", img: "/images/appart-s1-02.jpeg",  surface: "145–165 m²", rooms: "4 pièces" },
];

const stats = [
  { n: "+150", l: "Projets Réalisés" },
  { n: "+20",  l: "Ans d'Expérience" },
  { n: "+300", l: "Clients Satisfaits" },
  { n: "+40",  l: "Partenaires" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  // Parallax: hero image moves slower than scroll
  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      {/* ── HERO ── parallax + entrance text animation */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/images/facade-principale.png"
            alt="Résidence Radhia IV"
            fill priority
            className="object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-28 left-8 md:left-16"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 inline-flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#AB7A51]"
            />
            <span className="text-white text-[11px] tracking-[0.25em] uppercase font-medium">BAM Immobilière · Tunis</span>
          </div>
        </motion.div>

        {/* Hero text — staggered entrance */}
        <motion.div
          className="relative z-10 px-8 md:px-16 pb-16 md:pb-24"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[#AB7A51] text-[11px] uppercase tracking-[0.35em] font-semibold mb-5"
          >
            Résidence Radhia IV
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-6xl md:text-8xl font-light text-white leading-[0.92] mb-6 max-w-3xl"
          >
            Une adresse<br />
            <em className="not-italic text-[#C49572]">d&apos;exception.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/65 text-base max-w-md leading-relaxed mb-10"
          >
            Appartements haut standing à Tunis — finitions luxueuses, services premium, architecture contemporaine.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projets-realises" className="inline-flex items-center gap-3 bg-[#AB7A51] hover:bg-[#966840] text-white text-[12px] font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-300">
              Découvrir le projet <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 border border-white/40 hover:border-white text-white text-[12px] font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-300">
              Nous Contacter
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent to-white/50"
          />
          <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</p>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-stone-100">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100"
        >
          {stats.map((s, i) => (
            <motion.div key={s.l} variants={countUp} custom={i} className="px-8 py-4 text-center">
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl font-light text-[#AB7A51] mb-1">{s.n}</p>
              <p className="text-stone-400 text-[11px] uppercase tracking-widest">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PROJECT INTRO ── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal variants={slideLeft}>
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">Notre Projet Phare</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-5xl md:text-6xl font-light text-stone-900 leading-[1.05] mb-7">
              Résidence<br />Radhia IV
            </h2>
            {/* Animated rule */}
            <motion.div
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-px bg-[#AB7A51] w-16 mb-7"
            />
            <p className="text-stone-500 leading-relaxed mb-5">
              Implantée au cœur d&apos;un quartier prisé de Tunis, la Résidence Radhia IV incarne une nouvelle vision du vivre haut de gamme. Architecture contemporaine, matériaux nobles et services de prestige définissent chaque détail de cet immeuble R+7.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              Des appartements S+1 au S+3 pensés pour maximiser la lumière naturelle, avec des espaces communs d&apos;exception — hall marbré avec concierge, salle de sport, jardins et bassin privatifs.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-100">
              {[{ n: "R+7", l: "Niveaux" }, { n: "3", l: "Typologies" }, { n: "2026", l: "Livraison" }].map((v, i) => (
                <motion.div
                  key={v.l}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22,1,0.36,1] }}
                >
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-[#AB7A51] mb-1">{v.n}</p>
                  <p className="text-stone-400 text-[11px] uppercase tracking-widest">{v.l}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal variants={slideRight} className="relative h-[540px]">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src="/images/nuit-01.png" alt="Résidence de nuit" fill className="object-cover object-center" />
              </motion.div>
            </div>
            {/* Float-in card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: -24, y: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 bg-white shadow-xl p-6 w-56 z-10"
            >
              <p className="text-[#AB7A51] text-[10px] uppercase tracking-widest font-semibold mb-2">Livraison</p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-stone-900">2026</p>
              <p className="text-stone-400 text-xs mt-1">Tunis, Tunisie</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── VIDEO SHOWREEL ── */}
      <section className="relative bg-stone-50 overflow-hidden">
        <VideoSection />
      </section>

      {/* ── APARTMENTS ── */}
      <section className="py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Appartements</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">
                Des espaces conçus<br />pour votre mode de vie.
              </h2>
            </Reveal>
            <Reveal>
              <Link href="/projets-realises" className="inline-flex items-center gap-2 text-stone-500 text-sm hover:text-[#AB7A51] transition-colors whitespace-nowrap">
                Voir tous les plans <ChevronRight size={15} />
              </Link>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {apartments.map((a, i) => (
              <motion.div
                key={a.label}
                variants={cardLift}
                custom={i}
                className="group bg-white overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={a.img} alt={a.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Architectural overlay line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#AB7A51]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="p-7 flex items-center justify-between">
                  <div>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-stone-900 mb-1">{a.label}</p>
                    <p className="text-stone-400 text-[12px]">{a.rooms} · {a.surface}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-9 h-9 border border-[#AB7A51] flex items-center justify-center text-[#AB7A51] group-hover:bg-[#AB7A51] group-hover:text-white transition-colors"
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14">
            <Reveal>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Services & Équipements</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900 leading-tight max-w-xl">
                Un art de vivre<br />
                <em className="not-italic text-[#C49572]">pensé dans ses moindres détails.</em>
              </h2>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {amenities.map((a, i) => (
<motion.div
                key={a.label}
                variants={cardLift}
                custom={i}
                className="group relative overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={a.img} alt={a.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-[#AB7A51] origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.12 + 0.2 }}
                  />
                </div>
<div className="absolute bottom-0 left-0 right-0 p-5">
                   <p className="text-[#AB7A51] text-[10px] uppercase tracking-widest font-semibold mb-1">{a.label}</p>
                   <p className="text-white text-sm leading-snug">{a.desc}</p>
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

{/* ── HALL CINEMATIC ── */}
       <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/images/accueil.jpeg" alt="Hall entrée" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-8">
          <div>
            <Reveal>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">Hall d&apos;Entrée</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
                Un accueil<br />qui marque les esprits.
              </h2>
              <Link href="/projets-realises" className="inline-flex items-center gap-3 border border-white/60 text-white hover:bg-white hover:text-stone-900 text-[12px] font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-300">
                Explorer la Résidence
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

{/* SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14 text-center">
            <Reveal>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Nos Services</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900">
                Des solutions complètes pour vos projets.
              </h2>
            </Reveal>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-stone-100"
          >
            {[
              { n: "01", t: "Construction",  d: "Ouvrages résidentiels, commerciaux et industriels livrés avec rigueur." },
              { n: "02", t: "Architecture",  d: "Conception moderne sur mesure, adaptée à votre vision." },
              { n: "03", t: "Promotion",     d: "Projets à forte valeur ajoutée, de l'étude à la livraison." },
              { n: "04", t: "Conseil",       d: "Accompagnement stratégique et gestion de patrimoine immobilier." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                variants={cardLift}
                custom={i}
                className="group p-8 border-b md:border-b-0 border-r border-stone-100 last:border-r-0 hover:bg-stone-50 transition-colors cursor-pointer"
              >
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-5xl font-light text-[#C49572] group-hover:text-[#AB7A51] mb-6 transition-colors duration-500">{s.n}</p>
                <h3 className="text-base font-semibold text-stone-900 mb-3">{s.t}</h3>
                <p className="text-stone-400 text-[13px] leading-relaxed mb-6">{s.d}</p>
                <motion.div className="h-px bg-[#AB7A51]" initial={{ width: 24 }} whileHover={{ width: 48 }} transition={{ duration: 0.3 }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
                  {/* PARTNERS CAROUSEL */}
      <PartnerCarousel />
      {/* CONTACT CTA - Vous avez un projet ? */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <Reveal variants={scaleReveal} className="relative h-72 lg:h-auto min-h-[280px]">
            <Image src="/images/entree-01.jpg" alt="Entrée principale" fill className="object-cover" />
          </Reveal>
          <Reveal variants={slideRight} className="bg-[#C49572]/10 p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">Vous avez un projet ?</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl font-light text-stone-900 mb-5 leading-tight">
              Parlons-en dès maintenant.
            </h2>
            <p className="text-stone-600 text-[13px] leading-relaxed mb-8">
              Contactez notre équipe commerciale pour une présentation personnalisée, un plan ou une simulation de financement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#AB7A51] hover:bg-[#966840] text-white text-[12px] font-semibold tracking-widest uppercase px-7 py-4 transition-colors duration-300">
              Demander un Devis <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>


    </>
  );
}

// ── VIDEO SECTION ── separate component to isolate client refs
function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      {/* Architectural top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-[#AB7A51] origin-left z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Video — autoplay muted loop */}
      <div className="relative h-[85vh] min-h-[600px] md:min-h-[680px] overflow-hidden">
        <motion.video
          ref={videoRef}
          src="/bam-showreel.mp4"
          poster="/images/facade-principale.png"
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          initial={{ scale: 1.06, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end px-8 md:px-16 pb-14 pointer-events-none">
          <div className="flex items-end justify-between w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3">Showreel</p>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-4xl md:text-6xl font-light text-white leading-tight max-w-xl"
              >
                BAM Immobilière<br />
                <em className="not-italic text-[#C49572]">en mouvement.</em>
              </h2>
            </motion.div>
          </div>
          </div>
        </div>

      {/* Bottom architectural rule */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AB7A51]/30 origin-right z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
