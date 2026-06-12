"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { slideLeft, slideRight, lineGrow } from "@/lib/motion";
import { z } from "zod";

const contactSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  prenom: z.string().min(1, "Le prénom est requis"),
  email: z.string().min(1, "L'email est requis").email("Format d'email invalide"),
  telephone: z.string().min(1, "Le téléphone est requis").regex(/^\+?\d{8,15}$/, "Format de téléphone invalide"),
  sujet: z.string().min(1, "Le sujet est requis"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_ID = "service_xhdr69t";
const TEMPLATE_ID = "template_vj3xcc6";
const PUBLIC_KEY = "FMchiuCK5XzP93UCV";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = contactSchema.safeParse(formData);
    
if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    const templateParams = {
      name: `${formData.nom} ${formData.prenom}`,
      email: formData.email,
      telephone: formData.telephone,
      sujet: formData.sujet,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSubmitted(true);
      setFormData({ nom: "", prenom: "", email: "", telephone: "", sujet: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase = "w-full border border-stone-200 bg-stone-50 px-4 py-3 text-[13px] text-stone-900 placeholder-stone-300 focus:outline-none focus:border-[#AB7A51] transition-colors";
  const inputError = "border-red-500 focus:border-red-500";

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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                { Icon: MapPin, title: "Adresse",   text: "Sahloul 4, Sousse" },
                { Icon: Phone, title: "Téléphone",  text: "+216 24 205 201", href: "tel:+21624205201" },
                { Icon: Mail,  title: "Email",      text: "info@bamimmobiliere.com", href: "mailto:info@bamimmobiliere.com" },
                { Icon: Clock, title: "Horaires",   text: "Lun–Ven: 8h00–17h30" },
              ].map(({ Icon, title, text, href }, i) => (
                <motion.li key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
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
                  Sahloul 4 · Sousse
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
                <form onSubmit={sendEmail} className="space-y-5">
                  <div className="mb-7">
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-2xl font-light text-stone-900 mb-1">Envoyez-nous un message</p>
                    <p className="text-stone-400 text-[12px]">Tous les champs * sont obligatoires.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Nom *</label>
                      <input name="nom" value={formData.nom} onChange={handleChange} required className={`${inputBase} ${errors.nom ? inputError : ""}`} placeholder="Votre nom" />
                      {errors.nom && <p className="text-red-500 text-[11px] mt-1">{errors.nom}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Prénom *</label>
                      <input name="prenom" value={formData.prenom} onChange={handleChange} required className={`${inputBase} ${errors.prenom ? inputError : ""}`} placeholder="Votre prénom" />
                      {errors.prenom && <p className="text-red-500 text-[11px] mt-1">{errors.prenom}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Email *</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} required className={`${inputBase} ${errors.email ? inputError : ""}`} placeholder="votre@email.com" />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Téléphone *</label>
                      <input name="telephone" type="tel" value={formData.telephone} onChange={handleChange} required className={`${inputBase} ${errors.telephone ? inputError : ""}`} placeholder="+216 XX XXX XXX" />
                      {errors.telephone && <p className="text-red-500 text-[11px] mt-1">{errors.telephone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Sujet *</label>
                    <input name="sujet" value={formData.sujet} onChange={handleChange} required className={`${inputBase} ${errors.sujet ? inputError : ""}`} placeholder="Sujet de votre message" />
                    {errors.sujet && <p className="text-red-500 text-[11px] mt-1">{errors.sujet}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-widest text-stone-400 mb-2">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required className={`${inputBase} ${errors.message ? inputError : ""}`} placeholder="Décrivez votre projet ou votre demande..." />
                    {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
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