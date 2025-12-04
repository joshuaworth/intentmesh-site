"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#why", label: "Why" },
  { href: "#pullsheet", label: "Pullsheet" },
  { href: "#labs", label: "Labs" },
  { href: "#principle", label: "Principle" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "backdrop-blur-xl bg-slate-950/80 border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="container-outer flex items-center justify-between py-4">
        <Link
          href="#top"
          className="text-lg font-semibold tracking-[0.35em] uppercase text-white"
          aria-label="IntentMesh Home"
        >
          IntentMesh
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="jelly-pill hidden text-xs uppercase tracking-[0.25em] lg:inline-flex px-5 py-2"
        >
          Let’s talk
        </Link>
      </div>
    </header>
  );
}


