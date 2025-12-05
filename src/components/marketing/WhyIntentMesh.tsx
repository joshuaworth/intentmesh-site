export function WhyIntentMesh() {
  return (
    <section className="container-outer py-16 text-white">
      <div className="grid gap-8 md:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Market Thesis</p>
          <h3 className="mt-3 text-xl font-semibold">Edge-first AI for regulated trades</h3>
          <p className="mt-3 text-sm text-slate-200">
            Elevator downtime is a $10B+ drag. Crews operate in RF shadows and legal minefields, which kills generic AI
            assistants. Pullsheet’s offline engine and safety rails unlock AI where it actually hurts.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Traction</p>
          <h3 className="mt-3 text-xl font-semibold">Built and tested with crews</h3>
          <p className="mt-3 text-sm text-slate-200">
            Pullsheet closes diagnostics faster, keeps logbooks compliant, and trains new hires on real controllers rather than abstract sims.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Moat</p>
          <h3 className="mt-3 text-xl font-semibold">Intent layer across hardware</h3>
          <p className="mt-3 text-sm text-slate-200">
            Every crew interaction enriches the IntentMesh graph, which flows back into training, manufacturing, and AI
            oversight. This creates a defensible data loop VC partners and enterprise buyers care about.
          </p>
        </article>
      </div>
    </section>
  );
}

