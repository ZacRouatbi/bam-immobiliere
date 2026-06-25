"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/Reveal";

// Gallery images from public/gloria folder
const galleryImages = [
  { id: 2, src: "/Gloria/02.png", width: 320, height: 480 },
  { id: 3, src: "/Gloria/03.png", width: 400, height: 300 },
  { id: 4, src: "/Gloria/04.png", width: 280, height: 400 },
  { id: 5, src: "/Gloria/05.png", width: 350, height: 520 },
  { id: 6, src: "/Gloria/06.png", width: 300, height: 350 },
  { id: 7, src: "/Gloria/07.png", width: 380, height: 280 },
  { id: 8, src: "/Gloria/08.png", width: 260, height: 380 },
];

// Generate randomized images once outside component
const generateRandomizedImages = () => {
  const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
  return shuffled.map((img, index) => {
    let sizeClass = "";
    const sizeRoll = Math.random();
    if (sizeRoll < 0.3) {
      sizeClass = "col-span-2 row-span-2";
    } else if (sizeRoll < 0.6) {
      sizeClass = "col-span-2";
    } else if (sizeRoll < 0.8) {
      sizeClass = "row-span-2";
    }
    
    return {
      ...img,
      sizeClass,
      rotation: (Math.random() - 0.5) * 8,
      translateY: Math.random() * 30 - 15,
      translateX: Math.random() * 30 - 15,
      scale: 0.92 + Math.random() * 0.16,
      delay: index * 0.06,
    };
  });
};

// Pre-generate images
const defaultImages = generateRandomizedImages();

// Scroll animation components
const ScrollImage = ({ img, index }: { img: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: img.delay + 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.04,
        zIndex: 20,
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
      }}
      className={`
        relative overflow-hidden rounded-lg shadow-sm
        ${img.sizeClass}
      `}
      style={{
        transform: `rotate(${img.rotation}deg) translateY(${img.translateY}px) translateX(${img.translateX}px) scale(${img.scale})`,
      }}
    >
      <Image
        src={img.src}
        alt={`Gloria - Image ${img.id}`}
        fill
        className="object-cover transition-transform duration-700"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-3 right-3 text-white/0 hover:text-white/40 text-xs font-light tracking-widest transition-all duration-300">
        {String(img.id).padStart(2, '0')}
      </div>
    </motion.div>
  );
};

// Parallax Hero Component
const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
<Image 
           src="/Gloria/Gloria.png" 
           alt="Gloria" 
           fill 
           className="object-cover object-center" 
           priority
         />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#AB7A51] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-8 text-center"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#AB7A51] text-xs uppercase tracking-[0.4em] font-semibold mb-4"
        >
          Résidence d'Exception
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-wide"
        >
          Gloria
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/70 text-sm md:text-base uppercase tracking-[0.2em] mt-4 max-w-2xl mx-auto"
        >
          L'élégance intemporelle au cœur de la ville
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.2em]">Défilez</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 40] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/3 bg-[#AB7A51] absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const step = Math.max(1, Math.floor(value / 60));
      const timer = setInterval(() => {
        start += step;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.p 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        className="text-4xl md:text-5xl font-light text-[#AB7A51]"
      >
        {count}+
      </motion.p>
      <p className="text-stone-500 text-sm uppercase tracking-[0.2em] mt-1">{label}</p>
    </div>
  );
};

export default function GloriaPage() {
  const [images, setImages] = useState(defaultImages);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Regenerate on client for fresh layout
    setImages(generateRandomizedImages());
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen">
        <div className="h-screen bg-stone-100 animate-pulse" />
      </div>
    );
  }

  return (
    <>
      <ParallaxHero />

      {/* GALLERY - Editorial spread */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">
          <Reveal className="mb-16">
            <p className="text-[#AB7A51] text-[10px] uppercase tracking-[0.4em] font-semibold mb-3">
              Portfolio
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900">
              L'Art de la Résidence
            </h2>
            <p className="text-stone-500 text-sm md:text-base mt-3 max-w-2xl">
              Une sélection d'images capturant l'essence et l'élégance de la résidence Gloria
            </p>
          </Reveal>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
            {images.map((img, index) => (
              <ScrollImage key={img.id} img={img} index={index} />
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 pt-16"
          >
            <AnimatedCounter value={7} label="Espaces" />
            <AnimatedCounter value={12} label="Pièces" />
            <AnimatedCounter value={4} label="Chambres" />
            <AnimatedCounter value={3} label="Salles de Bain" />
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 text-center border-t border-stone-200 pt-16"
          >
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-2xl md:text-3xl font-light text-stone-600 max-w-3xl mx-auto leading-relaxed">
              "Chaque espace raconte une histoire d'élégance,<br />
              <span className="text-[#AB7A51]">où le luxe rencontre l'intemporel."</span>
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-[1px] bg-[#AB7A51] mx-auto mt-6"
            />
            <span className="block mt-4 text-stone-400 text-xs uppercase tracking-[0.3em]">Gloria</span>
          </motion.div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <motion.div 
                className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
<Image
                     src="/Gloria/Gloria.png"
                     alt="Gloria Résidence"
                     fill
                     className="object-cover"
                   />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              </motion.div>
            </Reveal>
            
            <Reveal>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-[#AB7A51] text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                  À Propos
                </p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
                  Résidence Gloria
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Un projet d'exception où l'architecture contemporaine dialogue avec 
                  l'élégance intemporelle. La résidence Gloria incarne le raffinement 
                  à travers des espaces pensés pour la lumière et le bien-être.
                </p>
                <motion.div 
                  className="flex flex-wrap gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <p className="text-[#AB7A51] text-xs uppercase tracking-[0.2em]">Statut</p>
                    <p className="text-stone-800 font-medium mt-1">Projet Réalisé</p>
                  </div>
                  <div>
                    <p className="text-[#AB7A51] text-xs uppercase tracking-[0.2em]">Localisation</p>
                    <p className="text-stone-800 font-medium mt-1">Centre-Ville</p>
                  </div>
                  <div>
                    <p className="text-[#AB7A51] text-xs uppercase tracking-[0.2em]">Année</p>
                    <p className="text-stone-800 font-medium mt-1">2024</p>
                  </div>
                </motion.div>

                
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER DECORATIVE */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-stone-900 py-12"
      >
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }} className="text-2xl text-white/60 font-light tracking-wider">
            Gloria
          </p>
          <div className="w-12 h-[1px] bg-[#AB7A51] mx-auto my-4" />
          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">L'élégance intemporelle</p>
        </div>
      </motion.div>
    </>
  );
}