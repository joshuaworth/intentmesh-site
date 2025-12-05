"use client";

import Link from "next/link";
import { highlightChips } from "@/data/intentmesh";

export function Hero() {
  return (
    <section id="top" className="container-outer pt-36 pb-16 text-white" aria-labelledby="hero-title">
      <div className="jelly-surface relative overflow-hidden px-8 py-12">
        <div className="glow-strand" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">IntentMesh</p>
        <h1 id="hero-title" className="mt-4 text-4xl font-headline tracking-tight md:text-6xl">
          Field intelligence for elevator service.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          Pullsheet makes crews faster, compliant, and confident. It runs offline, stays OEM-clean, and is tuned for real
          controllers. Built by Joshua Worth for regulated, high-stakes work.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://pullsheet.app"
            className="jelly-pill inline-flex items-center justify-center px-6 py-3 text-sm uppercase tracking-[0.2em]"
          >
            Try Pullsheet
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/40"
          >
            Talk to IntentMesh
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {highlightChips.map((chip) => (
            <span key={chip} className="highlight-chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

