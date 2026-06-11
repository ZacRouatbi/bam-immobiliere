"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Target, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import { slideLeft, slideRight, staggerContainer, cardLift, lineGrow, fadeUp } from "@/lib/motion";

const team = [
  { name: "Anis Belhadj",     role: "Directeur Général",        img: "/images/hall-04.jpg" },
  { name: "Sonia Mansour",    role: "Directrice Architecture",   img: "/images/hall-05.jpg" },
  { name: "Karim Trabelsi",   role: "Chef de Projet Senior",     img: "/images/hall-06.jpg" },
  { name: "Leila Baccouche",  role: "Responsable Commerciale",   img: "/images/hall-02.jpg" },
];

const values = [
  { icon: Award,  title: "Excellence",    desc: "Nous visons l'excellence dans chaque détail de nos réalisations, des matériaux choisis aux finitions livrées." },
  { icon: Heart,  title: "Intégrité",     desc: "Nous agissons avec transparence, honnêteté et respect envers nos clients, partenaires et équipes." },
  { icon: Target, title: "Engagement",   desc: "Nous nous engageons pleinement pour la réussite de vos projets, dans les délais et budgets convenus." },
  { icon: Users,  title: "Collaboration", desc: "Nous travaillons main dans la main avec nos clients pour construire des espaces qui leur ressemblent." },
];

export default function AProposPage() {
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
          <Image src="/images/facade-01.jpg" alt="À Propos" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/30 to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-14 w-full">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3"
          >
            Notre Histoire
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-5xl md:text-7xl font-light text-white"
          >
            À Propos
          </motion.h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal variants={slideLeft}>
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">Notre Mission</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900 leading-tight mb-5">
              Créer de la valeur durable à travers des projets bien conçus et bien réalisés.
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
              <Image src="/images/image-projet-01.png" alt="Projet" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: -24, y: 24 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-0 bg-[#0F0C42] text-white p-8 w-56 z-10"
            >
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-[#AB7A51] mb-2">Depuis 2004</p>
              <p className="text-white/50 text-[12px] leading-snug">Construire avec passion et expertise</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-stone-50">
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

      {/* HALL INTERIORS SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <Reveal className="mb-12">
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Nos Réalisations</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900">Intérieurs d&apos;exception.</h2>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { img: "/images/appart-s2-02.jpg",   label: "Salon S+2" },
              { img: "/images/cuisine.jpeg",        label: "Cuisine équipée" },
              { img: "/images/appart-s1-vue02.jpg", label: "Vue panoramique" },
            ].map((item, i) => (
              <motion.div key={item.label} variants={cardLift} custom={i} className="group relative overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={item.img} alt={item.label} fill className="object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <p className="text-white text-sm font-medium">{item.label}</p>
                  </motion.div>
                  {/* Corner mark */}
                  <motion.div
                    className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#AB7A51] origin-top-right"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14">
            <Reveal>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Notre Équipe</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">
                Des femmes et des hommes<br />engagés à vos côtés.
              </h2>
            </Reveal>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((m, i) => (
              <motion.div key={m.name} variants={cardLift} custom={i} className="group">
                <div className="relative h-72 overflow-hidden mb-4">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={m.img} alt={m.name} fill className="object-cover" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Architectural corner brackets */}
                  <motion.div
                    className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#AB7A51]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#AB7A51]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                  />
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-xl font-medium text-stone-900">{m.name}</p>
                <p className="text-[#AB7A51] text-[12px] font-medium mt-0.5">{m.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F0C42] relative overflow-hidden">
        {/* Architectural grid lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * (100 / 7)}%` }} />
          ))}
        </div>
        <div className="relative max-w-2xl mx-auto px-8 text-center">
          <Reveal>
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Travaillons Ensemble</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-white mb-8">
              Votre projet mérite le meilleur.
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[#AB7A51] hover:bg-[#966840] text-white text-[12px] font-semibold tracking-widest uppercase px-10 py-4 transition-colors duration-300">
              Nous Contacter <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
