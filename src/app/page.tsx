"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PartnerCarousel from "@/components/PartnerCarousel";
import AmenitiesCarousel from "@/components/AmenitiesCarousel";
import {
  slideLeft,
  slideRight,
  scaleReveal,
  staggerContainer,
  lineGrow,
  countUp as countUpVariant,
} from "@/lib/motion";
import { Award, Target, Heart, Users } from "lucide-react";

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

/* ─── Live count‑up component ─── */
function CountUpNumber({
  target,
  duration = 2.2,
  formatter = (val: number) => String(val),
}: {
  target: string;
  duration?: number;
  formatter?: (val: number) => string;
}) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  const numericTarget = parseInt(target.replace(/\D/g, ""), 10);
  const suffix = target.replace(/[0-9+]/g, "");

  const startCounting = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = Date.now();
    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      setCurrent(Math.floor(progress * numericTarget));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrent(numericTarget);
      }
    };
    requestAnimationFrame(step);
  }, [numericTarget, duration, started]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startCounting();
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [startCounting]);

  return (
    <p
      ref={ref}
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      className="text-4xl font-light text-[#AB7A51] mb-1"
    >
      {formatter(current)}
      {suffix}
    </p>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden"
      >
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src="/images/facade-principale.png"
            alt="Résidence Radhia IV"
            fill
            priority
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
            <span className="text-white text-[11px] tracking-[0.25em] uppercase font-medium">
              BAM Immobilière · Sousse
            </span>
          </div>
        </motion.div>

        {/* Hero text */}
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
            Promoteur immobilier de référence en Tunisie depuis plus de 20 ans.
            Qualité, transparence et excellence au cœur de chaque projet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projets-realises"
              className="inline-flex items-center gap-3 bg-[#AB7A51] hover:bg-[#966840] text-white text-[12px] font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-300"
            >
              Nos Projets <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/40 hover:border-white text-white text-[12px] font-semibold tracking-widest uppercase px-8 py-4 transition-colors duration-300"
            >
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
          <p
            className="text-white/40 text-[10px] tracking-[0.25em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </p>
        </motion.div>
      </section>

      {/* ── STATS (live count‑up) ── */}
      <section className="bg-white border-b border-stone-100">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              variants={countUpVariant}
              custom={i}
              className="px-8 py-4 text-center"
            >
              <CountUpNumber
                target={s.n}
                duration={2.2}
                formatter={(val) => `+${val}`}
              />
              <p className="text-stone-400 text-[11px] uppercase tracking-widest">
                {s.l}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── MISSION (duplicate numbers removed) ── */}
      <section className="py-28 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal variants={slideLeft}>
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">
              Notre Mission
            </p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-4xl md:text-5xl font-light text-stone-900 leading-tight mb-5"
            >
              Créer de la valeur durable<br />à travers des projets bien conçus
              et bien réalisés.
            </h2>
            <motion.div
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-px bg-[#AB7A51] w-16 mb-7"
            />
            <p className="text-stone-500 leading-relaxed mb-5">
              Fondée il y a plus de 20 ans, BAM Immobilière s&apos;est imposée
              comme un acteur incontournable de la promotion immobilière en
              Tunisie. Notre mission est de concevoir et construire des espaces
              qui répondent aux besoins d&apos;aujourd&apos;hui tout en
              anticipant ceux de demain.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              Chaque projet que nous réalisons est le fruit d&apos;une
              collaboration étroite entre nos équipes d&apos;experts, nos
              partenaires et nos clients, dans un esprit de rigueur,
              d&apos;innovation et de respect des délais.
            </p>
          </Reveal>

          <Reveal variants={slideRight} className="relative h-[500px]">
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/Homepg.jpg"
                alt="Vision"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: -24, y: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-0 bg-white shadow-xl p-8 w-56 z-10"
            >
              <p
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-3xl font-light text-stone-900 mb-2"
              >
                Depuis 2004
              </p>
              <p className="text-stone-500 text-[12px] leading-snug">
                Construire avec passion et expertise
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ── VIDEO SHOWREEL ── */}
      <section className="relative bg-stone-50 overflow-hidden">
        <VideoSection />
      </section>

      {/* ── VALUES (cards with traveling border light) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Reveal>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">
                Ce qui nous guide
              </p>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-4xl md:text-5xl font-light text-stone-900"
              >
                Nos Valeurs
              </h2>
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
                  variants={staggerContainer}
                  custom={i}
                  className="group relative rounded-xl p-[2px]"
                  whileHover={{ y: -6 }}
                >
                  {/* Traveling border light */}
                  <motion.div
                    className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      rotate: 360,
                    }}
                    transition={{
                      rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent, #AB7A51, transparent)",
                    }}
                  />

                  <div className="relative bg-white group-hover:bg-[#AB7A51] transition-colors duration-300 rounded-xl p-8 h-full">
                    {/* Icon container */}
                    <motion.div
                      variants={{
                        hidden: { scale: 0, rotate: -30 },
                        visible: {
                          scale: 1,
                          rotate: 0,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 14,
                            delay: i * 0.08,
                          },
                        },
                      }}
                      className="w-12 h-12 bg-[#AB7A51]/8 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300"
                    >
                      <Icon
                        size={20}
                        className="text-[#AB7A51] group-hover:text-[#AB7A51] transition-colors duration-300"
                      />
                    </motion.div>

                    <h3
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                      className="text-xl font-medium text-stone-900 mb-3 group-hover:text-white transition-colors duration-300"
                    >
                      {v.title}
                    </h3>
                    <p className="text-stone-400 text-[13px] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
{/* ── AMENITIES CAROUSEL ── */}
       <AmenitiesCarousel />

      {/* PARTNERS CAROUSEL */}
      <PartnerCarousel />

      {/* CONTACT CTA */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <Reveal
            variants={scaleReveal}
            className="relative h-72 lg:h-auto min-h-[280px]"
          >
            <Image
              src="/images/entree-01.jpg"
              alt="Entrée principale"
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal
            variants={slideRight}
            className="bg-[#C49572]/10 p-12 lg:p-16 flex flex-col justify-center"
          >
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">
              Vous avez un projet ?
            </p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-4xl font-light text-stone-900 mb-5 leading-tight"
            >
              Parlons-en dès maintenant.
            </h2>
            <p className="text-stone-600 text-[13px] leading-relaxed mb-8">
              Contactez notre équipe commerciale pour une présentation
              personnalisée, un plan ou une simulation de financement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#AB7A51] hover:bg-[#966840] text-white text-[12px] font-semibold tracking-widest uppercase px-7 py-4 transition-colors duration-300"
            >
              Demander un Devis <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ─── VIDEO SECTION (unchanged) ─── */
function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-[#AB7A51] origin-left z-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />

        <div className="absolute inset-0 flex items-end px-8 md:px-16 pb-14 pointer-events-none">
          <div className="flex items-end justify-between w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3">
                Showreel
              </p>
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