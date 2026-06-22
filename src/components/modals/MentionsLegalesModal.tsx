"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Scale, FileText } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MentionsLegalesModal({ open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark overlay */}
          <motion.div
            ref={overlayRef}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header with icon */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#AB7A51]/10 rounded-xl flex items-center justify-center">
                  <Scale className="w-5 h-5 text-[#AB7A51]" />
                </div>
                <h2 className="text-xl font-medium text-stone-900">Mentions Légales</h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors group"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-stone-400 group-hover:text-stone-700" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 pt-5 space-y-5 text-stone-600 text-sm leading-relaxed">
              {/* Éditeur du site section completely removed */}

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Directeur de la publication
                </h3>
                <p>
                  Le directeur de la publication est le représentant légal de la société BAM Immobilière.
                </p>
              </div>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Hébergement
                </h3>
                <p>
                  Le site est hébergé par <strong>OVH Tunisie</strong>, succursale tunisienne d’OVH, dont
                  le siège est situé à Immeuble Mezzanine, Rue du Lac d'Annecy, Les Berges du Lac,
                  1053 Tunis, Tunisie.
                </p>
              </div>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Propriété intellectuelle
                </h3>
                <p>
                  L’ensemble des contenus (textes, images, vidéos, logos) présents sur ce site est protégé
                  par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, distribution,
                  modification ou exploitation sans autorisation préalable est strictement interdite.
                </p>
              </div>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Protection des données personnelles
                </h3>
                <p>
                  Conformément à la <strong>loi tunisienne n°2004-63 du 27 juillet 2004</strong> relative
                  à la protection des données à caractère personnel, vous disposez d’un droit d’accès,
                  de rectification et d’opposition sur les données vous concernant. Pour l’exercer,
                  contactez-nous à l’adresse email : info@bamimmobiliere.com.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}