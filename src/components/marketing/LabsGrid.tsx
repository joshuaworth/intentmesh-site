import Link from "next/link";
import { labs } from "@/data/intentmesh";

export function LabsGrid() {
  return (
    <section id="labs" className="container-outer py-16 text-white">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] accent-label">IntentMesh Labs</p>
          <h2 className="mt-2 text-3xl font-headline leading-tight">Research tools shaping our future ecosystem</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            These experiments feed the mesh—everything we learn in the field rolls back into AI guidance, controller training,
            and manufacturing workflows.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <article key={lab.name} className="group accent-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{lab.name}</h3>
              <span aria-hidden="true" className="text-sm accent-text">
                →
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-200">{lab.description}</p>
            <Link
              href={lab.href}
              className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.2em] accent-label"
            >
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

