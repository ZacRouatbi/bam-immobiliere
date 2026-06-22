"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Lock, Eye, FileText } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ConfidentialiteModal({ open, onClose }: Props) {
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
                  <Shield className="w-5 h-5 text-[#AB7A51]" />
                </div>
                <h2 className="text-xl font-medium text-stone-900">Politique de Confidentialité</h2>
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
              <p>
                BAM Immobilière s’engage à protéger la confidentialité des informations personnelles
                recueillies sur son site www.bamimmobiliere.com.
              </p>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Données collectées
                </h3>
                <p>
                  Nous collectons uniquement les données nécessaires au traitement de vos demandes :
                  nom, prénom, email, numéro de téléphone et tout message que vous nous adressez via
                  les formulaires de contact.
                </p>
              </div>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Finalité du traitement
                </h3>
                <p>
                  Ces informations sont utilisées exclusivement pour répondre à vos questions, vous
                  fournir des devis, ou vous informer de nos projets. Elles ne sont jamais vendues,
                  louées ou échangées avec des tiers.
                </p>
              </div>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Base légale
                </h3>
                <p>
                  Le traitement de vos données est fondé sur votre consentement explicite (lors de
                  l’envoi d’un formulaire) et sur l’intérêt légitime de BAM Immobilière à répondre
                  aux demandes de ses prospects et clients.
                </p>
              </div>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Durée de conservation
                </h3>
                <p>
                  Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier
                  contact. Vous pouvez demander leur suppression à tout moment.
                </p>
              </div>

              <div>
                <h3 className="text-[#AB7A51] font-semibold text-base mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Vos droits
                </h3>
                <p>
                  Conformément à la législation tunisienne, vous disposez d’un droit d’accès, de
                  rectification, d’opposition et de suppression des données vous concernant. Pour
                  l’exercer, écrivez à : info@bamimmobiliere.com.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}