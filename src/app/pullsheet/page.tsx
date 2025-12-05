import Link from "next/link";
import type { Metadata } from "next";
import { highlightChips } from "@/data/intentmesh";
import { PullsheetSpotlight } from "@/components/marketing/PullsheetSpotlight";
import { CredibilityStrip } from "@/components/marketing/CredibilityStrip";
import { WhyIntentMesh } from "@/components/marketing/WhyIntentMesh";

export const metadata: Metadata = {
  title: "Pullsheet | IntentMesh",
  description:
    "Pullsheet is the offline-ready intent layer for elevator diagnostics—built by a working elevator mechanic for crews that need legal-clean, controller-specific guidance.",
  openGraph: {
    title: "Pullsheet | IntentMesh",
    description:
      "Offline-ready elevator diagnostics with annotated capture, AI reasoning, and compliance built in. Designed by active field techs.",
    url: "https://intentmesh.systems/pullsheet",
    images: ["/og-intentmesh.png"],
  },
  alternates: {
    canonical: "https://intentmesh.systems/pullsheet",
  },
};

export default function PullsheetPage() {
  return (
    <main className="text-white">
      <section className="container-outer pt-28 pb-16" aria-labelledby="pullsheet-hero-title">
        <div className="jelly-surface relative overflow-hidden px-8 py-12">
          <div className="glow-strand" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">Pullsheet</p>
          <h1 id="pullsheet-hero-title" className="mt-4 text-4xl font-headline tracking-tight md:text-5xl">
            AI that respects the work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Diagnose faster. Capture cleaner. Stay legal. Pullsheet runs offline, guides on real controllers, and turns field
            intelligence into a compounding asset for crews, supervisors, and owners.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Pilots with active mechanics already cut diagnostic time by double digits while keeping OEM material out of the
            AI loop.
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

      <PullsheetSpotlight />
      <WhyIntentMesh />
      <CredibilityStrip />

      <section className="container-outer pb-20 pt-10">
        <div className="jelly-surface px-8 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Founded by</p>
              <h3 className="mt-3 text-xl font-semibold">Joshua Worth</h3>
              <p className="mt-3 text-sm text-slate-200">
                Elevator constructor, founder, and the hand behind Pullsheet’s field-proof workflows.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Company</p>
              <h3 className="mt-3 text-xl font-semibold">Intent Mesh LLC</h3>
              <p className="mt-3 text-sm text-slate-200">
                AI systems that turn complexity into clarity—serving regulated, offline, safety-critical work.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="https://www.linkedin.com/in/joshuaiuec"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white/40"
              >
                Founder on LinkedIn
              </Link>
              <Link
                href="https://www.linkedin.com/company/intent-mesh-llc/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white/40"
              >
                Company on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

