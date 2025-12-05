import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder | IntentMesh",
  description:
    "Joshua Worth, founder of IntentMesh. Building Pullsheet and field intelligence systems for regulated, offline work.",
  openGraph: {
    title: "Founder | IntentMesh",
    description:
      "Meet Joshua Worth, founder of IntentMesh and builder of Pullsheet, offline-first AI for elevator crews and regulated trades.",
    url: "https://intentmesh.systems/founder",
    images: ["/og-intentmesh.png"],
  },
  alternates: {
    canonical: "https://intentmesh.systems/founder",
  },
};

export default function FounderPage() {
  return (
    <main className="text-white">
      <section className="container-outer pt-28 pb-12" aria-labelledby="founder-hero-title">
        <div className="jelly-surface grid gap-10 px-8 py-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Founder</p>
            <h1 id="founder-hero-title" className="mt-3 text-4xl font-headline tracking-tight md:text-5xl">
              Joshua Worth
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-200">
            Founder of IntentMesh and builder of Pullsheet. The goal: keep crews fast, compliant, and confident—offline, on
            real controllers, with AI that respects the work.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">
              Joshua leads IntentMesh LLC, an AI systems shop focused on regulated, high-stakes environments. The mission:
            turn complexity into clarity for the built world, starting with elevator service and training.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="https://x.com/joshuaworth"
                className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 font-semibold uppercase tracking-[0.18em] hover:border-white/40"
              >
                X / joshuaworth
              </Link>
              <Link
                href="https://www.linkedin.com/in/joshuaiuec"
                className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 font-semibold uppercase tracking-[0.18em] hover:border-white/40"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.linkedin.com/company/intent-mesh-llc/"
                className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 font-semibold uppercase tracking-[0.18em] hover:border-white/40"
              >
                Company
              </Link>
              <Link
                href="/pullsheet"
                className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 font-semibold uppercase tracking-[0.18em] hover:border-white/40"
              >
                Pullsheet
              </Link>
            <Link
              href="/contact"
              className="jelly-pill px-4 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Talk to Joshua
            </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-400/20 to-cyan-400/15 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/joshua-worth.jpg"
                alt="Joshua Worth, founder of IntentMesh"
                width={1200}
                height={1600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-outer pb-20">
        <div className="jelly-surface px-8 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Field credibility</p>
              <h3 className="mt-3 text-xl font-semibold">Built on jobsites</h3>
              <p className="mt-3 text-sm text-slate-200">
                Active elevator constructor experience shapes Pullsheet’s offline flows, controller training, and
                compliance rails.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-teal-200">AI with guardrails</p>
              <h3 className="mt-3 text-xl font-semibold">No hallucinated manuals</h3>
              <p className="mt-3 text-sm text-slate-200">
                Proprietary/OEM material stays out. The system steers to safe guidance, keeping crews compliant.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Compounding data</p>
              <h3 className="mt-3 text-xl font-semibold">Intent layer across hardware</h3>
              <p className="mt-3 text-sm text-slate-200">
                Every field interaction enriches the mesh—feeding training, diagnostics, and ops for the next job.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container-outer pb-20">
        <div className="jelly-surface px-8 py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Selected work</p>
          <h2 className="mt-3 text-3xl font-headline">Intent-driven products</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-semibold">Pullsheet</h3>
              <p className="mt-2 text-sm text-slate-200">
                Offline-first field intelligence for elevator mechanics. Guides real controllers, keeps OEM content out, and
                captures annotated logbooks.
              </p>
              <Link href="/pullsheet" className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                View page →
              </Link>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-semibold">LaunchConstellation</h3>
              <p className="mt-2 text-sm text-slate-200">
                Open-source AI launch pipeline with approval gates, multi-agent orchestration, and GitHub PR safety rails.
              </p>
              <Link
                href="https://github.com/joshuaworth/launch-constellation"
                className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-teal-200"
              >
                GitHub →
              </Link>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xl font-semibold">Pullsheet Mobile</h3>
              <p className="mt-2 text-sm text-slate-200">
                Mobile pilots for crews in the field with safety rails, offline sync, and Jelly Glass UI refinements from the
                pullsheetintent project.
              </p>
              <Link
                href="https://github.com/joshuaworth/pullsheetintent"
                className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-teal-200"
              >
                Repo →
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

