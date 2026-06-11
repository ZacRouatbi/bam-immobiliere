"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Ruler, TrendingUp, Briefcase, Truck, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import { slideLeft, slideRight, staggerContainer, cardLift, lineGrow, fadeUp } from "@/lib/motion";

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

export default function ServicesPage() {
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
          <Image src="/images/image-projet-02.png" alt="Services" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-14 w-full">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3"
          >
            Ce que nous faisons
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-5xl md:text-7xl font-light text-white"
          >
            Nos Services
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

      {/* ── SINGLE CTA — the only "Demander un devis" on the site ── */}
      <section className="py-28 bg-[#0F0C42] relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * (100 / 9)}%` }} />
          ))}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${(i + 1) * 25}%` }} />
          ))}
        </div>

        {/* Animated diagonal accent */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <Image src="/images/facade-principale.png" alt="" fill className="object-cover" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variants={slideLeft}>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-5">Démarrons Ensemble</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
                Votre projet mérite<br />
                <em className="not-italic text-[#C49572]">une expertise unique.</em>
              </h2>
              <p className="text-white/50 text-[13px] leading-relaxed">
                Partagez votre projet avec nos équipes. Nous vous ferons parvenir un devis détaillé et personnalisé dans les meilleurs délais.
              </p>
            </Reveal>

            <Reveal variants={slideRight}>
              <div className="bg-white p-10">
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-2xl font-light text-stone-900 mb-6">Demandez votre devis</p>
                <div className="space-y-4 mb-6">
                  {[
                    { label: "Votre nom", placeholder: "Nom Prénom" },
                    { label: "Email", placeholder: "votre@email.com" },
                    { label: "Téléphone", placeholder: "+216 XX XXX XXX" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">{f.label}</label>
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        className="w-full border border-stone-200 bg-stone-50 px-4 py-3 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#AB7A51] transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Votre projet</label>
                    <textarea
                      rows={3}
                      placeholder="Décrivez brièvement votre projet..."
                      className="w-full border border-stone-200 bg-stone-50 px-4 py-3 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#AB7A51] transition-colors resize-none"
                    />
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 bg-[#AB7A51] hover:bg-[#966840] text-white text-[12px] font-semibold tracking-widest uppercase px-6 py-4 transition-colors duration-300 w-full"
                >
                  Envoyer ma demande <ArrowRight size={14} />
                </Link>
                <p className="text-stone-400 text-[11px] text-center mt-4">Réponse sous 24–48h ouvrées</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
