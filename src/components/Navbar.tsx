"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/projets-realises", label: "Projets Réalisés" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent py-7"
          : "bg-white/96 backdrop-blur-md border-b border-stone-100/80 py-4 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo_bam.png"
            alt="BAM Immobilière"
            width={110}
            height={55}
            className={`object-contain h-12 w-auto transition-all duration-500 ${transparent ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 group ${
                transparent
                  ? pathname === l.href ? "text-[#AB7A51]" : "text-white/75 hover:text-white"
                  : pathname === l.href ? "text-[#AB7A51]" : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {l.label}
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#AB7A51] transition-all duration-300 ${pathname === l.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${transparent ? "text-white" : "text-stone-700"}`}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-stone-100 px-8 py-7 flex flex-col gap-5"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-medium ${pathname === l.href ? "text-[#AB7A51]" : "text-stone-700"}`}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
