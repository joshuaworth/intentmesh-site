import { pullsheetFeatures } from "@/data/intentmesh";
import Link from "next/link";

export function PullsheetSpotlight() {
  return (
    <section id="pullsheet" className="container-outer py-16 text-white">
      <div className="jelly-surface grid gap-10 px-8 py-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200" id="pullsheet-heading">
            Pullsheet spotlight
          </p>
          <h2 className="mt-4 text-3xl font-headline">The intent layer for elevator diagnostics</h2>
          <p className="mt-4 text-slate-200">
            Pullsheet gives field crews the same clarity the system designer has—fault logic, schematics, training,
            and compliance mapped to the exact equipment in front of them. It runs offline, stays legal-clean, and
            teaches every time you open it.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-100">
            {pullsheetFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href="https://pullsheet.app"
            className="mt-8 inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:border-white/40"
          >
            Learn about Pullsheet
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-teal-400/20 to-cyan-400/20 blur-3xl" />
          <div className="relative rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-[0_35px_80px_rgba(0,0,0,0.6)]">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Pullsheet Edge</span>
              <span>Offline sync: OK</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl bg-slate-800/80 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-lime-300">Fault Logic</p>
                <p className="mt-2 font-semibold text-white">E04 selector drift after reversal</p>
                <p className="mt-2 text-slate-300">AI reasoning stitched to OEM-free, code-verified steps.</p>
              </div>
              <div className="rounded-2xl bg-slate-800/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Annotated Field Capture</p>
                <p className="mt-2 text-slate-200">
                  Voice, camera, and schematics stitched into logbook entries that stay legal.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-800/60 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Controller Training Loop</p>
                <p className="mt-2 text-slate-200">Real selectors, relay logic, and ladder drills built for apprentices.</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
              <span>Compliance pack updated 48m ago</span>
              <span>Last sync: offline · ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

