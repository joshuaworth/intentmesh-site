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
        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
          <div className="space-y-2 text-sm text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-teal-200">Closed Beta</p>
              <ul className="mt-2 space-y-1">
                <li>• GPT-5.1 high reasoning included during beta (free now)</li>
                <li>• iOS TestFlight & Android Play Store</li>
                <li>• Limited seats; paid product at launch</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="mailto:support@intentmesh.systems?subject=Pullsheet%20Closed%20Beta%20Request&body=Name:%0ACompany:%0AEmail:%0APlatform:%20iOS%20TestFlight%20%2F%20Android%20Play%20Store%20%2F%20Both%0AUse%20case:%0A"
              className="jelly-pill inline-flex items-center justify-center px-6 py-3 text-sm uppercase tracking-[0.2em]"
            >
              Request closed beta access
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/40"
            >
              Contact
            </Link>
          </div>
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




