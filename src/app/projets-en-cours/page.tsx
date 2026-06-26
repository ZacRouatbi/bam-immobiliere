"use client";
import { use } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import ApartmentTable from "@/components/ApartmentTable";

const residences: Record<string, string> = {
  "residence-radhia-4": "Residence Radhia 4",
};

const residenceDescriptions: Record<string, { title: string; text: string[]; amenities: string[] }> = {
  "residence-radhia-4": {
    title: "Résidence RADHIA 4: L'Art de Vivre en Haut Standing",
    text: [
      "La Résidence RADHIA 4 est un projet immobilier conçu pour offrir à ses résidents un cadre de vie moderne, confortable et sécurisé. Située au cœur du prestigieux quartier de Sahloul 4 à Sousse, cette résidence bénéficie d'un emplacement stratégique.",
      "Le projet se compose de trois blocs résidentiels : Bloc A, Bloc B et Bloc C, harmonieusement intégrés dans un environnement élégant et soigneusement aménagé.",
      "Pensée pour le bien-être de ses habitants, la résidence met à leur disposition des espaces communs de qualité, notamment :"
    ],
    amenities: [
      "Une piscine offrant un espace de détente et de loisirs.",
      "Une salle de sport moderne réservée aux résidents."
    ],
  },
};

export default function ResidenceProjectsPage({
  params,
}: {
  params: Promise<{ residence: string }>;
}) {
  const resolvedParams = use(params);
  const residenceName = residences[resolvedParams.residence] || "Résidence Radhia 4";
  const descriptionData = residenceDescriptions[resolvedParams.residence] || residenceDescriptions["residence-radhia-4"];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/top-view-02.jpg"
            alt="Projets en cours"
            className="w-full h-full object-cover object-center"
          />
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
            Projets en Cours
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            className="text-5xl md:text-7xl font-light text-white"
          >
            {residenceName}
          </motion.h1>
        </div>
      </section>
      
      {/* DESCRIPTION + INSTAGRAM STORY VIDEO */}
      <section className="py-20 bg-white">
        
        <div className="max-w-7xl mx-auto px-8">
          <h4 className="text-left text-2xl md:text-3xl font-light text-[#AB7A51] ">Résidence</h4>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
            {/* Left: finely printed description */}
            <div className="flex-1 max-w-2xl py-12">
              <Reveal>
                {/* Subtle accent line */}
                <div className="w-12 h-px bg-[#AB7A51] mb-6" />

                {/* Residence title */}
                <h2
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  className="text-3xl md:text-4xl font-light text-stone-900 mb-8 leading-tight"
                >
                  {descriptionData.title}
                </h2>

                {/* Paragraphs */}
                <div className="space-y-5 text-stone-600 text-base leading-relaxed">
                  {descriptionData.text.map((paragraph: string, i: number) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Bulleted amenities */}
                <ul className="mt-6 space-y-3 text-stone-700 text-base">
                  {descriptionData.amenities.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#AB7A51]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Closing statement */}
                <p className="mt-6 text-stone-500 text-sm italic leading-relaxed border-l-2 border-[#AB7A51] pl-4">
                  Une opportunité idéale pour habiter ou investir dans un
                  environnement alliant confort, modernité et emplacement
                  privilégié.
                </p>
              </Reveal>
            </div>

            {/* Right: Instagram-style video */}
            <div className="w-full md:w-[420px] flex-shrink-0 mx-auto md:mx-0">
              <div className="relative aspect-[9/16] w-full max-w-[480px] mx-auto overflow-hidden rounded-2xl shadow-2xl ring-1 ring-stone-100">
                {/* Decorative corners only */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#AB7A51] rounded-tl-2xl z-10" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#AB7A51] rounded-br-2xl z-10" />

                <video
                  src="/vidBam.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APARTMENT TABLE */}
      <ApartmentTable />
    </>
  );
}