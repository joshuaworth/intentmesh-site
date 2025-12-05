 "use client";

 "use client";

import { pullsheetFeatures } from "@/data/intentmesh";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function PullsheetSpotlight() {
  const screenshots = [
    { src: "/images/pullsheet-mobile.png", alt: "Pullsheet mobile troubleshooting screen" },
    { src: "/images/pullsheet-0990.png", alt: "Pullsheet diagnostic session screen 1" },
    { src: "/images/pullsheet-0991.png", alt: "Pullsheet diagnostic session screen 2" },
    { src: "/images/pullsheet-0992.png", alt: "Pullsheet diagnostic session screen 3" },
    { src: "/images/pullsheet-0993.png", alt: "Pullsheet diagnostic session screen 4" },
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

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
              src={screenshots[index].src}
              alt={screenshots[index].alt}
              width={1260}
              height={2736}
              className="h-full w-full object-contain"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/70 to-transparent px-4 py-3 text-xs text-slate-100">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-white/20 px-3 py-1 hover:border-white/40"
              >
                Prev
              </button>
              <div className="flex gap-2">
                {screenshots.map((_, i) => (
                  <span
                    key={i}
                    aria-label={`Screenshot ${i + 1}`}
                    className={`h-2 w-2 rounded-full ${i === index ? "bg-teal-300" : "bg-white/30"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="rounded-full border border-white/20 px-3 py-1 hover:border-white/40"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




