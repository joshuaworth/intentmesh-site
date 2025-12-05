import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { PullsheetSpotlight } from "@/components/marketing/PullsheetSpotlight";
import { CredibilityStrip } from "@/components/marketing/CredibilityStrip";
import { IntentLayerDiagram } from "@/components/marketing/IntentLayerDiagram";
import { ContactSection } from "@/components/marketing/ContactSection";
import { Footer } from "@/components/marketing/Footer";
import { WhyIntentMesh } from "@/components/marketing/WhyIntentMesh";

export default function Home() {
  return (
    <div className="mesh-stage">
      <Header />
      <main className="pt-8">
        <Hero />
        <WhyIntentMesh />
        <PullsheetSpotlight />
        <CredibilityStrip />
        <div className="mesh-divider" aria-hidden="true" />
        <IntentLayerDiagram />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
