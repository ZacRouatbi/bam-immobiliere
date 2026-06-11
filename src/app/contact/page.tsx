"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { slideLeft, slideRight, staggerContainer, cardLift, lineGrow } from "@/lib/motion";

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().regex(/^[+\d\s\-()\\.]{8,}$/, "Numéro de téléphone invalide"),
  sujet: z.string().min(3, "Veuillez choisir un sujet"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
});
type ContactForm = z.infer<typeof contactSchema>;

const subjects = ["Construction", "Architecture", "Promotion Immobilière", "Gestion & Conseil", "Renseignement", "Autre"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log(data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  const inputBase = "w-full border border-stone-200 bg-stone-50 px-4 py-3 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#AB7A51] transition-colors";

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/images/entree-01.jpg" alt="Contact" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-14 w-full">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3">
            Nous contacter
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-5xl md:text-7xl font-light text-white">
            Parlons de<br />votre projet.
          </motion.h1>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* INFO */}
          <Reveal variants={slideLeft} className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">Nos Coordonnées</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-stone-900 mb-4 leading-tight">
                Notre équipe est à votre écoute.
              </h2>
              <motion.div variants={lineGrow} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-px bg-[#AB7A51] w-12 mb-5" />
              <p className="text-stone-400 text-[13px] leading-relaxed">
                Contactez-nous pour une présentation personnalisée, un devis ou toute information sur nos projets en cours.
              </p>
            </div>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                { Icon: MapPin, title: "Adresse",   text: "28 Rue du Lac, Les Berges du Lac\n1053 Tunis, Tunisie" },
                { Icon: Phone, title: "Téléphone",  text: "+216 71 96 80 20", href: "tel:+21671968020" },
                { Icon: Mail,  title: "Email",      text: "contact@bam.tn", href: "mailto:contact@bam.tn" },
                { Icon: Clock, title: "Horaires",   text: "Lun–Ven: 8h00–17h30" },
              ].map(({ Icon, title, text, href }, i) => (
                <motion.li key={title} variants={cardLift} custom={i} className="flex gap-4">
                  <div className="w-9 h-9 bg-[#AB7A51]/8 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#AB7A51]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-1">{title}</p>
                    {href ? (
                      <a href={href} className="text-[13px] text-stone-600 hover:text-[#AB7A51] transition-colors whitespace-pre-line">{text}</a>
                    ) : (
                      <p className="text-[13px] text-stone-600 whitespace-pre-line">{text}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Location visual */}
            <div className="relative h-44 overflow-hidden">
              <Image src="/images/exterieur-01.jpeg" alt="Localisation" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#0F0C42]/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-[#AB7A51] text-white text-[11px] font-semibold tracking-widest uppercase px-4 py-2">
                  Les Berges du Lac · Tunis
                </span>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal variants={slideRight} className="lg:col-span-3">
            <div className="bg-white border border-stone-100 p-10 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 size={52} className="text-[#AB7A51] mb-5" />
                  </motion.div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-3xl font-light text-stone-900 mb-3">Message envoyé !</h3>
                  <p className="text-stone-400 text-[13px] max-w-xs leading-relaxed mb-8">Notre équipe vous contactera dans les meilleurs délais.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[11px] font-semibold tracking-widest uppercase text-[#AB7A51] hover:text-stone-700 transition-colors border-b border-[#AB7A51] pb-0.5">
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="mb-7">
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-2xl font-light text-stone-900 mb-1">Envoyez-nous un message</p>
                    <p className="text-stone-400 text-[12px]">Tous les champs * sont obligatoires.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Nom *</label>
                      <input {...register("nom")} className={inputBase} placeholder="Votre nom" />
                      {errors.nom && <p className="text-red-400 text-[11px] mt-1">{errors.nom.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Prénom *</label>
                      <input {...register("prenom")} className={inputBase} placeholder="Votre prénom" />
                      {errors.prenom && <p className="text-red-400 text-[11px] mt-1">{errors.prenom.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Email *</label>
                      <input {...register("email")} type="email" className={inputBase} placeholder="votre@email.com" />
                      {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Téléphone *</label>
                      <input {...register("telephone")} type="tel" className={inputBase} placeholder="+216 XX XXX XXX" />
                      {errors.telephone && <p className="text-red-400 text-[11px] mt-1">{errors.telephone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Sujet *</label>
                    <select {...register("sujet")} className={`${inputBase} appearance-none cursor-pointer`}>
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.sujet && <p className="text-red-400 text-[11px] mt-1">{errors.sujet.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Message *</label>
                    <textarea {...register("message")} rows={5} className={inputBase} placeholder="Décrivez votre projet ou votre demande..." />
                    {errors.message && <p className="text-red-400 text-[11px] mt-1">{errors.message.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-3 bg-[#AB7A51] hover:bg-[#966840] disabled:opacity-70 text-white text-[12px] font-semibold tracking-widest uppercase py-4 transition-colors duration-300 cursor-pointer"
                  >
                    {loading ? (
                      <><Loader2 size={15} className="animate-spin" /> ENVOI EN COURS...</>
                    ) : (
                      "ENVOYER LE MESSAGE →"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
