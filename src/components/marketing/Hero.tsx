"use client";

import Link from "next/link";
import { highlightChips } from "@/data/intentmesh";

export function Hero() {
  return (
    <section id="top" className="container-outer pt-36 pb-16 text-white" aria-labelledby="hero-title">
      <div className="jelly-surface relative overflow-hidden px-8 py-12">
        <div className="glow-strand" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.35em] accent-label">IntentMesh</p>
        <h1 id="hero-title" className="mt-4 text-4xl font-headline tracking-tight md:text-6xl">
          Pullsheet. Built for real elevator work.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-100">
          Pullsheet was designed by a working elevator mechanic so crews can diagnose faster, stay compliant, and work offline
          without losing a beat.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link
            href="https://pullsheet.app"
            className="jelly-pill inline-flex items-center justify-center px-6 py-3 text-sm uppercase tracking-[0.2em]"
          >
            Try Pullsheet
          </Link>
          <Link
            href="#contact"
            className="accent-pill-outline inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em]"
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

