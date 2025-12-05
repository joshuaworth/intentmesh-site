import Link from "next/link";
import type { Metadata } from "next";
import { highlightChips } from "@/data/intentmesh";
import { PullsheetSpotlight } from "@/components/marketing/PullsheetSpotlight";
import { CredibilityStrip } from "@/components/marketing/CredibilityStrip";
import { WhyIntentMesh } from "@/components/marketing/WhyIntentMesh";

export const metadata: Metadata = {
  title: "Pullsheet | IntentMesh",
  description:
    "Pullsheet closed beta: offline-ready elevator diagnostics with GPT-5.1 high reasoning included during beta. Limited seats; request access.",
  openGraph: {
    title: "Pullsheet | IntentMesh",
    description:
      "Pullsheet closed beta: offline-ready elevator diagnostics with GPT-5.1 high reasoning included during beta. Limited seats; request access.",
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
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            <span>Pullsheet</span>
            <span className="rounded-full bg-teal-500/20 px-3 py-1 text-teal-100">Closed Beta</span>
          </div>
          <h1 id="pullsheet-hero-title" className="mt-4 text-4xl font-headline tracking-tight md:text-5xl">
            AI that respects the work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Diagnose faster. Capture cleaner. Stay legal. Pullsheet runs offline, guides on real controllers, and turns field
            intelligence into a compounding asset for crews, supervisors, and owners.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Closed beta (iOS TestFlight & Android Play Store). GPT-5.1 high reasoning included during beta and currently free.
            Seats are limited; product will be paid at launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
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

      <section className="container-outer pb-16">
        <div className="jelly-surface grid gap-8 px-8 py-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Traction</p>
            <h3 className="mt-3 text-2xl font-semibold">Pilots with elevator crews</h3>
            <p className="mt-3 text-sm text-slate-200">
              Closed beta: diagnostics closing faster, compliant logbooks, real controllers, no OEM leakage.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              <li>• Offline-first guidance with AI stitched to code-verified steps</li>
              <li>• GPT-5.1 high reasoning included during closed beta (free while it lasts)</li>
              <li>• Safety rails to keep proprietary/OEM material out</li>
              <li>• Crew-ready on iOS TestFlight and Android Play Store</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Get Pullsheet</p>
            <h3 className="mt-3 text-2xl font-semibold">Deploy with your crews</h3>
            <p className="mt-3 text-sm text-slate-200">
              Request closed beta access. Limited seats, currently free during beta; paid product at launch.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <Link href="/contact" className="jelly-pill px-5 py-3 text-xs uppercase tracking-[0.25em]">
                Talk to us
              </Link>
              <Link
                href="https://pullsheet.app"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:border-white/40"
              >
                Visit Pullsheet
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                AI systems that turn complexity into clarity, serving regulated, offline, safety-critical work.
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
          <p className="mt-6 text-sm text-slate-300">
            Labs are paused while we focus on the Pullsheet closed beta.
          </p>
        </div>
      </section>
    </main>
  );
}

