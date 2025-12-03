import Link from "next/link";

const pilotHighlights = [
  "Priority onboarding for 3–5 crews with offline-first kits",
  "Compliance-grade capture, retention, and safety rails",
  "Shared field telemetry reviews with IntentMesh labs"
];

export function EnterprisePilot() {
  return (
    <div className="mt-8 rounded-2xl border accent-border bg-white/5 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.32)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] accent-label">Enterprise Pilot</p>
          <h3 className="text-lg font-semibold text-white">Pilot Pullsheet Enterprise</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-100">
            {pilotHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--accent))" }} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="https://cal.com/intentmesh"
          className="jelly-pill inline-flex items-center justify-center px-5 py-2 text-xs uppercase tracking-[0.25em]"
        >
          Book pilot call
        </Link>
      </div>
    </div>
  );
}
