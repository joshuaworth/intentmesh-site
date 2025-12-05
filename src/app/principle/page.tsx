import type { Metadata } from "next";
import { IntentLayerDiagram } from "@/components/marketing/IntentLayerDiagram";
import { WhyIntentMesh } from "@/components/marketing/WhyIntentMesh";

export const metadata: Metadata = {
  title: "Principle | IntentMesh",
  description:
    "The intent layer: offline-first AI, safety rails, and a compounding knowledge graph for regulated, high-stakes work.",
  openGraph: {
    title: "Principle | IntentMesh",
    description:
      "How IntentMesh turns field intelligence into a defensible loop—offline reasoning, compliance-first capture, and AI safety for real crews.",
    url: "https://intentmesh.systems/principle",
    images: ["/og-intentmesh.png"],
  },
  alternates: {
    canonical: "https://intentmesh.systems/principle",
  },
};

export default function PrinciplePage() {
  return (
    <main className="text-white">
      <section className="container-outer pt-28 pb-12" aria-labelledby="principle-hero-title">
        <div className="jelly-surface px-8 py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">Principle</p>
          <h1 id="principle-hero-title" className="mt-3 text-4xl font-headline tracking-tight md:text-5xl">
            The intent layer for the built world.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">
            IntentMesh was built by working elevator mechanics to keep AI grounded in safety, compliance, and real
            hardware. Offline-first, legally clean, and tuned for field intelligence that compounds.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-slate-300">
            Founder: Joshua Worth — elevator constructor and builder of AI systems that turn complexity into clarity.
            Company: Intent Mesh LLC — privately held AI shop focused on regulated, high-stakes work.
          </p>
        </div>
      </section>

      <WhyIntentMesh />
      <IntentLayerDiagram />
    </main>
  );
}

