"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const amenities = [
  { img: "/Construction.png", label: "Construction", desc: "Gros œuvre et travaux de construction avec des matériaux de haute qualité." },
  { img: "/Architecture.png", label: "Architecture", desc: "Conception architecturale sur mesure pour des espaces uniques et fonctionnels." },
  { img: "/Promotion immobiliére.png", label: "Promotion Immobilière", desc: "Promotion et vente de biens immobiliers neufs et résidentiels." },
  { img: "/Gestion et conseil.png", label: "Gestion & Conseil", desc: "Conseil en gestion immobilière et optimisation de votre patrimoine." },
  { img: "/Livraison clé a main.png", label: "Livraison Clé en Main", desc: "Livraison complète et prête à l'emménagement de vos espaces." },
];

export default function AmenitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [direction, setDirection] = useState(0);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(amenities.length / itemsPerView);
  const maxIndex = Math.max(0, totalSlides - 1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Get visible items for current slide
  const getVisibleItems = () => {
    const start = currentIndex * itemsPerView;
    const end = start + itemsPerView;
    return amenities.slice(start, end);
  };

  const visibleItems = getVisibleItems();

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  // Individual card variants
  const cardVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5,
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  return (
    <section className="py-28 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header with title and arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14">
          <div>
            <p className="text-[#AB7A51] text-[11px] uppercase tracking-[0.3em] font-semibold mb-4">
              Services & Équipements
            </p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-4xl md:text-5xl font-light text-stone-900 leading-tight max-w-xl"
            >
              Un art de vivre<br />
              <em className="not-italic text-[#C49572]">
                pensé dans ses moindres détails.
              </em>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-6 sm:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-stone-300 hover:border-[#AB7A51] hover:bg-[#AB7A51] hover:text-white transition-all duration-300 flex items-center justify-center text-stone-600"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-stone-300 hover:border-[#AB7A51] hover:bg-[#AB7A51] hover:text-white transition-all duration-300 flex items-center justify-center text-stone-600"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
            >
              {visibleItems.map((a, index) => (
                <motion.div
                  key={`${currentIndex}-${a.label}`}
                  custom={direction}
                  variants={cardVariants}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={a.img}
                      alt={a.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#4F9BFF]" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[#4F9BFF] text-[10px] uppercase tracking-widest font-semibold mb-1">
                      {a.label}
                    </p>
                    <p className="text-white text-sm leading-snug">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-8 bg-[#AB7A51]' 
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}