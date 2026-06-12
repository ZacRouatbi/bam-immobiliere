"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Award, Target, Heart, Building2, Ruler, TrendingUp, Briefcase, Truck, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import { slideLeft, slideRight, staggerContainer, cardLift, lineGrow } from "@/lib/motion";

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

const services = [
  {
    icon: Building2,
    title: "Construction",
    desc: "Nous réalisons des ouvrages de qualité, du résidentiel au commercial et industriel. Chaque chantier est conduit avec rigueur, en respectant les délais et les standards les plus élevés.",
    features: ["Bâtiments résidentiels", "Immeubles commerciaux", "Complexes industriels", "Rénovation & extension"],
    img: "/images/image-projet-01.png",
  },
  {
    icon: Ruler,
    title: "Architecture",
    desc: "Notre bureau d'architecture conçoit des espaces modernes, fonctionnels et esthétiques, en parfaite adéquation avec les attentes de nos clients et les contraintes du site.",
    features: ["Plans architecturaux", "Modélisation 3D", "Études de faisabilité", "Design d'intérieur"],
    img: "/images/rendu-03.png",
  },
  {
    icon: TrendingUp,
    title: "Promotion Immobilière",
    desc: "Nous développons des projets immobiliers à forte valeur ajoutée, en assurant leur montage financier, leur commercialisation et leur livraison dans les meilleures conditions.",
    features: ["Montage de projets", "Commercialisation", "Vente sur plan (VEFA)", "Suivi de performance"],
    img: "/images/facade-principale.png",
  },
  {
    icon: Briefcase,
    title: "Gestion & Conseil",
    desc: "Notre équipe de consultants vous accompagne dans toutes les décisions stratégiques liées à votre patrimoine immobilier, de l'acquisition à la valorisation.",
    features: ["Conseil en investissement", "Gestion locative", "Expertise immobilière", "Due diligence"],
    img: "/images/top-view-01.jpg",
  },
  {
    icon: Truck,
    title: "Livraison Clé en Main",
    desc: "Nous prenons en charge l'intégralité de votre projet, de la première esquisse à la remise des clés, pour vous offrir une expérience sans stress.",
    features: ["Coordination complète", "Suivi budgétaire", "Contrôle qualité", "Garantie décennale"],
    img: "/images/entree-02.jpg",
  },
  {
    icon: Wrench,
    title: "Maintenance & SAV",
    desc: "Notre service après-vente assure le suivi et la maintenance de vos ouvrages pour garantir leur pérennité et votre tranquillité d'esprit sur le long terme.",
    features: ["Maintenance préventive", "Interventions rapides", "Suivi post-livraison", "Garantie biennale"],
    img: "/images/sport-01.jpg",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* PAGE HERO - from Services page */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/images/image-projet-02.png" alt="À Propos" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
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

      {/* INTRO */}
      <section className="py-20 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <Reveal>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl md:text-4xl font-light text-stone-900 mb-5">
              BAM Immobilière intervient à chaque étape du cycle de vie de votre projet.
            </h2>
            <motion.div variants={lineGrow} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-px bg-[#AB7A51] w-16 mx-auto mb-6" />
            <p className="text-stone-500 leading-relaxed">
              Nous concevons des espaces de vie et de travail, et assurons leur réalisation avec l&apos;exigence qui nous caractérise depuis plus de 20 ans.
            </p>
          </Reveal>
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
              <Image src="/images/sport-01.jpg" alt="Équipe" fill className="object-cover" />
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

      {/* SERVICES LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 space-y-28">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={s.title} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <Reveal
                  variants={isEven ? slideLeft : slideRight}
                  className={`relative h-80 overflow-hidden ${!isEven ? "lg:order-2" : ""}`}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.06 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                  </motion.div>
                  {/* Icon badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute top-4 left-4 bg-[#AB7A51] text-white p-3 z-10"
                  >
                    <Icon size={20} />
                  </motion.div>
                  {/* Corner lines */}
                  <motion.div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/50" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
                  <motion.div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/50" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
                </Reveal>

                <Reveal
                  variants={isEven ? slideRight : slideLeft}
                  className={!isEven ? "lg:order-1" : ""}
                >
                  <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl md:text-4xl font-light text-stone-900 mb-3">{s.title}</h2>
                  <motion.div variants={lineGrow} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-px bg-[#AB7A51] w-12 mb-6" />
                  <p className="text-stone-500 leading-relaxed mb-8">{s.desc}</p>
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-3 mb-8"
                  >
                    {s.features.map((f, fi) => (
                      <motion.li key={f} variants={cardLift} custom={fi} className="flex items-center gap-2.5 text-[13px] text-stone-600">
                        <span className="w-1 h-1 bg-[#AB7A51] flex-shrink-0" />
                        {f}
                      </motion.li>
                    ))}
                  </motion.ul>
                </Reveal>
              </div>
            );
          })}
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

     
    </>
  );
}


