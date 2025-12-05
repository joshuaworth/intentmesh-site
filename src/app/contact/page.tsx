import type { Metadata } from "next";
import { ContactSection } from "@/components/marketing/ContactSection";

export const metadata: Metadata = {
  title: "Contact | IntentMesh",
  description: "Reach IntentMesh to deploy Pullsheet, collaborate on pilots, or talk AI safety for the field.",
  openGraph: {
    title: "Contact | IntentMesh",
    description: "Talk to IntentMesh about Pullsheet pilots, labs, or AI systems for regulated work.",
    url: "https://intentmesh.systems/contact",
    images: ["/og-intentmesh.png"],
  },
  alternates: {
    canonical: "https://intentmesh.systems/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="text-white">
      <section className="container-outer pt-28 pb-8" aria-labelledby="contact-hero-title">
        <div className="jelly-surface px-8 py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Contact</p>
          <h1 id="contact-hero-title" className="mt-3 text-4xl font-headline tracking-tight md:text-5xl">
            Talk to IntentMesh.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-200">
            Pullsheet pilots, safety reviews, AI for regulated trades, or investment conversations. Tell us what you need and
            we’ll respond quickly.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-300">
            We keep responses OEM-clean, actionable, and aligned to the realities of the field.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-100">
            <a
              href="mailto:hq@intentmesh.systems"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 hover:border-white/40"
            >
              hq@intentmesh.systems
            </a>
            <a
              href="https://x.com/joshuaworth"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 hover:border-white/40"
              target="_blank"
              rel="noreferrer"
            >
              X / joshuaworth
            </a>
            <a
              href="https://www.linkedin.com/in/joshuaiuec"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 hover:border-white/40"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

