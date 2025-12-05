import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="border-t border-white/10 bg-slate-900/70 text-white">
      <div className="container-outer flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">Ready to talk</p>
          <p className="text-sm text-slate-200">Deploy Pullsheet or run a pilot with your crews.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
          <Link href="/contact" className="jelly-pill px-5 py-3">
            Contact
          </Link>
          <Link
            href="/pullsheet"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 font-semibold text-white hover:border-white/40"
          >
            Pullsheet
          </Link>
        </div>
      </div>
    </section>
  );
}

