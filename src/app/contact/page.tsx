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
            Pullsheet pilots, safety reviews, AI for regulated trades, or investment conversations—tell us what you need
            and we’ll respond faster than most elevator cars travel.
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

