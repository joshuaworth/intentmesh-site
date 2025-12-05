"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/pullsheet", label: "Pullsheet" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);
  const isActive = (href: string) => (pathname === href ? "text-white" : "text-slate-200");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "backdrop-blur-xl bg-slate-950/80 border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="container-outer flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.35em] uppercase text-white" aria-label="IntentMesh Home">
          IntentMesh
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`hover:text-white transition-colors ${isActive(link.href)}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/pullsheet" className="hidden text-xs uppercase tracking-[0.25em] text-slate-200 hover:text-white lg:inline-flex">
            Pullsheet
          </Link>
          <Link
            href="mailto:support@intentmesh.systems?subject=Pullsheet%20Closed%20Beta%20Request&body=Name:%0ACompany:%0AEmail:%0APlatform:%20iOS%20TestFlight%20%2F%20Android%20Play%20Store%20%2F%20Both%0AUse%20case:%0A"
            className="jelly-pill hidden text-xs uppercase tracking-[0.25em] lg:inline-flex px-5 py-2"
          >
            Request Beta
          </Link>
          <Link href="/contact" className="hidden text-xs uppercase tracking-[0.25em] text-slate-200 hover:text-white lg:inline-flex">
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <span className="text-sm">{mobileOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur lg:hidden">
          <div className="container-outer flex flex-col gap-2 py-4 text-sm font-medium text-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 hover:bg-white/5 ${isActive(link.href)}`}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:support@intentmesh.systems?subject=Pullsheet%20Closed%20Beta%20Request&body=Name:%0ACompany:%0AEmail:%0APlatform:%20iOS%20TestFlight%20%2F%20Android%20Play%20Store%20%2F%20Both%0AUse%20case:%0A"
              className="jelly-pill inline-flex w-full justify-center px-4 py-2 text-xs uppercase tracking-[0.2em]"
              onClick={closeMobile}
            >
              Request Beta
            </Link>
            <Link
              href="/contact"
              className="jelly-pill inline-flex w-full justify-center px-4 py-2 text-xs uppercase tracking-[0.2em]"
              onClick={closeMobile}
            >
              Let’s talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}





