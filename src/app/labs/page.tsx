import type { Metadata } from "next";
import { LabsGrid } from "@/components/marketing/LabsGrid";

export const metadata: Metadata = {
  title: "Labs | IntentMesh",
  description:
    "IntentMesh Labs explores the next wave of field intelligence: training, inspectors, narrative tools, and manufacturing workflows feeding the mesh.",
  openGraph: {
    title: "Labs | IntentMesh",
    description:
      "Research tools shaping the IntentMesh ecosystem—from Smartprentice simulations to field inspectors and manufacturing ops.",
    url: "https://intentmesh.systems/labs",
    images: ["/og-intentmesh.png"],
  },
  alternates: {
    canonical: "https://intentmesh.systems/labs",
  },
};

export default function LabsPage() {
  return (
    <main className="text-white">
      <section className="container-outer pt-28 pb-12" aria-labelledby="labs-hero-title">
        <div className="jelly-surface px-8 py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">IntentMesh Labs</p>
          <h1 id="labs-hero-title" className="mt-3 text-4xl font-headline tracking-tight md:text-5xl">
            Experiments that feed the mesh.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">
            Every lab project hardens Pullsheet and the IntentMesh core—training sims, inspectors, narrative tools, and ops
            that compound real field intelligence across teams.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            Output flows back into the field: better diagnostics, safer work, and faster onboarding for crews.
          </p>
        </div>
      </section>

      <LabsGrid />
    </main>
  );
}

