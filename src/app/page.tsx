"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PartnerCarousel from "@/components/PartnerCarousel";
import { slideLeft, slideRight, scaleReveal, staggerContainer, cardLift, lineGrow, countUp } from "@/lib/motion";
import { Award, Target, Heart, Users } from "lucide-react";

const amenities = [
  { img: "/Construction.png", label: "Construction", desc: "Gros œuvre et travaux de construction avec des matériaux de haute qualité." },
  { img: "/Architecture.png", label: "Architecture", desc: "Conception architecturale sur mesure pour des espaces uniques et fonctionnels." },
  { img: "/Promotion immobiliére.png", label: "Promotion Immobilière", desc: "Promotion et vente de biens immobiliers neufs et résidentiels." },
  { img: "/Gestion et conseil.png", label: "Gestion & Conseil", desc: "Conseil en gestion immobilière et optimisation de votre patrimoine." },
  { img: "/Livraison clé a main.png", label: "Livraison Clé en Main", desc: "Livraison complète et prête à l'emménagement de vos espaces." },
];

const stats = [
  { n: "+150", l: "Projets Réalisés" },
  { n: "+20",  l: "Ans d'Expérience" },
  { n: "+300", l: "Clients Satisfaits" },
  { n: "+40",  l: "Partenaires" },
];

const values = [
  { icon: Award,  title: "Excellence",    desc: "Nous visons l'excellence dans chaque détail de nos réalisations, des matériaux choisis aux finitions livrées." },
  { icon: Heart,  title: "Intégrité",     desc: "Nous agissons avec transparence, honnêteté et respect envers nos clients, partenaires et équipes." },
  { icon: Target, title: "Engagement",   desc: "Nous nous engageons pleinement pour la réussite de vos projets, dans les délais et budgets convenus." },
  { icon: Users,  title: "Collaboration", desc: "Nous travaillons main dans la main avec nos clients pour construire des espaces qui leur ressemblent." },
];

const team = [
  { name: "Ahmed Ben Ali", role: "Directeur Général", img: "/team/ahmed.jpg" },
  { name: "Sarra Mansour", role: "Architecte", img: "/team/sarra.jpg" },
  { name: "Karim Trabelsi", role: "Chef de Projet", img: "/team/karim.jpg" },
  { name: "Leila Karray", role: "Responsable Commerciale", img: "/team/leila.jpg" },
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
            <span className="text-white text-[11px] tracking-[0.25em] uppercase font-medium">BAM Immobilière · Sousse</span>
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
            BAM Immobilière
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-6xl md:text-8xl font-light text-white leading-[0.92] mb-6 max-w-3xl"
          >
            Construire<br />
            <em className="not-italic text-[#C49572]">l&apos;avenir.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/65 text-base max-w-md leading-relaxed mb-10"
          >
            Promoteur immobilier de référence en Tunisie depuis plus de 20 ans. Qualité, transparence et excellence au cœur de chaque projet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projets-realises" className="inline-flex items-center gap-3 bg-[#AB7A51] hover:bg-[#966840] text-white text-[12px] font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-300">
              Nos Projets <ArrowRight size={14} />
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

      {/* ── MISSION ── */}
      <section className="py-28 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal variants={slideLeft}>
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">Notre Mission</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900 leading-tight mb-5">
              Créer de la valeur durable<br />à travers des projets bien conçus et bien réalisés.
            </h2>
            <motion.div variants={lineGrow} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-px bg-[#AB7A51] w-16 mb-7" />
            <p className="text-stone-500 leading-relaxed mb-5">
              Fondée il y a plus de 20 ans, BAM Immobilière s&apos;est imposée comme un acteur incontournable de la promotion immobilière en Tunisie. Notre mission est de concevoir et construire des espaces qui répondent aux besoins d&apos;aujourd&apos;hui tout en anticipant ceux de demain.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              Chaque projet que nous réalisons est le fruit d&apos;une collaboration étroite entre nos équipes d&apos;experts, nos partenaires et nos clients, dans un esprit de rigueur, d&apos;innovation et de respect des délais.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-stone-100">
              {["+150 projets", "+20 ans", "+300 clients", "+40 partenaires"].map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-[#AB7A51]">{s.split(" ")[0]}</p>
                  <p className="text-stone-400 text-[11px] uppercase tracking-widest">{s.split(" ").slice(1).join(" ")}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal variants={slideRight} className="relative h-[500px]">
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/images/rendu-04.png" alt="Vision" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: -24, y: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-0 bg-white shadow-xl p-8 w-56 z-10"
            >
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-stone-900 mb-2">Depuis 2004</p>
              <p className="text-stone-500 text-[12px] leading-snug">Construire avec passion et expertise</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── VIDEO SHOWREEL ── */}
      <section className="relative bg-stone-50 overflow-hidden">
        <VideoSection />
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Ce qui nous guide</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900">Nos Valeurs</h2>
            </Reveal>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={cardLift}
                  custom={i}
                  className="bg-white p-8 group hover:shadow-lg transition-shadow duration-300 cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-[#AB7A51]/8 flex items-center justify-center mb-6 group-hover:bg-[#AB7A51] transition-colors duration-300"
                  >
                    <Icon size={20} className="text-[#AB7A51] group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-xl font-medium text-stone-900 mb-3">{v.title}</h3>
                  <p className="text-stone-400 text-[13px] leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {amenities.slice(0, 3).map((a, i) => (
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
                    className="absolute top-0 left-0 right-0 h-0.5 bg-[#4F9BFF] origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.12 + 0.2 }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#4F9BFF] text-[10px] uppercase tracking-widest font-semibold mb-1">{a.label}</p>
                  <p className="text-white text-sm leading-snug">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 md:w-2/3 md:mx-auto gap-4 mt-4"
          >
            {amenities.slice(3, 5).map((a, i) => (
              <motion.div
                key={a.label}
                variants={cardLift}
                custom={i + 3}
                className="group relative overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={a.img} alt={a.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-[#4F9BFF] origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (i + 3) * 0.12 + 0.2 }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#4F9BFF] text-[10px] uppercase tracking-widest font-semibold mb-1">{a.label}</p>
                  <p className="text-white text-sm leading-snug">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* PARTNERS CAROUSEL */}
      <PartnerCarousel />

      {/* CONTACT CTA - Vous avez un projet ? */}
      <section className="bg-white py-20">
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