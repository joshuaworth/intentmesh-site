import { pullsheetFeatures } from "@/data/intentmesh";
import Image from "next/image";
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
            Pullsheet lets crews pick a mode, describe the problem, add photos/voice, and get guided steps that stay OEM-clean.
            It runs offline and keeps everything in a compliant logbook.
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
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 shadow-[0_35px_80px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/pullsheet-mobile.png"
              alt="Pullsheet mobile troubleshooting screen"
              width={1260}
              height={2736}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

