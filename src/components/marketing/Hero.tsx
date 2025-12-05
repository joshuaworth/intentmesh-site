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
          Pullsheet. Built for real elevator work.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          Diagnose faster. Capture cleaner. Work offline. Pullsheet is the flagship IntentMesh product,
          designed by a working elevator mechanic and tuned for crews that can’t afford hallucinations or dead zones.
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

