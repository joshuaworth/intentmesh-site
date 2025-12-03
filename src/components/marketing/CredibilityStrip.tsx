import { credibilityItems } from "@/data/intentmesh";

export function CredibilityStrip() {
  return (
    <section aria-label="Credibility" className="container-outer" id="why">
      <div
        className="mt-12 rounded-3xl border text-center text-sm text-white shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        style={{ borderColor: "hsla(var(--accent) / 0.45)", background: "hsla(var(--accent) / 0.12)" }}
      >
        <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          {credibilityItems.map((item) => (
            <div key={item} className="px-6 py-6">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

